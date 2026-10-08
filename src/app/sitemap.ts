import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = SITE_CONFIG.siteUrl || "https://shakti-studio.vercel.app";

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/beauty-services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/bridal-mehndi", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/creative-studio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
