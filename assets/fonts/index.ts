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
    { path: './SFMonoLight.woff', weight: '300' },
    { path: './SFMonoRegular.woff', weight: '400' },
    { path: './SFMonoMedium.woff', weight: '500' },
    { path: './SFMonoSemiBold.woff', weight: '600' },
    { path: './SFMonoBold.woff', weight: '700' },
    { path: './SFMonoHeavy.woff', weight: '800' },
  ],
  variable: '--font-sf-mono',
});
