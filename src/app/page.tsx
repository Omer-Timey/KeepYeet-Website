import Image from "next/image";
import Link from "next/link";
import { DownloadCard } from "@/components/download-card";
import { JsonLd } from "@/components/json-ld";
import { StoreButtons } from "@/components/store-buttons";
import { guides } from "@/data/guides";
import { homepageFaqs, screenshots, site } from "@/data/site";

const features = [
  {
    emoji: "⏱️",
    title: "Clean in quick sessions",
    body: "Make a little progress whenever you have a few spare minutes, without tackling your whole library at once.",
  },
  {
    emoji: "👆",
    title: "Swipe, don’t scroll",
    body: "Swipe right to keep and left to yeet, turning a huge library into a quick decision loop.",
  },
  {
    emoji: "🗂️",
    title: "Start with the messiest view",
    body: "Open videos, screenshots, months, albums, or Recents instead of scrolling forever.",
  },
  {
    emoji: "👀",
    title: "Review before delete",
    body: "See everything marked for deletion and fix a doubtful swipe before you confirm the cleanup.",
  },
  {
    emoji: "📊",
    title: "See the space you reclaim",
    body: "Follow cleanup progress and storage reclaimed so every session has a visible payoff.",
  },
  {
    emoji: "🔒",
    title: "Photos stay on-device",
    body: "Photo-library sorting and deletion happen on your device, and there is no account to create.",
  },
];

const steps = [
  {
    title: "Choose your view",
    body: "Start with screenshots, videos, Recents, an album, or one month that needs attention.",
  },
  {
    title: "Swipe through it",
    body: "Swipe right to keep what matters. Swipe left to yeet what no longer earns its space.",
  },
  {
    title: "Review the pile",
    body: "Check every item marked for deletion and change your mind before anything is confirmed.",
  },
  {
    title: "Enjoy the reset",
    body: "Complete the cleanup, see your progress, and come back for another small session whenever you like.",
  },
];

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: `${site.url}/`,
        name: site.title,
        description: site.description,
        inLanguage: site.language,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#app` },
        mainEntity: { "@id": `${site.url}/#app` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${site.url}/images/app-store/keepyeet-hero-phone.webp`,
          width: 1007,
          height: 2078,
        },
      },
      {
        "@type": ["SoftwareApplication", "MobileApplication"],
        "@id": `${site.url}/#app`,
        name: site.name,
        alternateName: "KeepYeet: Swipe Delete Photos",
        applicationCategory: "UtilitiesApplication",
        applicationSubCategory: "Photo & Video",
        operatingSystem: "iOS 16.4 or later; Android",
        description: site.description,
        url: site.url,
        downloadUrl: [site.appStoreUrl, site.googlePlayUrl],
        sameAs: [site.appStoreUrl, site.googlePlayUrl],
        image: `${site.url}/images/app-store/keepyeet-icon.webp`,
        screenshot: screenshots.map((shot) => `${site.url}${shot.src}`),
        featureList: [
          "Swipe right to keep photos and videos",
          "Swipe left to mark photos and videos for deletion",
          "Review marked media before final deletion",
          "Filter by videos, screenshots, months, albums, and Recents",
          "Track cleanup progress and storage reclaimed",
          "No account required",
          "On-device photo-library sorting and deletion",
        ],
        author: { "@id": `${site.url}/#developer` },
        publisher: { "@id": `${site.url}/#developer` },
        brand: { "@id": `${site.url}/#brand` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          description: "Free to download with in-app purchases",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        url: `${site.url}/#faq`,
        isPartOf: { "@id": `${site.url}/#webpage` },
        mainEntity: homepageFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />

      <section className="hero">
        <div className="hero-glow hero-glow--one" aria-hidden="true" />
        <div className="hero-glow hero-glow--two" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true">💚</span> The swipe photo cleaner</p>
            <h1>
              <span>Clean up your<br />camera roll.</span>
              <em>One swipe at<br />a time.</em>
            </h1>
            <p className="hero-lede">
              KeepYeet turns photo and video clutter into a quick, satisfying
              habit. Swipe right to <strong>keep</strong>.
              Swipe left to <strong>delete</strong>. Review
              your choices, free up phone storage, and get back to the memories
              that matter.
            </p>
            <StoreButtons />
            <ul className="trust-list" aria-label="KeepYeet benefits">
              <li>Free to try</li>
              <li>Photos stay on-device</li>
              <li>No account needed</li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="KeepYeet app preview">
            <div className="hero-phone">
              <Image
                src="/images/app-store/keepyeet-hero-phone.webp"
                alt="KeepYeet Collections showing On This Day and monthly photo groups"
                width={1007}
                height={2078}
                loading="eager"
                sizes="(max-width: 860px) 100vw, 300px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section why-section" aria-labelledby="why-heading">
        <div className="reference-wrap">
          <div className="section-heading reference-heading">
            <p className="kicker">Why KeepYeet</p>
            <h2 id="why-heading">Less photo clutter. More room to breathe.</h2>
            <p>
              A camera roll cleaner should make decisions easier without taking
              them away from you. KeepYeet keeps the flow focused and the final say yours.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-icon" aria-hidden="true">{feature.emoji}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section screenshots-section" id="screenshots" aria-labelledby="screenshots-heading">
        <div className="reference-wrap">
          <div className="section-heading reference-heading">
            <p className="kicker">Inside the app</p>
            <h2 id="screenshots-heading">
              Swipe through photos. <span className="keep-word">Keep</span> what
              matters. <span className="yeet-word">Yeet</span> the rest.
            </h2>
            <p>
              See the real KeepYeet experience: find clutter, swipe through
              photos, review your choices, and clear it with confidence.
            </p>
          </div>
          <div
            className="screenshot-rail"
            role="list"
            aria-label="KeepYeet screenshots"
            tabIndex={0}
          >
            {screenshots.map((shot) => (
              <figure className="screenshot-card" role="listitem" key={shot.src}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={600}
                  height={1300}
                  sizes="(max-width: 740px) 78vw, (max-width: 980px) 31vw, 216px"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section how-section" id="how-it-works" aria-labelledby="how-heading">
        <div className="reference-wrap">
          <div className="section-heading reference-heading">
            <p className="kicker">How it works</p>
            <h2 id="how-heading">From “storage full” to sorted in four simple steps.</h2>
            <p>No complicated menus. No automatic deletion. Just clear choices with a review before you confirm.</p>
          </div>
          <ol className="step-grid">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--paper" id="guides" aria-labelledby="guides-heading">
        <div className="shell">
          <div className="section-heading">
            <p className="kicker">Practical cleanup guides</p>
            <h2 id="guides-heading">Solve the photo mess you searched for.</h2>
            <p>
              Clear answers for high-intent cleanup questions, followed by the
              exact KeepYeet workflow that gets the job done.
            </p>
          </div>
          <div className="guide-grid guide-grid--home">
            {guides.map((guide) => (
              <Link
                className="guide-card"
                href={`/guides/${guide.slug}/`}
                key={guide.slug}
              >
                <span className="guide-card__tag">{guide.eyebrow}</span>
                <h3>{guide.h1}</h3>
                <p>{guide.description}</p>
                <strong className="guide-card__cta">
                  Read the guide <span aria-hidden="true">→</span>
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq" aria-labelledby="faq-heading">
        <div className="shell faq-layout">
          <div className="faq-intro">
            <p className="kicker">FAQ</p>
            <h2 id="faq-heading">Specific answers. No cleanup fog.</h2>
            <p>
              Open a question for the short answer, then follow its Learn More
              link for a full step-by-step guide.
            </p>
          </div>
          <div className="faq-list">
            {homepageFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <div>
                  <p>{faq.answer}</p>
                  <Link className="text-link" href={faq.href}>
                    {faq.linkLabel} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <DownloadCard id="download" headingId="faq-download-heading" />
    </>
  );
}
