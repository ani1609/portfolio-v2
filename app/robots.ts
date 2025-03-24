import { MetadataRoute } from 'next';

const siteDomain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

if (!siteDomain) {
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
    sitemap: `https://${siteDomain}/sitemap.xml`,
  };
}
