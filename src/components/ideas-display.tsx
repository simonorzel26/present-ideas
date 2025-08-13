"use client";

import type { GiftIdea } from "@/app/actions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, Lightbulb, Sparkles } from "lucide-react";
import { useRef } from "react";

type IdeasDisplayProps = {
	ideas: GiftIdea[];
	isLoading?: boolean;
	embedded?: boolean;
};

export function IdeasDisplay({
	ideas,
	isLoading,
	embedded,
}: IdeasDisplayProps) {
	const skeletonKeysRef = useRef<string[]>([]);

	const renderSkeleton = (count: number) => {
		if (skeletonKeysRef.current.length < count) {
			skeletonKeysRef.current = skeletonKeysRef.current.concat(
				Array.from({ length: count - skeletonKeysRef.current.length }, () =>
					crypto.randomUUID(),
				),
			);
		}
		const keys = skeletonKeysRef.current.slice(0, count);
		return (
			<div className="space-y-4">
				{keys.map((key) => (
					<div
						key={key}
						className="h-20 animate-pulse rounded-xl border border-foreground/10 bg-white/80 shadow-sm"
					/>
				))}
			</div>
		);
	};

	const getIdeaIcon = (index: number) => {
		const icons = ["💥", "🔥", "⚡", "🎭", "✨", "🎨", "🎪", "🎯"];
		return icons[index % icons.length];
	};

	if (!ideas.length && !isLoading) {
		return null;
	}

	if (embedded) {
		return (
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<span className="graffiti-text inline-flex items-center gap-2 font-bold text-sm">
							<Sparkles className="h-5 w-5" />
							{ideas.length} PERSONAL GIFT IDEAS
						</span>
						{isLoading && (
							<Badge variant="secondary" className="rebel-badge font-bold">
								GENERATING CHAOS…
							</Badge>
						)}
					</div>
				</div>
				<p className="text-muted-foreground text-xs">
					As an Amazon Associate we earn from qualifying purchases.
				</p>
				<div className="space-y-4">
					{ideas.map((idea, index) => (
						<div
							key={`${idea.name}::${idea.searchQuery}`}
							className="relative flex items-start justify-between gap-4 overflow-hidden rounded-xl bg-white/70 p-5 shadow-lg backdrop-blur-sm"
						>
							<div className="absolute top-3 right-3 text-2xl">
								{getIdeaIcon(index)}
							</div>
							<div className="flex-1 select-none space-y-3">
								<div className="flex items-start gap-2">
									<Lightbulb className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-600" />
									<p className="graffiti-text font-bold text-base leading-relaxed">
										{idea.name}
									</p>
								</div>
								<div className="flex items-start gap-2">
									<Heart className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
									<p className="font-medium text-muted-foreground text-sm leading-relaxed">
										{idea.description}
									</p>
								</div>
							</div>
							<div className="flex flex-shrink-0 items-center gap-2">
								<a
									href={`https://www.amazon.com/s?k=${encodeURIComponent(idea.searchQuery)}&tag=presentidea03-20`}
									target="_blank"
									rel="nofollow noopener noreferrer"
									className="inline-flex items-center rounded-md bg-foreground/5 px-3 py-1 font-semibold text-xs hover:bg-foreground/10"
								>
									View on Amazon
								</a>
							</div>
						</div>
					))}
					{isLoading && renderSkeleton(4)}
				</div>
			</div>
		);
	}

	return (
		<Card className="rounded-2xl border-0 shadow-lg">
			<CardHeader>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<CardTitle className="graffiti-text flex items-center gap-2">
							<Sparkles className="h-6 w-6" />
							PERSONAL GIFT IDEAS ({ideas.length})
						</CardTitle>
						{isLoading && (
							<Badge variant="secondary" className="rebel-badge font-bold">
								GENERATING CHAOS…
							</Badge>
						)}
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<ScrollArea className="h-[560px] pr-4">
					<div className="space-y-5">
						<p className="text-muted-foreground text-xs">
							As an Amazon Associate we earn from qualifying purchases.
						</p>
						{ideas.map((idea, index) => (
							<div
								key={`${idea.name}::${idea.searchQuery}`}
								className="relative flex items-start justify-between gap-4 overflow-hidden rounded-xl bg-white/70 p-5 shadow-lg backdrop-blur-sm"
							>
								<div className="absolute top-3 right-3 text-2xl">
									{getIdeaIcon(index)}
								</div>
								<div className="flex-1 select-none space-y-3">
									<div className="flex items-start gap-2">
										<Lightbulb className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-600" />
										<p className="graffiti-text font-bold text-sm leading-relaxed">
											{idea.name}
										</p>
									</div>
									<div className="flex items-start gap-2">
										<Heart className="mt-1 h-4 w-4 flex-shrink-0 text-red-500" />
										<p className="font-medium text-muted-foreground text-xs leading-relaxed">
											{idea.description}
										</p>
									</div>
								</div>
								<div className="flex flex-shrink-0 items-center gap-2">
									<a
										href={`https://www.amazon.com/s?k=${encodeURIComponent(idea.searchQuery)}&tag=presentidea03-20`}
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="inline-flex items-center rounded-md bg-foreground/5 px-3 py-1 font-semibold text-xs hover:bg-foreground/10"
									>
										View on Amazon
									</a>
								</div>
							</div>
						))}
						{isLoading && <div className="pt-3">{renderSkeleton(4)}</div>}
					</div>
				</ScrollArea>
			</CardContent>
		</Card>
	);
}
