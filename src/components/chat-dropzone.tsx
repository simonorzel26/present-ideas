"use client";

import {
	type GiftIdea,
	generatePresentIdeas,
	processContentChunks,
} from "@/app/actions";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
	Dropzone,
	DropzoneContent,
	DropzoneEmptyState,
} from "@/components/ui/kibo-ui/dropzone";
import {
	type ProcessedChatData,
	estimateCost,
	processChatFile,
} from "@/lib/chat-processor";
import {
	FileText,
	Loader2,
	MessageCircle,
	MessageSquare,
	Upload,
	Zap,
} from "lucide-react";
import { useState } from "react";

type ChatDropzoneProps = {
	onIdeasGeneratedAction: (ideas: GiftIdea[]) => void;
	onProcessingStartAction: () => void;
	onProcessingCompleteAction: () => void;
};

export function ChatDropzone({
	onIdeasGeneratedAction,
	onProcessingStartAction,
	onProcessingCompleteAction,
}: ChatDropzoneProps) {
	const [uploadedFile, setUploadedFile] = useState<File | null>(null);
	const [processedData, setProcessedData] = useState<ProcessedChatData | null>(
		null,
	);
	const [isProcessing, setIsProcessing] = useState(false);
	const [processingProgress, setProcessingProgress] = useState<string>("");
	const [currentChunk, setCurrentChunk] = useState<number>(0);
	const [totalChunks, setTotalChunks] = useState<number>(0);
	const [tokenInfo, setTokenInfo] = useState<{
		total: number;
		chunks: number;
		estimatedCost: number;
	} | null>(null);
	const [error, setError] = useState<string | null>(null);

	const formatBytes = (bytes: number): string => {
		const units = ["B", "KB", "MB", "GB"];
		let size = bytes;
		let unitIndex = 0;
		while (size >= 1024 && unitIndex < units.length - 1) {
			size /= 1024;
			unitIndex += 1;
		}
		return `${size.toFixed(2)} ${units[unitIndex]}`;
	};

	let requestCounter = 0;
	const MAX_REQUESTS_PER_FILE = 5;

	const handleFileDrop = async (acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		if (!file) return;

		console.log("File dropped:", file.name, file.size, "bytes");
		setError(null);
		setUploadedFile(file);
		setIsProcessing(true);
		onProcessingStartAction();
		onIdeasGeneratedAction([]);

		try {
			const readStart = performance.now();
			console.log("Reading file content...");
			setProcessingProgress("Reading file content...");
			const fileContent = await file.text();
			const readMs = Math.round(performance.now() - readStart);
			console.log(
				"File content length:",
				fileContent.length,
				"characters",
				`(${readMs}ms)`,
			);

			const processStart = performance.now();
			console.log("Processing chat file...");
			setProcessingProgress("Processing chat file...");
			const processed = processChatFile(fileContent);
			const processMs = Math.round(performance.now() - processStart);
			console.log("Processed data:", {
				messages: processed.messages.length,
				participants: processed.participants.length,
				contentLength: processed.anonymizedContent.length,
				latencyMs: processMs,
			});
			setProcessedData(processed);

			console.log("Tokenizing content into ~100k-token chunks on server...");
			setProcessingProgress("Tokenizing conversation by tokens...");
			const tokenizeStart = performance.now();
			const {
				chunks: tokenizedChunks,
				totalTokens,
				estimatedCost,
				chunkTokenCounts,
			} = await processContentChunks(processed.anonymizedContent);
			const tokenizeMs = Math.round(performance.now() - tokenizeStart);

			console.log(
				"Created",
				tokenizedChunks.length,
				"tokenized chunks",
				`(${tokenizeMs}ms)`,
			);
			console.log("Tokenized chunk token counts:", chunkTokenCounts);

			setTotalChunks(tokenizedChunks.length);
			setTokenInfo({
				total: totalTokens,
				chunks: tokenizedChunks.length,
				estimatedCost,
			});

			const allIdeas: GiftIdea[] = [];
			if (tokenizedChunks.length === 0) {
				console.warn(
					"No tokenized chunks returned from server. Skipping generation.",
				);
			}

			let completed = 0;
			console.log(`Launching ${tokenizedChunks.length} chunk jobs (parallel)`);
			const jobs = tokenizedChunks.map(async (chunk, currentIndex) => {
				if (requestCounter >= MAX_REQUESTS_PER_FILE) {
					if (currentIndex === 0) {
						console.warn("Max LLM requests per file reached; truncating.");
					}
					return;
				}
				requestCounter += 1;
				const tokenCount = chunkTokenCounts?.[currentIndex] ?? 0;
				if (!chunk) return;
				try {
					console.log(
						`Starting chunk ${currentIndex + 1}/${tokenizedChunks.length} (~${tokenCount} tokens)`,
					);
					const t0 = performance.now();
					const ideas = await generatePresentIdeas(chunk);
					const t1 = Math.round(performance.now() - t0);
					console.log(
						`Finished chunk ${currentIndex + 1}: ${t1}ms, received ideas: ${ideas.length}`,
					);
					// append-on-resolve
					allIdeas.push(...ideas);
					const uniqueSoFar = allIdeas.filter(
						(idea, index, self) =>
							index === self.findIndex((i) => i.name === idea.name),
					);
					onIdeasGeneratedAction(uniqueSoFar);
				} catch (err) {
					console.error(
						`Error generating ideas for chunk ${currentIndex + 1}:`,
						err,
					);
				} finally {
					completed += 1;
					setCurrentChunk(completed);
					setProcessingProgress(
						`Generated ${completed} of ${tokenizedChunks.length} parts...`,
					);
				}
			});
			await Promise.allSettled(jobs);
			console.log("All chunk jobs finished.");

			console.log("Total ideas generated:", allIdeas.length);
			const uniqueIdeas = allIdeas.filter(
				(idea, index, self) =>
					index === self.findIndex((i) => i.name === idea.name),
			);
			console.log("Final unique ideas:", uniqueIdeas.length, {
				totalIdeas: allIdeas.length,
			});
			onIdeasGeneratedAction(uniqueIdeas);
		} catch (err) {
			console.error("Error processing file:", err);
			setError(
				`Failed to process the chat file: ${err instanceof Error ? err.message : "Unknown error"}`,
			);
		} finally {
			console.log("Processing complete");
			setIsProcessing(false);
			setProcessingProgress("");
			onProcessingCompleteAction();
		}
	};

	const handleFileRejection = (error: Error) => {
		if (error.message.includes("maxSize")) {
			setError("File is too large. Please upload a file smaller than 5MB.");
		} else {
			setError("Please upload a valid text file.");
		}
	};

	return (
		<div className="relative z-10 w-full space-y-4">
			<Dropzone
				accept={{ "text/plain": [".txt"] }}
				maxFiles={1}
				maxSize={5 * 1024 * 1024}
				onDrop={handleFileDrop}
				onError={handleFileRejection}
				disabled={isProcessing}
				src={uploadedFile ? [uploadedFile] : undefined}
				className="group relative z-10 min-h-[200px] rounded-xl border-dashed bg-card transition-colors"
			>
				<DropzoneEmptyState>
					<div className="flex flex-col items-center justify-center space-y-4">
						<div className="flex size-20 items-center justify-center rounded-2xl bg-muted text-foreground shadow-sm">
							<Upload className="size-8" />
						</div>
						<div className="text-center">
							<p className="font-semibold text-lg tracking-tight">
								DRAG & DROP YOUR .TXT FILE
							</p>
							<p className="text-muted-foreground text-sm">
								Max 5MB • Or click to browse
							</p>
							<div className="mt-2 flex items-center justify-center gap-2">
								<MessageCircle className="h-4 w-4 text-foreground/60" />
								<span className="text-muted-foreground text-xs">WhatsApp</span>
								<span className="text-muted-foreground text-xs">•</span>
								<MessageSquare className="h-4 w-4 text-foreground/60" />
								<span className="text-muted-foreground text-xs">iMessage</span>
							</div>
						</div>
					</div>
				</DropzoneEmptyState>
				<DropzoneContent>
					<div className="flex w-full items-center justify-between gap-4">
						<div className="flex items-center gap-3">
							<div className="flex size-10 items-center justify-center rounded-md bg-foreground/5">
								<FileText className="size-5" />
							</div>
							<div className="text-left">
								<p className="font-bold leading-tight">{uploadedFile?.name}</p>
								<p className="font-medium text-muted-foreground text-xs">
									{uploadedFile ? formatBytes(uploadedFile.size) : ""}
								</p>
							</div>
						</div>
						<div className="font-bold text-muted-foreground text-xs">
							CLICK TO REPLACE
						</div>
					</div>
				</DropzoneContent>
			</Dropzone>

			{error && (
				<Alert variant="destructive" className="rounded-xl">
					<AlertDescription className="font-bold">{error}</AlertDescription>
				</Alert>
			)}

			{isProcessing && (
				<div className="space-y-3 text-center">
					<div className="mx-auto inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-2 text-muted-foreground text-sm">
						<Loader2 className="size-4 animate-spin" />
						<span>{processingProgress || "Generating…"}</span>
					</div>
					<p className="text-muted-foreground text-xs">
						By continuing you agree that parts of your uploaded text may be sent
						to OpenAI to generate ideas. You are responsible for the content you
						share.
					</p>
					{totalChunks > 0 && (
						<div className="text-muted-foreground text-sm">
							{currentChunk} / {totalChunks} parts
						</div>
					)}
				</div>
			)}

			{processedData && !isProcessing && (
				<Alert className="rounded-xl">
					<Zap className="size-5" />
					<AlertDescription className="font-bold">
						Successfully processed {processedData.messages.length} messages from{" "}
						{processedData.participants.length} participants.
						{tokenInfo && (
							<span className="mt-2 block font-medium text-xs">
								Total tokens: {tokenInfo.total.toLocaleString()} | Chunks:{" "}
								{tokenInfo.chunks} | Est. cost: $
								{tokenInfo.estimatedCost.toFixed(4)}
							</span>
						)}
					</AlertDescription>
				</Alert>
			)}
		</div>
	);
}
