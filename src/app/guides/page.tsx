import type { Metadata } from "next";
import Link from "next/link";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/json-ld";
import { guides } from "@/data/guides";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Photo Cleanup Guides",
  description:
    "Practical guides for camera roll cleanup, swipe photo deletion, screenshot clutter, phone storage, and safer review-first photo cleaning.",
  alternates: { canonical: "/guides/" },
  openGraph: {
    type: "website",
    title: "Photo Cleanup Guides | KeepYeet",
    description:
      "Twelve practical guides for cleaning photos and videos without losing control of what stays or goes.",
    url: "/guides/",
    siteName: site.name,
    images: [
      {
        url: "/images/app-store/screenshot-03.webp",
        width: 600,
        height: 1300,
        alt: "KeepYeet swipe photo cleanup guide library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Cleanup Guides | KeepYeet",
    description:
      "Twelve practical guides for cleaning photos and videos without losing control of what stays or goes.",
    images: ["/images/app-store/screenshot-03.webp"],
  },
};

export default function GuidesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${site.url}/guides/#webpage`,
        url: `${site.url}/guides/`,
        name: "Photo Cleanup Guides | KeepYeet",
        description:
          "Practical guides for camera roll cleanup, swipe photo deletion, screenshot clutter, phone storage, and safer review-first photo cleaning.",
        inLanguage: site.language,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#app` },
        breadcrumb: { "@id": `${site.url}/guides/#breadcrumb` },
        mainEntity: { "@id": `${site.url}/guides/#list` },
      },
      {
        "@type": "ItemList",
        "@id": `${site.url}/guides/#list`,
        name: "KeepYeet photo cleanup guides",
        numberOfItems: guides.length,
        itemListElement: guides.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: guide.h1,
          url: `${site.url}/guides/${guide.slug}/`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/guides/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/guides/` },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <header className="subpage-hero">
        <div className="shell subpage-hero__inner">
          <p className="eyebrow"><span /> KeepYeet guides</p>
          <h1>Photo cleanup answers for the exact mess in your library.</h1>
          <p>
            From swipe deletion to screenshot clutter and full-phone storage,
            these guides give you a practical process first, then show how
            KeepYeet makes it faster.
          </p>
        </div>
      </header>
      <section className="section section--paper">
        <div className="shell">
          <div className="guide-grid guide-grid--all">
            {guides.map((guide) => (
              <Link
                className="guide-card"
                href={`/guides/${guide.slug}/`}
                key={guide.slug}
              >
                <span className="guide-card__tag">{guide.eyebrow}</span>
                <h2>{guide.h1}</h2>
                <p>{guide.description}</p>
                <strong className="guide-card__cta">
                  Read the guide <span aria-hidden="true">→</span>
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <DownloadCard headingId="guides-download-heading" />
    </>
  );
}
