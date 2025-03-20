import type { Metadata } from 'next';
import './globals.css';
import { Open_Sans, Noto_Sans_SC, Source_Sans_3 } from 'next/font/google';
import localFont from 'next/font/local';

export const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});
export const notoSans = Noto_Sans_SC({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});
export const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
});

export const sfMono = localFont({
  src: [
    { path: './fonts/SFMonoLight.woff', weight: '300' },
    { path: './fonts/SFMonoRegular.woff', weight: '400' },
    { path: './fonts/SFMonoMedium.woff', weight: '500' },
    { path: './fonts/SFMonoSemiBold.woff', weight: '600' },
    { path: './fonts/SFMonoBold.woff', weight: '700' },
    { path: './fonts/SFMonoHeavy.woff', weight: '800' },
  ],
  variable: '--font-sf-mono',
});

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
