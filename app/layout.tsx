import type { Metadata } from 'next';
import './globals.css';
import { sfMono, openSans, notoSans, sourceSans } from '@/app/fonts';

export const metadata: Metadata = {
  title: 'Ankit Kr. Chowdhury',
  description:
    'Personal portfolio and projects by Ankit Kr. Chowdhury, showcasing expertise in software development, UI/UX, and open-source contributions.',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${sfMono.variable} ${openSans.variable} ${notoSans.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
