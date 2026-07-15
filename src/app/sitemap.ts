import type { MetadataRoute } from "next";
import { getGuideScreenshotIndex, guideUpdatedAt, guides } from "@/data/guides";
import { screenshots, site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const contentLastModified = new Date(`${guideUpdatedAt}T00:00:00.000Z`);
  const appImages = [
    `${site.url}/images/app-store/keepyeet-icon.webp`,
    `${site.url}/images/app-store/keepyeet-hero-phone.webp`,
    ...screenshots.map((shot) => `${site.url}${shot.src}`),
  ];

  return [
    {
      url: `${site.url}/`,
      lastModified: contentLastModified,
      images: appImages,
    },
    {
      url: `${site.url}/guides/`,
      lastModified: contentLastModified,
    },
    ...guides.map((guide) => ({
      url: `${site.url}/guides/${guide.slug}/`,
      lastModified: contentLastModified,
      images: [
        `${site.url}${screenshots[getGuideScreenshotIndex(guide.slug) % screenshots.length].src}`,
      ],
    })),
    { url: `${site.url}/privacy/` },
    { url: `${site.url}/terms/` },
  ];
}
