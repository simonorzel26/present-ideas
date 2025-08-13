import type { Metadata } from "next";
import { SeoRedirect } from "@/components/seo-redirect";

export const metadata: Metadata = {
  title: "What to get my girlfriend",
  description:
    "Not sure what to get your girlfriend? Upload a chat and get present ideas based on what you two actually talk about.",
  alternates: { canonical: "/what-to-get-my-girlfriend" },
  openGraph: {
    title: "What to get my girlfriend",
    description:
      "Turn shared moments and interests into thoughtful gift ideas—no browsing overwhelm.",
    url: "/what-to-get-my-girlfriend",
  },
};

export default function WhatToGetMyGirlfriendPage() {
  return (
    <SeoRedirect
      title="Thoughtful gifts for your girlfriend"
      intro="Use your conversations to surface ideas she’ll actually love."
    />
  );
}


