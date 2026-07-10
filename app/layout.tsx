import type { Metadata } from 'next';
import { Bitter, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import {
  SITE_NAME,
  SITE_URL,
  MOTTO,
  PHONE_E164,
  NIGERIA_OFFICE,
  US_OFFICE,
} from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bitter = Bitter({ subsets: ['latin'], variable: '--font-bitter' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${MOTTO}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Hope Springs International is a faith-based charity bringing holistic transformation to underserved communities through clean water, education, and healthcare — completely free of charge.',
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${MOTTO}`,
    description:
      'A faith-based charity bringing clean water, education, and healthcare to underserved communities — one village at a time.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

// NonProfit / Organization structured data with both offices.
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: SITE_NAME,
  slogan: MOTTO,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  telephone: PHONE_E164,
  areaServed: ['Nigeria', 'Africa'],
  address: [
    {
      '@type': 'PostalAddress',
      name: NIGERIA_OFFICE.title,
      streetAddress: 'Suite 1, Doho Plaza, Beside Tumfure Divisional Police Headquarters',
      addressLocality: 'Tumfure',
      addressRegion: 'Gombe State',
      postalCode: '771104',
      addressCountry: 'NG',
    },
    {
      '@type': 'PostalAddress',
      name: US_OFFICE.title,
      streetAddress: '2100 Nashville Pike',
      addressLocality: 'Gallatin',
      addressRegion: 'TN',
      postalCode: '37066',
      addressCountry: 'US',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bitter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-sky focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
