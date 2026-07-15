import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { StoreButtons } from "@/components/store-buttons";
import { getGuide, guides } from "@/data/guides";
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

  const index = guides.findIndex((item) => item.slug === guide.slug);
  const screenshot = screenshots[index % screenshots.length];
  const related = guide.relatedSlugs
    .map((relatedSlug) => getGuide(relatedSlug))
    .filter((item) => item !== undefined);
  const canonical = `${site.url}/guides/${guide.slug}/`;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.h1,
      description: guide.description,
      mainEntityOfPage: canonical,
      url: canonical,
      datePublished: "2026-07-15",
      dateModified: "2026-07-15",
      author: { "@type": "Person", name: "Omer Yom Tov" },
      publisher: {
        "@type": "Organization",
        name: site.name,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/images/app-store/keepyeet-icon.webp`,
        },
      },
      image: `${site.url}${screenshot.src}`,
      keywords: guide.keyword,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${site.url}/guides/` },
        { "@type": "ListItem", position: 3, name: guide.h1, item: canonical },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

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
                  <li key={step.title}>
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
