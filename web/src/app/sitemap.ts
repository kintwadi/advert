import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mgp-angola.com";
  const routes = ["/en", "/pt", "/en/about", "/pt/about", "/en/services", "/pt/services", "/en/projects", "/pt/projects", "/en/contact", "/pt/contact"];
  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: "weekly", priority: route === "/en" || route === "/pt" ? 1 : 0.7 }));
}
