import type { Metadata } from "next";
import { SeoRedirect } from "@/components/seo-redirect";

export const metadata: Metadata = {
  title: "What to get my mom",
  description:
    "Not sure what to get your mom? Upload a chat and get present ideas based on what you actually talk about together.",
  alternates: { canonical: "/what-to-get-my-mom" },
  openGraph: {
    title: "What to get my mom",
    description:
      "Turn shared moments and interests into thoughtful gift ideas—personal and fast.",
    url: "/what-to-get-my-mom",
  },
};

export default function WhatToGetMyMomPage() {
  return (
    <SeoRedirect
      title="Thoughtful gifts for your mom"
      intro="Use your conversations to surface ideas she’ll actually love."
    />
  );
}


