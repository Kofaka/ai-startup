import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
// Components
import { Header } from '@/app/components/common';
// Styles
import '@/app/styles/global.scss';
import styles from '@/app/layout.module.scss';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Startup',
  description: 'Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.',
  icons: [
    // Favicon SVG
    {
      rel: 'icon',
      url: '/favicon.svg',
      type: 'image/svg+xml',
    },
    // Favicon PNG (96x96)
    {
      rel: 'icon',
      url: '/favicon-96x96.png',
      type: 'image/png',
      sizes: '96x96',
    },
    // Apple Touch Icon
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={clsx(inter.variable, styles.root)}>
      <Header className={styles.header}/>

      <main className={styles.content}>{children}</main>
    </body>
    </html>
  );
}
