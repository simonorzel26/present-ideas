import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Present Ideas",
		template: "%s · Present Ideas",
	},
	description:
		"Privacy-first gift ideas from your chats. Upload WhatsApp or iMessage exports and get AI-curated suggestions.",
	applicationName: "Present Ideas",
	generator: "Next.js",
	keywords: [
		"gift ideas",
		"present ideas",
		"WhatsApp",
		"iMessage",
		"AI",
		"privacy",
	],
	authors: [{ name: "Present Ideas" }],
	alternates: { canonical: "/" },
	openGraph: {
		title: "Present Ideas",
		description: "Turn chats into thoughtful gifts. Privacy-first.",
		url: "/",
		siteName: "Present Ideas",
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Present Ideas",
		description: "Turn chats into thoughtful gifts. Privacy-first.",
	},
	icons: [{ rel: "icon", url: "/favicon.ico" }],
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
	],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body>
				<div className="min-h-dvh">{children}</div>
			</body>
		</html>
	);
}
