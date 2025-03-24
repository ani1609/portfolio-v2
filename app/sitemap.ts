import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

if (!siteUrl) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('NEXT_PUBLIC_WEBSITE_DOMAIN is missing in production!');
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${siteUrl}`,
      lastModified: new Date().toISOString(),
      priority: 1.0,
    },
  ];
}
