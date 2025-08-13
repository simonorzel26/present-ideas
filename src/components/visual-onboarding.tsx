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
				<div className="relative overflow-hidden rounded-2xl">
					<div className="grid gap-6 md:grid-cols-3">
						<div className="relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border bg-card p-6 shadow-sm">
							<div className="absolute top-3 right-3 text-2xl">💬</div>
							<div className="flex items-center gap-2">
								<Badge variant="secondary" className="gap-1">
									<MessageCircle className="size-4" /> IMESSAGE
								</Badge>
								<Badge variant="secondary" className="gap-1">
									<MessageSquareText className="size-4" /> WHATSAPP
								</Badge>
							</div>
							<div className="text-center text-muted-foreground text-sm">
								Export a conversation as{" "}
								<span className="font-semibold text-foreground">.TXT</span>
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
							<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 text-3xl">
								⚡
							</div>
						</div>
						<div className="relative flex flex-col items-center gap-4 overflow-hidden rounded-2xl border bg-card p-6 shadow-sm">
							<div className="absolute top-3 right-3 text-2xl">🎁</div>
							<div className="inline-flex items-center gap-2 rounded-xl bg-foreground/5 px-4 py-3 text-sm">
								<FileText className="size-5" />
								DROP FILE HERE
							</div>
							<div className="text-center text-muted-foreground text-sm">
								We turn it into{" "}
								<span className="font-semibold text-foreground">
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
