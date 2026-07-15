import type { Metadata, Viewport } from "next";
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
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
