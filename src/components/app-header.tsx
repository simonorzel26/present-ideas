import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Zap } from "lucide-react";

export function AppHeader() {
	return (
		<Card className="border-0 bg-transparent shadow-none">
			<CardContent className="pt-10 pb-2">
				<div className="relative overflow-hidden rounded-2xl">
					<div className="space-y-6 text-center">
						<div className="mx-auto inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-2 text-foreground text-sm">
							<Zap className="size-4" />
							REVOLUTIONARY GIFT IDEAS
						</div>
						<h1 className="wild-gradient bg-clip-text font-extrabold text-6xl text-transparent leading-tight tracking-tight md:text-7xl">
							DROP A CHAT. CREATE CHAOS.
						</h1>
						<p className="mx-auto max-w-2xl text-balance font-medium text-lg text-muted-foreground">
							We scan the in‑jokes, the plans, the patterns—and turn them into
							gifts that will blow minds and break expectations.
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
