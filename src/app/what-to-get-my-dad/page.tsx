import type { Metadata } from "next";
import { SeoRedirect } from "@/components/seo-redirect";

export const metadata: Metadata = {
  title: "What to get my dad",
  description:
    "Not sure what to get your dad? Upload a chat and get present ideas based on what you actually talk about together.",
  alternates: { canonical: "/what-to-get-my-dad" },
  openGraph: {
    title: "What to get my dad",
    description:
      "Turn shared interests into a shortlist of gift ideas—quick and personal.",
    url: "/what-to-get-my-dad",
  },
};

export default function WhatToGetMyDadPage() {
  return (
    <SeoRedirect
      title="Thoughtful gifts for your dad"
      intro="Let your chats surface ideas he’ll actually use."
    />
  );
}


