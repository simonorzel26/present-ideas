"use client";

import type { GiftIdea } from "@/app/actions";
import { AppHeader } from "@/components/app-header";
import { ChatDropzone } from "@/components/chat-dropzone";
import { IdeasDisplay } from "@/components/ideas-display";
import { LandingHero } from "@/components/landing-hero";
import { PlayfulLanding } from "@/components/playful-landing";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { VisualOnboarding } from "@/components/visual-onboarding";
import {
	Brain,
	FileText,
	Gift,
	MessageCircle,
	MessageSquare,
	Smartphone,
	Upload,
	Zap,
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
	const [ideas, setIdeas] = useState<GiftIdea[]>([
		{
			idea: "Custom concert print (first show together)",
			name: "Custom concert print (first show together)",
			searchQuery: "custom+concert+print+poster",
			description:
				"You mentioned going to a The 1975 concert in May 2021. A minimalist print of that exact show date and venue is a meaningful keepsake.",
		},
		{
			idea: "Private pottery class for two",
			name: "Private pottery class for two",
			searchQuery: "pottery+class+gift+card",
			description:
				"You referenced weekend crafts and a new apartment. Making a mug set together fits both interests and becomes part of daily routine.",
		},
		{
			idea: "Overnight cabin stay with dark‑sky stargazing",
			name: "Overnight cabin stay with dark‑sky stargazing",
			searchQuery: "cabin+gift+card+dark+sky",
			description:
				"You’ve talked about escaping city noise and night hikes. A cabin near a dark‑sky area combines nature, photography, and slow mornings.",
		},
		{
			idea: "Signed first‑edition of a favorite childhood book",
			name: "Signed first‑edition of a favorite childhood book",
			searchQuery: "signed+first+edition+golden+compass",
			description:
				"They reminisced about reading The Golden Compass with their dad. A signed or special edition adds sentiment and display value.",
		},
		{
			idea: "Sourdough starter kit with local grain",
			name: "Sourdough starter kit with local grain",
			searchQuery: "sourdough+starter+kit+artisan+flour",
			description:
				"You joked about a ‘bread era’ and already bake on Sundays. High‑protein flour, a banneton, and a live starter help level up.",
		},
	]);
	const [isProcessing, setIsProcessing] = useState(false);
	const [currentStep, setCurrentStep] = useState(1);
	const [openAccordion, setOpenAccordion] = useState<"step-1" | "step-2">(
		"step-1",
	);

	console.log(
		"Current step:",
		currentStep,
		"Is processing:",
		isProcessing,
		"Ideas count:",
		ideas.length,
	);

	const handleIdeasGeneratedAction = (newIdeas: GiftIdea[]) => {
		console.log("Ideas generated");
		setIdeas(newIdeas);
		setCurrentStep(2);
		setOpenAccordion("step-2");
	};

	const handleProcessingStartAction = () => {
		console.log("Processing started");
		setIsProcessing(true);
		setCurrentStep(2);
		setOpenAccordion("step-2");
	};

	const handleProcessingCompleteAction = () => {
		console.log("Processing completed");
		setIsProcessing(false);
	};

	return (
		<main className="relative min-h-dvh overflow-hidden">
			<div className="chaos-pattern absolute inset-0 opacity-20" />

			<div className="chaos-animate absolute top-10 left-10">
				<div className="text-4xl">🎨</div>
			</div>

			<div
				className="chaos-animate absolute top-20 right-16"
				style={{ animationDelay: "1s" }}
			>
				<div className="text-3xl">💥</div>
			</div>

			<div
				className="chaos-animate absolute bottom-20 left-20"
				style={{ animationDelay: "2s" }}
			>
				<div className="text-3xl">🔥</div>
			</div>

			<div
				className="chaos-animate absolute right-10 bottom-32"
				style={{ animationDelay: "0.5s" }}
			>
				<div className="text-3xl">⚡</div>
			</div>

			<div className="container relative z-10 mx-auto px-4 py-8">
				<div className="mx-auto max-w-2xl space-y-8">
					<div className="mb-8 text-center">
						<h1 className="graffiti-text graffiti-shadow wild-gradient mb-4 bg-clip-text font-black text-6xl text-transparent md:text-7xl">
							PRESENT IDEAS
						</h1>
						<p className="chaos-animate font-bold text-foreground/80 text-xl md:text-2xl">
							GET PERSONAL PRESENT IDEAS BASED ON CHATS WITH YOUR LOVED ONES
						</p>
					</div>

					{/* Steps Accordion */}
					<Accordion
						type="single"
						value={openAccordion}
						onValueChange={(v) =>
							v && setOpenAccordion(v as "step-1" | "step-2")
						}
						collapsible={false}
					>
						<AccordionItem value="step-1">
							<AccordionTrigger className="text-base">
								<div className="inline-flex items-center gap-2">
									<Smartphone className="h-5 w-5" />
									Step 1: Export & Upload
								</div>
							</AccordionTrigger>
							<AccordionContent>
								{/* Step 1: Export Instructions + Upload - Combined */}
								<div
									className={`transition-all duration-500 ${currentStep >= 1 ? "scale-100 opacity-100" : "scale-95 opacity-30"}`}
								>
									<div
										className={`rounded-2xl p-8 shadow-lg backdrop-blur-sm transition-all duration-300 ${
											currentStep === 1
												? "border-4 border-green-300 bg-gradient-to-br from-green-100/90 to-emerald-100/70"
												: "bg-gradient-to-br from-white/90 to-white/70"
										}`}
									>
										<div className="space-y-8 text-center">
											<div className="grid gap-6 md:grid-cols-2">
												<div className="space-y-4">
													<div className="flex items-center justify-center gap-2">
														<FileText className="h-6 w-6 text-green-600" />
														<h3 className="graffiti-text font-bold text-green-800 text-lg">
															EXPORT YOUR CHAT
														</h3>
													</div>
													<div className="space-y-3">
														<div className="rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-4 backdrop-blur-sm">
															<div className="mb-2 flex items-center gap-2">
																<div className="text-2xl">💚</div>
																<h4 className="graffiti-text font-bold text-green-800 text-sm">
																	WHATSAPP
																</h4>
															</div>
															<p className="font-medium text-green-700 text-xs">
																Open chat → Menu (⋮) → More → Export chat →
																Without media
															</p>
														</div>

														<div className="rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-4 backdrop-blur-sm">
															<div className="mb-2 flex items-center gap-2">
																<div className="text-2xl">💙</div>
																<h4 className="graffiti-text font-bold text-blue-800 text-sm">
																	IMESSAGE
																</h4>
															</div>
															<p className="font-medium text-blue-700 text-xs">
																Open chat → Contact name → Info (i) → Export
																chat
															</p>
														</div>
													</div>
												</div>

												<div className="space-y-4">
													<div className="flex items-center justify-center gap-2">
														<Upload className="h-6 w-6 text-blue-600" />
														<h3 className="graffiti-text font-bold text-blue-800 text-lg">
															UPLOAD YOUR FILE
														</h3>
													</div>
													<ChatDropzone
														onIdeasGeneratedAction={handleIdeasGeneratedAction}
														onProcessingStartAction={
															handleProcessingStartAction
														}
														onProcessingCompleteAction={
															handleProcessingCompleteAction
														}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="step-2">
							<AccordionTrigger className="text-base">
								<div className="inline-flex items-center gap-2">
									<Gift className="h-5 w-5" />
									Personal Gift Ideas for Your Loved Ones
								</div>
							</AccordionTrigger>
							<AccordionContent>
								{/* Step 2: Processing/Results (show partial results while loading) */}
								<div className="scale-100 opacity-100 transition-all duration-500">
									{isProcessing && (
										<div className="mb-4 rounded-2xl border-4 border-purple-300 bg-gradient-to-br from-purple-100/90 to-violet-100/70 p-6 shadow-lg backdrop-blur-sm">
											<div className="space-y-3 text-center">
												<div className="rebel-badge inline-flex animate-pulse items-center gap-2 rounded-full px-4 py-2 font-bold text-purple-900 text-sm shadow-md backdrop-blur-sm">
													<Brain className="h-4 w-4" />
													Generating ideas…
												</div>
												<div className="mx-auto h-2 w-40 overflow-hidden rounded-full bg-purple-200">
													<div className="h-full w-1/3 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-purple-500" />
												</div>
												<p className="text-purple-700 text-xs">
													Appending ideas as they arrive
												</p>
											</div>
										</div>
									)}
									<div className="rounded-2xl border-4 border-orange-300 bg-gradient-to-br from-yellow-100/90 to-orange-100/70 p-8 shadow-lg backdrop-blur-sm">
										<div className="space-y-6 text-center">
											<div className="rebel-badge inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-200 to-orange-200 px-4 py-2 font-bold text-orange-800 text-sm shadow-lg backdrop-blur-sm">
												<Gift className="h-5 w-5" />
												PERSONAL GIFT IDEAS FOR YOUR LOVED ONES
											</div>
											<IdeasDisplay
												ideas={ideas}
												isLoading={isProcessing}
												embedded={true}
											/>
										</div>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</main>
	);
}
