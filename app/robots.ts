import { MetadataRoute } from 'next';
import { WEBSITE_DOMAIN, WEBSITE_URL } from '@/lib/config';

if (!WEBSITE_DOMAIN) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('NEXT_PUBLIC_WEBSITE_DOMAIN is missing in production!');
  }
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  };
}
