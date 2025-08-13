import type { Metadata } from "next";
import { SeoRedirect } from "@/components/seo-redirect";

export const metadata: Metadata = {
  title: "What to get my wife",
  description:
    "Not sure what to get your wife? Upload a chat and get present ideas based on what you actually talk about together.",
  alternates: { canonical: "/what-to-get-my-wife" },
  openGraph: {
    title: "What to get my wife",
    description:
      "Turn shared moments and interests into thoughtful gift ideas—no stress.",
    url: "/what-to-get-my-wife",
  },
};

export default function WhatToGetMyWifePage() {
  return (
    <SeoRedirect
      title="Thoughtful gifts for your wife"
      intro="Use your conversations to surface ideas she’ll actually love."
    />
  );
}


