import '@/styles/globals.css';
import { Metadata } from 'next';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import { satoshi } from '@/lib/fonts';
import Navbar from '@/components/navbar';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'bg-gray-50 font-sans font-medium text-gray-700 antialiased',
        satoshi.variable,
      )}
    >
      <body className="mx-auto min-h-screen min-w-[360px] max-w-5xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
