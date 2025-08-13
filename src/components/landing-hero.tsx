"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function LandingHero() {
	return (
		<Card className="border-0 bg-transparent shadow-none">
			<CardContent className="pt-10 pb-2">
				<div className="relative overflow-hidden rounded-3xl">
					<div className="-z-10 pointer-events-none absolute inset-0 opacity-80 [mask-image:radial-gradient(60%_60%_at_50%_20%,#000_35%,transparent_100%)]">
						<div className="-top-28 -left-28 absolute size-[22rem] rounded-full bg-gradient-to-br from-rose-200/80 to-fuchsia-200/40 blur-3xl" />
						<div className="-bottom-32 -right-28 absolute size-[24rem] rounded-full bg-gradient-to-br from-sky-200/80 to-indigo-200/40 blur-3xl" />
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:12px_12px]" />
					</div>
					<div className="space-y-6 text-center">
						<div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 font-medium text-foreground text-xs shadow-sm backdrop-blur">
							<Sparkles className="size-3.5" />
							Gifts from what you say
						</div>
						<h1 className="text-balance font-extrabold text-5xl leading-tight tracking-tight md:text-6xl">
							<span className="bg-gradient-to-r from-rose-500 via-foreground to-sky-600 bg-clip-text text-transparent">
								Present Ideas
							</span>
						</h1>
						<div className="relative mx-auto max-w-2xl">
							<p className="text-balance text-muted-foreground">
								Drop a chat export. We read the tone, the plans, the in‑jokes,
								then turn it into gifts that land.
							</p>
							<svg
								aria-hidden="true"
								className="-bottom-3 -translate-x-1/2 pointer-events-none absolute left-1/2 h-4 text-rose-400"
								viewBox="0 0 400 24"
								fill="none"
							>
								<path
									d="M2 18 C 120 34, 280 -10, 398 18"
									stroke="currentColor"
									strokeWidth="6"
									strokeLinecap="round"
								/>
							</svg>
						</div>
					</div>
					<div className="pointer-events-none absolute top-6 right-6 size-3 rounded-full bg-rose-500 shadow-[0_0_0_10px_rgba(244,63,94,0.12)]" />
				</div>
			</CardContent>
		</Card>
	);
}
