import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-15T00:00:00.000Z");
  const fixedRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "guides/", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "privacy/", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "terms/", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return [
    ...fixedRoutes.map((route) => ({
      url: `${site.url}/${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...guides.map((guide) => ({
      url: `${site.url}/guides/${guide.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
