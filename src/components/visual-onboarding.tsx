"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
	FileText,
	Heart,
	MessageCircle,
	MessageSquareText,
	Star,
	Zap,
} from "lucide-react";

export function VisualOnboarding() {
	return (
		<Card className="border-0 bg-transparent shadow-none">
			<CardContent className="pt-2 pb-0">
				<div className="chaos-border relative overflow-hidden rounded-2xl">
					<div className="-z-10 pointer-events-none absolute inset-0 opacity-90 [mask-image:radial-gradient(60%_60%_at_50%_20%,#000_25%,transparent_100%)]">
						<div className="-top-28 -translate-x-1/2 absolute left-1/2 h-72 w-[40rem] rounded-full bg-gradient-to-r from-rose-200/70 via-white/0 to-sky-200/70 blur-3xl" />
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						<div className="chaos-border spray-paint relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur-sm">
							<div className="absolute top-3 right-3 text-2xl">💬</div>
							<div className="flex items-center gap-2">
								<Badge
									variant="secondary"
									className="rebel-badge gap-1 font-bold"
								>
									<MessageCircle className="size-4" /> IMESSAGE
								</Badge>
								<Badge
									variant="secondary"
									className="rebel-badge gap-1 font-bold"
								>
									<MessageSquareText className="size-4" /> WHATSAPP
								</Badge>
							</div>
							<div className="text-center font-bold text-muted-foreground text-sm">
								Export a conversation as{" "}
								<span className="graffiti-text font-black text-foreground">
									.TXT
								</span>
							</div>
						</div>
						<div className="relative hidden md:block">
							<svg
								aria-hidden="true"
								className="-translate-y-1/2 absolute top-1/2 left-0 h-24 w-full text-rose-400"
								viewBox="0 0 400 120"
								fill="none"
							>
								<path
									d="M4 80 C 140 128, 260 16, 396 64"
									stroke="currentColor"
									strokeWidth="8"
									strokeLinecap="round"
									className="opacity-80"
								/>
							</svg>
							<div className="-translate-x-1/2 -translate-y-1/2 chaos-animate absolute top-1/2 left-1/2 text-3xl">
								⚡
							</div>
						</div>
						<div className="chaos-border spray-paint relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl bg-white/70 p-6 shadow-lg backdrop-blur-sm">
							<div className="absolute top-3 right-3 text-2xl">🎁</div>
							<div className="rebel-badge inline-flex items-center gap-2 rounded-xl bg-foreground/5 px-4 py-3 font-bold text-sm">
								<FileText className="size-5" />
								DROP FILE HERE
							</div>
							<div className="text-center font-bold text-muted-foreground text-sm">
								We turn it into{" "}
								<span className="graffiti-text font-black text-foreground">
									REAL IDEAS
								</span>
							</div>
							<Zap className="size-5 text-foreground/70" />
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
