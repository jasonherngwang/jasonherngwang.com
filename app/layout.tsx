import '@/styles/globals.css';
import localFont from 'next/font/local';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import Navbar from '@/components/navbar';

const satoshi = localFont({
  variable: '--font-satoshi',
  src: [
    {
      path: '../public/fonts/satoshi/Satoshi-Variable.ttf',
      weight: '400 700',
      style: 'normal',
    },
    {
      path: '../public/fonts/satoshi/Satoshi-VariableItalic.ttf',
      weight: '400 700',
      style: 'italic',
    },
  ],
  display: 'swap',
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Satoshi 400 weight is too thin; use medium 500 for legibility
    <html
      lang="en"
      className={clsx(
        'bg-neutral-50 font-sans font-medium text-neutral-700 antialiased',
        satoshi.variable,
      )}
    >
      {/* Width 320-1024px; x-padding increases with screen size */}
      <body className="mx-auto min-h-screen min-w-[320px] max-w-5xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
