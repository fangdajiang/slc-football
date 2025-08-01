import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://slc-football.com';
  
  const routes = [''];
  
  const sitemap: MetadataRoute.Sitemap = [];
  
  // Add routes for each locale
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });
  
  // Add root redirect
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  });
  
  return sitemap;
}