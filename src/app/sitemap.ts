import type { MetadataRoute } from "next";

import { getRestaurantCategories } from "@/lib/restaurant-categories";
import { getRestaurants } from "@/lib/restaurants";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/restaurants`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/categories`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/map`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/submit`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const restaurantRoutes: MetadataRoute.Sitemap = getRestaurants().map((restaurant) => ({
    url: `${SITE_URL}/restaurants/${restaurant.slug}`,
    lastModified: restaurant.lastVerified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = getRestaurantCategories().map((category) => ({
    url: `${SITE_URL}/categories/${category.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...restaurantRoutes, ...categoryRoutes];
}
