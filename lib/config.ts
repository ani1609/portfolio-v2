// Server-only (not exposed to the browser)
export const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN ?? '';
export const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

// Client-safe (NEXT_PUBLIC_ prefix)
export const GITHUB_USERNAME =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? 'ani1609';
export const WEBSITE_DOMAIN = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN ?? '';
export const WEBSITE_URL = `https://${WEBSITE_DOMAIN}`;
