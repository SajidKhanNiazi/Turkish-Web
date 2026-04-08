import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { silo1Categories, silo2Categories, silo3Categories } from '@/data/categories';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sekilli-yazi`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  // Silo 1 routes
  const silo1Routes = silo1Categories.map((category) => ({
    url: `${baseUrl}${category.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Silo 2 routes
  const silo2Routes = silo2Categories.map((category) => ({
    url: `${baseUrl}${category.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const silo3Routes = silo3Categories.map((category) => ({
    url: `${baseUrl}${category.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...silo1Routes, ...silo2Routes, ...silo3Routes];
}
