import type { Metadata } from 'next';
import { Open_Sans, Noto_Sans_SC, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const open = Open_Sans({ variable: '--font-open', subsets: ['latin'] });
const noto = Noto_Sans_SC({ variable: '--font-noto', subsets: ['latin'] });
const source = Source_Sans_3({ variable: '--font-source', subsets: ['latin'] });

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
        className={`${open.variable} ${noto.variable} ${source.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
