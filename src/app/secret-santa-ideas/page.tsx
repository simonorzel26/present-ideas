import type { Metadata } from "next";
import { SeoRedirect } from "@/components/seo-redirect";

export const metadata: Metadata = {
  title: "Secret Santa gift ideas",
  description:
    "Need Secret Santa ideas? Upload a chat and get present suggestions based on real conversations.",
  alternates: { canonical: "/secret-santa-ideas" },
  openGraph: {
    title: "Secret Santa gift ideas",
    description:
      "Fast, personal suggestions from what you already talk about.",
    url: "/secret-santa-ideas",
  },
};

export default function SecretSantaIdeasPage() {
  return (
    <SeoRedirect
      title="Secret Santa ideas, made personal"
      intro="Use your conversations to pick something they’ll actually like."
    />
  );
}


