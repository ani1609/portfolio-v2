import type { Metadata } from 'next';
import { Open_Sans, Noto_Sans_SC, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

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
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`),

  title: {
    template: '%s | Ankit Kr. Chowdhury',
    default: 'Ankit Kr. Chowdhury | Portfolio',
  },

  description:
    'A passionate web developer skilled in React, Next.js, TypeScript, Tailwind CSS, and more. Explore my portfolio to see my projects.',

  keywords: [
    'Ankit Kr. Chowdhury',
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
      url: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`,
    },
  ],

  publisher: 'Ankit Kr. Chowdhury',

  openGraph: {
    title: 'Ankit Kr. Chowdhury | Web Developer',
    url: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`,
    siteName: 'Ankit Kr. Chowdhury Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Ankit Kr. Chowdhury Portfolio',
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
    title: 'Ankit Kr. Chowdhury | Web Developer',
    card: 'summary_large_image',
    creator: '@Ankit7049266066',
    images: [
      `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/images/og-image.png`,
    ],
  },

  icons: {
    shortcut: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/favicon.ico`,
  },

  alternates: {
    canonical: `https://${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}`,
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
