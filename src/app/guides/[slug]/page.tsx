import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { StoreButtons } from "@/components/store-buttons";
import {
  getGuide,
  getGuideScreenshotIndex,
  getGuideSources,
  guidePublishedAt,
  guideUpdatedAt,
  guides,
} from "@/data/guides";
import { screenshots, site } from "@/data/site";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) return {};

  const canonical = `/guides/${guide.slug}/`;

  return {
    title: { absolute: guide.title },
    description: guide.description,
    keywords: [guide.keyword, "KeepYeet", "photo cleanup"],
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url: canonical,
      siteName: site.name,
      publishedTime: guidePublishedAt,
      modifiedTime: guideUpdatedAt,
      authors: [site.developerName],
      images: [
        {
          url: "/images/app-store/screenshot-03.webp",
          width: 600,
          height: 1300,
          alt: "KeepYeet photo cleanup app",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: ["/images/app-store/screenshot-03.webp"],
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) notFound();

  const screenshot = screenshots[getGuideScreenshotIndex(guide.slug) % screenshots.length];
  const sources = getGuideSources(guide.slug);
  const related = guide.relatedSlugs
    .map((relatedSlug) => getGuide(relatedSlug))
    .filter((item) => item !== undefined);
  const canonical = `${site.url}/guides/${guide.slug}/`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: guide.title,
        description: guide.description,
        inLanguage: site.language,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#app` },
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
        mainEntity: { "@id": `${canonical}#article` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${site.url}${screenshot.src}`,
          width: 600,
          height: 1300,
        },
      },
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: guide.h1,
        description: guide.description,
        mainEntityOfPage: { "@id": `${canonical}#webpage` },
        url: canonical,
        inLanguage: site.language,
        datePublished: guidePublishedAt,
        dateModified: guideUpdatedAt,
        author: { "@id": `${site.url}/#developer` },
        publisher: { "@id": `${site.url}/#developer` },
        image: {
          "@type": "ImageObject",
          url: `${site.url}${screenshot.src}`,
          width: 600,
          height: 1300,
        },
        about: { "@id": `${site.url}/#app` },
        articleSection: "Photo cleanup guides",
        keywords: [guide.keyword, "photo cleanup", "KeepYeet"],
        citation: sources.map((source) => source.url),
      },
      {
        "@type": "HowTo",
        "@id": `${canonical}#howto`,
        name: guide.h1,
        description: guide.description,
        inLanguage: site.language,
        step: guide.steps.map((step, stepIndex) => ({
          "@type": "HowToStep",
          position: stepIndex + 1,
          name: step.title,
          text: step.body,
          url: `${canonical}#step-${stepIndex + 1}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/guides/` },
          { "@type": "ListItem", position: 3, name: guide.h1, item: canonical },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        isPartOf: { "@id": `${canonical}#webpage` },
        mainEntity: guide.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <article className="guide-article">
        <header className="guide-hero">
          <div className="shell guide-hero__grid">
            <div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span>
                <Link href="/guides/">Guides</Link><span>/</span>
                <span aria-current="page">{guide.keyword}</span>
              </nav>
              <p className="eyebrow"><span /> {guide.eyebrow}</p>
              <h1>{guide.h1}</h1>
              <p>
                <strong>By {site.developerName}, creator of KeepYeet</strong>
                {" · "}Updated July 15, 2026
              </p>
              {guide.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <figure className="guide-hero__visual">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={600}
                height={1300}
                loading="eager"
                sizes="(max-width: 860px) 70vw, 320px"
              />
              <figcaption>{screenshot.label}</figcaption>
            </figure>
          </div>
        </header>

        <div className="shell article-shell">
          <div className="article-main">
            <section aria-labelledby="steps-heading">
              <p className="kicker">A practical process</p>
              <h2 id="steps-heading">How to {guide.keyword}</h2>
              <ol className="article-steps">
                {guide.steps.map((step, stepIndex) => (
                  <li id={`step-${stepIndex + 1}`} key={step.title}>
                    <span>{stepIndex + 1}</span>
                    <div><h3>{step.title}</h3><p>{step.body}</p></div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="article-checklist" aria-labelledby="checklist-heading">
              <p className="kicker">Keep the session useful</p>
              <h2 id="checklist-heading">A quick cleanup checklist</h2>
              <ul>
                {guide.checklist.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="integration-section" aria-labelledby="integration-heading">
              <p className="kicker">Where KeepYeet fits</p>
              <h2 id="integration-heading">{guide.integrationTitle}</h2>
              {guide.integrationBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <StoreButtons />
            </section>

            <section aria-labelledby="guide-faq-heading">
              <p className="kicker">Questions people ask</p>
              <h2 id="guide-faq-heading">{guide.keyword} FAQ</h2>
              <div className="faq-list faq-list--article">
                {guide.faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                    <div><p>{faq.answer}</p></div>
                  </details>
                ))}
              </div>
            </section>

            <section aria-labelledby="sources-heading">
              <p className="kicker">Verified references</p>
              <h2 id="sources-heading">Platform and product sources</h2>
              <ul>
                {sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} rel="noopener noreferrer" target="_blank">
                      {source.title}
                    </a>
                    {" — "}{source.note}
                  </li>
                ))}
              </ul>
            </section>

            <section className="related-guides" aria-labelledby="related-heading">
              <p className="kicker">Keep going</p>
              <h2 id="related-heading">Related photo cleanup guides</h2>
              <div>
                {related.map((item) => (
                  <Link href={`/guides/${item.slug}/`} key={item.slug}>
                    <span>{item.eyebrow}</span>
                    <strong>{item.h1}</strong>
                    <small>Read the {item.keyword} guide →</small>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="article-aside" aria-label="Download KeepYeet">
            <Image
              src="/images/app-store/keepyeet-icon.webp"
              alt="KeepYeet app icon"
              width={88}
              height={88}
            />
            <h2>Make cleanup feel finishable.</h2>
            <p>Swipe right to keep. Swipe left to yeet. Review before you delete.</p>
            <StoreButtons compact />
          </aside>
        </div>
      </article>
    </>
  );
}
