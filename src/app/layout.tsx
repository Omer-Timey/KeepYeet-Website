import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | KeepYeet",
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "photo cleaner app",
    "camera roll cleaner",
    "swipe delete photos",
    "clean up camera roll",
    "free up phone storage",
  ],
  authors: [{ name: "Omer Yom Tov" }],
  creator: "Omer Yom Tov",
  publisher: "KeepYeet",
  category: "Utilities",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/images/app-store/screenshot-01.webp",
        width: 600,
        height: 1300,
        alt: "KeepYeet swipe photo cleaner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/app-store/screenshot-01.webp"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16c95b",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const entityGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#developer`,
        name: site.developerName,
        url: site.url,
      },
      {
        "@type": "Brand",
        "@id": `${site.url}/#brand`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/images/app-store/keepyeet-icon.webp`,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        description: site.description,
        inLanguage: site.language,
        publisher: { "@id": `${site.url}/#developer` },
        about: { "@id": `${site.url}/#app` },
      },
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <JsonLd data={entityGraph} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
