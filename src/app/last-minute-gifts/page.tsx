import type { Metadata } from "next";
import { SeoRedirect } from "@/components/seo-redirect";

export const metadata: Metadata = {
  title: "Last‑Minute Gift Ideas",
  description:
    "Need a last‑minute gift? Upload a chat and get thoughtful present ideas based on your real conversations.",
  alternates: { canonical: "/last-minute-gifts" },
  openGraph: {
    title: "Last‑Minute Gift Ideas",
    description:
      "Upload a chat and get gift ideas you can act on today—based on what you actually talk about.",
    url: "/last-minute-gifts",
  },
};

export default function LastMinuteGiftsPage() {
  return (
    <SeoRedirect
      title="Last‑minute gift ideas that actually fit"
      intro="In a rush? Let your conversations point you to something personal."
    />
  );
}


