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
      <div className="container mx-auto max-w-2xl px-4 py-10">
        <div className="mb-8 text-center">
          <h1 className="wild-gradient mb-4 bg-clip-text font-extrabold text-4xl text-transparent tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg">{intro}</p>
        </div>

        <Card className="rounded-2xl border bg-card shadow-sm">
          <CardContent className="p-6">
            <ol className="space-y-4">
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

            <div className="mt-6 flex items-center justify-center gap-3">
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


