"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Gift, Upload } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type SeoRedirectProps = {
  title: string;
  intro: string;
  redirectMs?: number;
};

export function SeoRedirect({ title, intro, redirectMs = 6000 }: SeoRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    const id = setTimeout(() => {
      router.push("/");
    }, redirectMs);
    return () => clearTimeout(id);
  }, [router, redirectMs]);

  return (
    <main className="relative min-h-dvh">
      <div className="container mx-auto max-w-3xl px-4 py-10">
        <div className="mb-8 text-center">
          <h1 className="wild-gradient mb-4 bg-clip-text font-extrabold text-4xl text-transparent tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg">{intro}</p>
        </div>

        <Card className="rounded-2xl border bg-card shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2>Why quick gifts can still feel personal</h2>
              <p>
                The best presents usually come from small, specific details you already
                know: weekend routines, inside jokes, new hobbies, places you have been
                talking about. Instead of browsing endless lists, this tool looks at the
                words you both use and turns them into concrete suggestions.
              </p>

              <h2>How it works (fast)</h2>
              <p>
                Upload a simple text export of a conversation and we pull out interests
                and moments that stand out. You will get a shortlist of ideas with a
                sentence or two explaining why each one fits.
              </p>
            </div>

            <ol className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-foreground/70" />
                <div>
                  <p className="font-semibold">Export a chat as .txt</p>
                  <p className="text-muted-foreground text-sm">WhatsApp or iMessage works best.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Upload className="mt-0.5 h-5 w-5 text-foreground/70" />
                <div>
                  <p className="font-semibold">Upload the file</p>
                  <p className="text-muted-foreground text-sm">Drop it on the homepage to get started.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-foreground/70" />
                <div>
                  <p className="font-semibold">We read the conversation</p>
                  <p className="text-muted-foreground text-sm">The app looks for interests, plans, and moments.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Gift className="mt-0.5 h-5 w-5 text-foreground/70" />
                <div>
                  <p className="font-semibold">Get thoughtful present ideas</p>
                  <p className="text-muted-foreground text-sm">A shortlist you can act on today.</p>
                </div>
              </li>
            </ol>

            <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none">
              <h2>Quick ideas by budget</h2>
              <ul>
                <li><strong>Under $25:</strong> favorite snack bundle, cozy socks, stationery, photo print.</li>
                <li><strong>$25–$75:</strong> class voucher, cookbook tied to a shared trip, game you can play together.</li>
                <li><strong>$75+:</strong> experience day, weekend escape, concert or workshop you have mentioned.</li>
              </ul>

              <h2>Ideas by relationship</h2>
              <ul>
                <li><strong>Partner:</strong> plan a small ritual you can repeat, a class for two, a keepsake linked to a message thread.</li>
                <li><strong>Family:</strong> something for their routine, upgrade a tool they use, a framed memory.</li>
                <li><strong>Friend:</strong> inside‑joke merch, shared hobby gear, tickets to something you have discussed.</li>
              </ul>

              <h2>FAQ</h2>
              <p><strong>Do I need a chat export?</strong> It helps a lot. If you cannot export, jot down a few topics you have been discussing and use those instead.</p>
              <p><strong>Is my data private?</strong> Parts of your text may be sent to OpenAI to generate ideas. Only upload content you are comfortable sharing. See the Privacy page for details.</p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <Link href="/">
                <Button className="font-semibold">Go to Present Ideas</Button>
              </Link>
              <span className="text-muted-foreground text-xs">Redirecting shortly…</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}


