import type { Metadata } from "next";
import { SeoRedirect } from "@/components/seo-redirect";

export const metadata: Metadata = {
  title: "What to get my boyfriend",
  description:
    "Not sure what to get your boyfriend? Upload a chat and get present ideas based on what you actually talk about together.",
  alternates: { canonical: "/what-to-get-my-boyfriend" },
  openGraph: {
    title: "What to get my boyfriend",
    description:
      "Turn shared interests into a shortlist of gift ideas—fast and personal.",
    url: "/what-to-get-my-boyfriend",
  },
};

export default function WhatToGetMyBoyfriendPage() {
  return (
    <SeoRedirect
      title="Thoughtful gifts for your boyfriend"
      intro="Let your chats surface ideas he’ll actually use."
    />
  );
}


