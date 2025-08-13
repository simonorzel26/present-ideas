import type { Metadata } from "next";
import { SeoRedirect } from "@/components/seo-redirect";

export const metadata: Metadata = {
  title: "Birthday gift ideas",
  description:
    "Looking for birthday gift ideas? Upload a chat and get thoughtful suggestions based on your real conversations.",
  alternates: { canonical: "/birthday-gift-ideas" },
  openGraph: {
    title: "Birthday gift ideas",
    description:
      "Personal ideas drawn from what you actually talk about—quick and relevant.",
    url: "/birthday-gift-ideas",
  },
};

export default function BirthdayGiftIdeasPage() {
  return (
    <SeoRedirect
      title="Birthday gift ideas that feel personal"
      intro="Turn shared moments into a shortlist of thoughtful presents."
    />
  );
}


