"use server";

import { aiConfig } from "@/lib/ai";
import { generateObject } from "ai";
import { countTokens } from "gpt-tokenizer";
import { z } from "zod";

export type GiftIdea = {
	idea: string;
	name: string;
	searchQuery: string;
	description: string;
};

export async function generatePresentIdeas(
	anonymizedContent: string,
): Promise<GiftIdea[]> {
	try {
		console.log(
			"Server: Generating ideas for content length:",
			anonymizedContent.length,
		);

		const finalPrompt = `You are helping pick personal present ideas. Read the chat below and propose 10–15 highly personalized present ideas that clearly reference the conversation (interests, hobbies, inside jokes, plans, milestones).

Output format rules:
- Return only a JSON array (no wrapper object, no keys like "elements").
- Each array item must be an object with exactly these fields: {"name": string, "searchQuery": string, "description": string}.
- searchQuery should be generic Amazon keywords joined with plus signs, e.g. "gaming+laptop" or "artisan+pottery+class+gift+card".
- Do not number items or include extraneous text.

For each idea, output:
- name: short present name suitable as a list item (max 120 chars)
- searchQuery: concise Amazon search keywords (e.g., "gaming+laptop" or "artisan+pottery+class+gift+card"). Only use generic keyword phrases; do not include URLs, brand endorsement, or special characters besides plus signs and spaces.
- description: 1–3 sentences explaining why it fits, explicitly tying back to the chat context (max ~400 chars).

Chat conversation:
${anonymizedContent}`;

		const genStart = Date.now();
		const withTimeout = async <T>(
			promise: Promise<T>,
			ms: number,
		): Promise<T> => {
			return await Promise.race([
				promise,
				new Promise<T>((_, reject) =>
					setTimeout(
						() => reject(new Error(`LLM request timed out after ${ms}ms`)),
						ms,
					),
				),
			]);
		};

		const IdeaSchema = z.object({
			name: z
				.string()
				.describe("Short present name suitable as a list item (max 120 chars)"),
			searchQuery: z
				.string()
				.describe(
					"Concise Amazon search keywords (e.g., 'gaming+laptop' or 'artisan+pottery+class+gift+card'). Only use generic keyword phrases; do not include URLs, brand endorsement, or special characters besides plus signs and spaces.",
				),
			description: z
				.string()
				.describe(
					"1–3 sentences explaining why it fits, explicitly tying back to the chat context (max ~400 chars)",
				),
		});

		const { object } = await withTimeout(
			generateObject({
				model: aiConfig.openai("gpt-5-nano-2025-08-07"),
				output: "array",
				schema: IdeaSchema,
				mode: "json",
				prompt: `${finalPrompt}\n\nReturn only a JSON array where each element is an object with fields: name, searchQuery, description (no extra properties). No numbering. No wrapper object.`,
			}),
			90_000,
		);
		const ideas = object as GiftIdea[];
		const genMs = Date.now() - genStart;
		console.log(
			"Server: generateObject latency (ms):",
			genMs,
			"ideas:",
			ideas.length,
		);
		return ideas;
	} catch (error) {
		console.error("Server: Error generating ideas:", error);
		throw new Error("Failed to generate gift ideas. Please try again.");
	}
}

export async function processContentChunks(anonymizedContent: string): Promise<{
	chunks: string[];
	totalTokens: number;
	estimatedCost: number;
	chunkTokenCounts: number[];
}> {
	console.log(
		"Server: Processing content chunks, input length:",
		anonymizedContent.length,
	);

	const tokenLimitPerChunk = 100_000;
	console.log("Server: Token chunk limit:", tokenLimitPerChunk);

	const countStart = Date.now();
	const totalTokens = countTokens(anonymizedContent);
	const countMs = Date.now() - countStart;
	console.log("Server: Total tokens:", totalTokens);
	console.log("Server: Token count latency (ms):", countMs);

	const chunks: string[] = [];
	const chunkTokenCounts: number[] = [];
	const lines = anonymizedContent.split("\n");
	let currentChunk = "";
	let currentChunkTokens = 0;
	const margin = 200; // safety margin to avoid boundary overflows

	const splitStart = Date.now();
	let processedLines = 0;
	for (const line of lines) {
		const addition = `${line}\n`;
		const additionTokens = countTokens(addition);
		if (
			currentChunkTokens + additionTokens <=
			Math.max(0, tokenLimitPerChunk - margin)
		) {
			currentChunk += addition;
			currentChunkTokens += additionTokens;
		} else {
			if (currentChunk) {
				const finalized = currentChunk.trim();
				chunks.push(finalized);
				chunkTokenCounts.push(currentChunkTokens);
			}
			currentChunk = addition;
			currentChunkTokens = additionTokens;
		}
		processedLines += 1;
		if (processedLines % 1000 === 0) {
			console.log(
				"Server: Chunking progress lines=",
				processedLines,
				"currentChunkTokens=",
				currentChunkTokens,
			);
		}
	}

	if (currentChunk.trim()) {
		const finalized = currentChunk.trim();
		chunks.push(finalized);
		chunkTokenCounts.push(currentChunkTokens);
	}

	console.log("Server: Created", chunks.length, "chunks");
	console.log("Server: Chunk token counts:", chunkTokenCounts.join(","));
	console.log("Server: Chunk split latency (ms):", Date.now() - splitStart);

	const estimatedCost =
		(totalTokens / 1_000_000) * 0.1 +
		((chunks.length * 1_000) / 1_000_000) * 0.4;

	return {
		chunks,
		totalTokens,
		estimatedCost,
		chunkTokenCounts,
	};
}
