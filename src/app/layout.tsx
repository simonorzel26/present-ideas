import "@/styles/globals.css";

import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import { Geist } from "next/font/google";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Present Ideas for Loved Ones and Friends",
		template: "%s · Present Ideas",
	},
	description:
		"A little tool to find thoughtful present ideas for loved ones and friends from your chat logs.",
	applicationName: "Present Ideas",
	generator: "Next.js",
	keywords: [
		"present ideas",
		"gift ideas",
		"WhatsApp",
		"iMessage",
		"AI",
		"privacy",
		"loved ones",
		"friends",
		"present ideas from chats",
	],
	authors: [{ name: "Present Ideas" }],
	alternates: { canonical: "/" },
	openGraph: {
		title: "Present Ideas for Loved Ones and Friends",
		description: "Find thoughtful present ideas from your real conversations.",
		url: "/",
		siteName: "Present Ideas",
		type: "website",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "Present Ideas for Loved Ones and Friends",
		description: "Find thoughtful present ideas from your real conversations.",
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
			<head>
				<PlausibleProvider
					domain={"present-ideas.com"}
					selfHosted={true}
					customDomain="https://t.ngtly.com"
					enabled={true}
				/>
			</head>
			<body>
				<div className="min-h-dvh">{children}</div>
			</body>
		</html>
	);
}
