import type { Metadata } from "next";
import { SeoRedirect } from "@/components/seo-redirect";

export const metadata: Metadata = {
  title: "What to get my husband",
  description:
    "Not sure what to get your husband? Upload a chat and get present ideas based on what you actually talk about together.",
  alternates: { canonical: "/what-to-get-my-husband" },
  openGraph: {
    title: "What to get my husband",
    description:
      "Turn shared interests into a shortlist of gift ideas—fast and personal.",
    url: "/what-to-get-my-husband",
  },
};

export default function WhatToGetMyHusbandPage() {
  return (
    <SeoRedirect
      title="Thoughtful gifts for your husband"
      intro="Let your chats surface ideas he’ll actually use."
    />
  );
}


