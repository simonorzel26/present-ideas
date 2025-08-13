"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function LandingHero() {
	return (
		<Card className="border-0 bg-transparent shadow-none">
			<CardContent className="pt-10 pb-2">
				<div className="relative overflow-hidden rounded-3xl">
					<div className="space-y-6 text-center">
						<div className="mx-auto inline-flex items-center gap-2 rounded-full bg-foreground/5 px-3 py-1 text-foreground text-xs">
							<Sparkles className="size-3.5" />
							Gifts from what you say
						</div>
						<h1 className="text-balance font-extrabold text-5xl leading-tight tracking-tight md:text-6xl">
							<span className="wild-gradient bg-clip-text text-transparent">
								Present Ideas
							</span>
						</h1>
						<div className="relative mx-auto max-w-2xl">
							<p className="text-balance text-muted-foreground">
								Drop a chat export. We read the tone, the plans, the in‑jokes,
								then turn it into gifts that land.
							</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
