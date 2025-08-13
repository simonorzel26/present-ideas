"use client";

import type { GiftIdea } from "@/app/actions";
import { ChatDropzone } from "@/components/chat-dropzone";
import { IdeasDisplay } from "@/components/ideas-display";
import { useState } from "react";

export function ChatIdeasPanel() {
	const [ideas, setIdeas] = useState<GiftIdea[]>([
		{
			idea: "Custom print of your first concert together",
			name: "Custom print of your first concert together",
			searchQuery: "custom+concert+print+poster",
			description:
				"You mentioned going to a The 1975 concert in May 2021. A minimalist poster of that exact show date and venue would be a meaningful keepsake.",
		},
		{
			idea: "Private pottery class for two",
			name: "Private pottery class for two",
			searchQuery: "pottery+class+gift+card",
			description:
				"You mentioned going to a The 1975 concert in May 2021. A minimalist poster of that exact show date and venue would be a meaningful keepsake.",
		},
		{
			idea: "Overnight cabin stay with dark-sky stargazing",
			name: "Overnight cabin stay with dark-sky stargazing",
			searchQuery: "cabin+gift+card+dark+sky",
			description:
				"You mentioned going to a The 1975 concert in May 2021. A minimalist poster of that exact show date and venue would be a meaningful keepsake.",
		},
		{
			idea: "Signed first-edition of their favorite childhood book",
			name: "Signed first-edition of their favorite childhood book",
			searchQuery: "signed+first+edition+golden+compass",
			description:
				"You mentioned going to a The 1975 concert in May 2021. A minimalist poster of that exact show date and venue would be a meaningful keepsake.",
		},
		{
			idea: "Sourdough starter kit with local grain",
			name: "Sourdough starter kit with local grain",
			searchQuery: "sourdough+starter+kit+artisan+flour",
			description:
				"You mentioned going to a The 1975 concert in May 2021. A minimalist poster of that exact show date and venue would be a meaningful keepsake.",
		},
	]);
	const [isProcessing, setIsProcessing] = useState(false);

	const handleIdeasGeneratedAction = (newIdeas: GiftIdea[]) => {
		setIdeas(newIdeas);
	};

	const handleProcessingStartAction = () => {
		setIsProcessing(true);
	};

	const handleProcessingCompleteAction = () => {
		setIsProcessing(false);
	};

	return (
		<div className="rounded-3xl border-0 bg-white/70 p-5 shadow-sm backdrop-blur">
			<div className="grid gap-6 lg:grid-cols-2">
				<div>
					<ChatDropzone
						onIdeasGeneratedAction={handleIdeasGeneratedAction}
						onProcessingStartAction={handleProcessingStartAction}
						onProcessingCompleteAction={handleProcessingCompleteAction}
					/>
				</div>
				<div className="lg:border-black/5 lg:border-l lg:pl-6">
					<IdeasDisplay ideas={ideas} isLoading={isProcessing} embedded />
				</div>
			</div>
		</div>
	);
}
