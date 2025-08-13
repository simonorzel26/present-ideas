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
				<div className="chaos-border relative overflow-hidden rounded-3xl">
					<div className="-z-10 pointer-events-none absolute inset-0 opacity-90 [mask-image:radial-gradient(70%_70%_at_50%_35%,#000_40%,transparent_100%)]">
						<div className="-top-36 -left-28 absolute size-[28rem] rounded-full bg-gradient-to-br from-rose-200/75 to-fuchsia-200/40 blur-3xl" />
						<div className="-bottom-44 -right-28 absolute size-[30rem] rounded-full bg-gradient-to-br from-sky-200/75 to-indigo-200/40 blur-3xl" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:12px_12px]" />
					</div>
					<div className="relative grid gap-8 p-6 md:p-10">
						<div className="text-center">
							<div className="rebel-badge mx-auto inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 font-bold text-foreground text-sm shadow-lg backdrop-blur-sm">
								<Zap className="size-4" />
								REVOLUTIONARY PRESENTS
							</div>
							<h1 className="mt-6 text-balance font-black text-6xl leading-tight tracking-tight md:text-7xl">
								<span className="graffiti-text graffiti-shadow wild-gradient bg-clip-text text-transparent">
									DROP. SMASH. CREATE.
								</span>
							</h1>
							<p className="mx-auto mt-4 max-w-2xl text-balance font-medium text-lg text-muted-foreground">
								Export a chat as .txt and drop it here. We turn inside jokes and
								weekend plans into gift ideas that will blow minds.
							</p>
						</div>

						<div className="relative mx-auto w-full max-w-2xl">
							<div className="-left-8 -top-8 md:-left-14 md:-top-12 pointer-events-none absolute select-none">
								<div className="sticker-float chaos-border rotate-[-8deg] rounded-2xl bg-white/80 px-3 py-2 text-2xl shadow-lg backdrop-blur">
									💬
								</div>
							</div>
							<div className="-right-6 -top-10 md:-right-12 pointer-events-none absolute select-none">
								<div className="sticker-float-slow chaos-border rotate-[10deg] rounded-2xl bg-white/80 px-3 py-2 text-2xl shadow-lg backdrop-blur">
									🎁
								</div>
							</div>
							<div className="-bottom-10 pointer-events-none absolute left-2 select-none md:left-10">
								<div className="sticker-float chaos-border rotate-[6deg] rounded-2xl bg-white/80 px-3 py-2 text-2xl shadow-lg backdrop-blur">
									⭐️
								</div>
							</div>
							<div className="-top-4 pointer-events-none absolute right-4 select-none md:right-8">
								<div className="sticker-float-slow chaos-border rotate-[-12deg] rounded-2xl bg-white/80 px-3 py-2 text-2xl shadow-lg backdrop-blur">
									🔥
								</div>
							</div>
							<div className="-bottom-6 pointer-events-none absolute right-6 select-none md:right-12">
								<div className="sticker-float chaos-border rotate-[15deg] rounded-2xl bg-white/80 px-3 py-2 text-2xl shadow-lg backdrop-blur">
									⚡
								</div>
							</div>

							<ChatIdeasPanel />

							<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
								<Badge
									variant="secondary"
									className="rebel-badge rounded-full font-bold"
								>
									<Heart className="mr-1 size-3" />
									iMessage → Export Chat
								</Badge>
								<Badge
									variant="secondary"
									className="rebel-badge rounded-full font-bold"
								>
									<Star className="mr-1 size-3" />
									WhatsApp → Export .txt
								</Badge>
								<Badge
									variant="secondary"
									className="rebel-badge rounded-full font-bold"
								>
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
