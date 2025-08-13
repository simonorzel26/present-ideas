import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Zap } from "lucide-react";

export function AppHeader() {
	return (
		<Card className="border-0 bg-transparent shadow-none">
			<CardContent className="pt-10 pb-2">
				<div className="chaos-border spray-paint relative overflow-hidden rounded-2xl">
					<div className="-z-10 pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(60%_60%_at_50%_20%,#000_35%,transparent_100%)]">
						<div className="-top-20 -left-24 absolute size-72 rounded-full bg-gradient-to-br from-rose-200/70 to-fuchsia-200/40 blur-3xl" />
						<div className="-bottom-24 -right-24 absolute size-80 rounded-full bg-gradient-to-br from-sky-200/70 to-indigo-200/40 blur-3xl" />
					</div>
					<div className="space-y-6 text-center">
						<div className="rebel-badge mx-auto inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 font-bold text-foreground text-sm backdrop-blur-sm">
							<Zap className="size-4" />
							REVOLUTIONARY GIFT IDEAS
						</div>
						<h1 className="graffiti-text graffiti-shadow wild-gradient bg-clip-text font-black text-6xl text-transparent leading-tight tracking-tight md:text-7xl">
							DROP A CHAT. CREATE CHAOS.
						</h1>
						<p className="mx-auto max-w-2xl text-balance font-medium text-lg text-muted-foreground">
							We scan the in‑jokes, the plans, the patterns—and turn them into
							gifts that will blow minds and break expectations.
						</p>
					</div>
					<div className="chaos-animate pointer-events-none absolute top-6 right-6 size-4 rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-500 shadow-[0_0_0_8px_rgba(244,63,94,0.12)]" />
					<div
						className="chaos-animate pointer-events-none absolute bottom-8 left-8 size-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 shadow-[0_0_0_6px_rgba(14,165,233,0.12)]"
						style={{ animationDelay: "1s" }}
					/>
				</div>
			</CardContent>
		</Card>
	);
}
