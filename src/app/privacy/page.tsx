import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy & Data Use",
	description:
		"Uploads may be sent to OpenAI to generate ideas. You are responsible for the content you share. No warranties; use at your own risk.",
};

export default function PrivacyPage() {
	return (
		<main className="relative min-h-dvh">
			<div className="container mx-auto max-w-2xl px-4 py-10">
				<h1 className="mb-6 font-extrabold text-3xl tracking-tight md:text-4xl">
					Privacy & Data Use
				</h1>
				<div className="prose prose-neutral dark:prose-invert max-w-none">
					<p>
						This is a small personal tool for turning real conversations into
						present ideas. It is experimental and provided as‑is.
					</p>
					<h2>What happens to your data</h2>
					<ul>
						<li>
							Parts of your uploaded text may be sent to OpenAI to generate
							ideas.
						</li>
						<li>
							Avoid uploading sensitive information. Only upload content you
							have permission to share.
						</li>
						<li>
							No accounts are required. The tool does not intentionally store
							your chat data on the server beyond what is needed to respond.
						</li>
					</ul>
					<h2>Your responsibility</h2>
					<ul>
						<li>
							You are responsible for the content you upload and for complying
							with any laws or policies that apply to you.
						</li>
						<li>
							By using the tool, you agree that the author is not liable for any
							loss, damage, or consequences arising from its use.
						</li>
					</ul>
					<h2>Third‑party services</h2>
					<ul>
						<li>
							Idea generation relies on OpenAI models. Interactions with OpenAI
							are subject to OpenAI’s terms and privacy practices.
						</li>
						<li>
							Basic, privacy‑minded analytics may be collected to understand
							usage (e.g., Plausible). No personal profiles are built.
						</li>
					</ul>
					<p>
						If you have questions, open an issue on the repository or remove
						your data and stop using the tool.
					</p>
				</div>
			</div>
		</main>
	);
}
