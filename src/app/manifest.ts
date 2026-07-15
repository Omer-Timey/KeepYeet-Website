import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KeepYeet: Swipe Photo Cleaner",
    short_name: "KeepYeet",
    description:
      "Swipe through photo and video clutter, keep what matters, and free up phone storage.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbfaf7",
    theme_color: "#16c95b",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
