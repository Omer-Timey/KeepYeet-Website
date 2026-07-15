import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the terms that govern use of the KeepYeet mobile photo-cleanup app, connected services, purchases, and user responsibilities.",
  alternates: { canonical: "/terms/" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const markdown = readFileSync(join(process.cwd(), "src/legal-docs/terms-of-use.md"), "utf8");

  return (
    <>
      <header className="legal-hero">
        <div className="shell">
          <p className="eyebrow"><span /> Legal</p>
          <h1>Terms of Use</h1>
          <p>The terms for downloading, accessing, and using KeepYeet.</p>
        </div>
      </header>
      <section className="legal-page shell">
        <LegalDocument markdown={markdown} />
      </section>
    </>
  );
}
