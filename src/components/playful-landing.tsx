"use client";

import type { GiftIdea } from "@/app/actions";
import { ChatIdeasPanel } from "@/components/chat-ideas-panel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Heart, Star, Zap } from "lucide-react";

type PlayfulLandingProps = {
	onIdeasGeneratedAction: (ideas: GiftIdea[]) => void;
	onProcessingStartAction: () => void;
	onProcessingCompleteAction: () => void;
};

export function PlayfulLanding({
	onIdeasGeneratedAction,
	onProcessingStartAction,
	onProcessingCompleteAction,
}: PlayfulLandingProps) {
	return (
		<Card className="border-0 bg-transparent shadow-none">
			<CardContent className="p-0">
				<div className="relative overflow-hidden rounded-3xl">
					<div className="relative grid gap-8 p-6 md:p-10">
						<div className="text-center">
							<div className="mx-auto inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-2 text-foreground text-sm">
								<Zap className="size-4" />
								REVOLUTIONARY PRESENTS
							</div>
							<h1 className="mt-6 text-balance font-black text-6xl leading-tight tracking-tight md:text-7xl">
								<span className="wild-gradient bg-clip-text text-transparent">
									DROP. SMASH. CREATE.
								</span>
							</h1>
							<p className="mx-auto mt-4 max-w-2xl text-balance font-medium text-lg text-muted-foreground">
								Export a chat as .txt and drop it here. We turn inside jokes and
								weekend plans into gift ideas that will blow minds.
							</p>
						</div>

						<div className="relative mx-auto w-full max-w-2xl">
							<ChatIdeasPanel />

							<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
								<Badge variant="secondary" className="rounded-full">
									<Heart className="mr-1 size-3" />
									iMessage → Export Chat
								</Badge>
								<Badge variant="secondary" className="rounded-full">
									<Star className="mr-1 size-3" />
									WhatsApp → Export .txt
								</Badge>
								<Badge variant="secondary" className="rounded-full">
									<Zap className="mr-1 size-3" />
									Drag anywhere in the box
								</Badge>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
