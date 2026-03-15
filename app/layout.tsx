import type { Metadata } from 'next';
import { Open_Sans, Noto_Sans_SC, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { WEBSITE_URL } from '@/lib/config';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});
const notoSans = Noto_Sans_SC({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});
const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),

  title: {
    template: '%s | Ankit Kr. Chowdhury',
    default: 'Ankit Kr. Chowdhury | Portfolio',
  },

  description:
    'Software Engineer building scalable web and mobile apps, cloud-native systems, and AI-powered tools with modern technologies.',
  keywords: [
    'Ankit Kr. Chowdhury',
    'Ankit Kumar Chowdhury',
    'Ankit Chowdhury',
    'Ankit Kumar',
    'Ankit',
    'Chowdhury',
    'Kumar',
    'web developer',
    'frontend engineer',
    'back-end ngineer',
    'full-stack developer',
    'React.js',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'portfolio website',
    'software engineer',
    'JavaScript',
    'portfolio',
    'website',
    'developer',
    'web development',
    'software development',
    'software developer',
    'web developer portfolio',
    'web development portfolio',
    'software development portfolio',
    'software developer portfolio',
    'Ankit Chowdhury',
  ],

  authors: [
    {
      name: 'Ankit Kr. Chowdhury',
      url: WEBSITE_URL,
    },
  ],

  publisher: 'Ankit Kr. Chowdhury',

  openGraph: {
    title: 'Ankit Kr. Chowdhury | Portfolio',
    url: WEBSITE_URL,
    siteName: 'Ankit Kr. Chowdhury | Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${WEBSITE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Ankit Kr. Chowdhury | Portfolio',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  twitter: {
    title: 'Ankit Kr. Chowdhury | Portfolio',
    card: 'summary_large_image',
    creator: '@Ankit7049266066',
    images: [`${WEBSITE_URL}/images/og-image.png`],
  },

  icons: {
    shortcut: `${WEBSITE_URL}/favicon.ico`,
  },

  alternates: {
    canonical: WEBSITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${openSans.variable} ${notoSans.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
