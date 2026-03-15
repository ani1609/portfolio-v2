import { MetadataRoute } from 'next';
import { WEBSITE_DOMAIN, WEBSITE_URL } from '@/lib/config';

if (!WEBSITE_DOMAIN) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('NEXT_PUBLIC_WEBSITE_DOMAIN is missing in production!');
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: WEBSITE_URL,
      lastModified: new Date().toISOString(),
      priority: 1.0,
    },
  ];
}
