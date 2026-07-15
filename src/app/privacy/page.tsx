import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the KeepYeet privacy policy, including on-device photo handling and disclosures for analytics, advertising, and purchase services.",
  alternates: { canonical: "/privacy/" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const markdown = readFileSync(join(process.cwd(), "src/legal-docs/privacy-policy.md"), "utf8");

  return (
    <>
      <header className="legal-hero">
        <div className="shell">
          <p className="eyebrow"><span /> Legal</p>
          <h1>Privacy Policy</h1>
          <p>How KeepYeet handles photo-library work and connected-service data.</p>
        </div>
      </header>
      <section className="legal-page shell">
        <LegalDocument markdown={markdown} />
      </section>
    </>
  );
}
