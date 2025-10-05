/**
 * Layout avec i18n - Design System Luxe
 * Fonts premium : Playfair Display (titres) + Inter (corps de texte)
 */

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/request';
import "../globals.css";

// Fonts premium pour design luxueux
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

/**
 * Metadata SEO optimisé
 */
export const metadata: Metadata = {
  title: {
    default: "BTP Excellence - Votre partenaire construction de confiance",
    template: "%s | BTP Excellence"
  },
  description: "Expert en construction, rénovation et maçonnerie depuis plus de 25 ans. Devis gratuit. 500+ projets réalisés.",
  keywords: [
    "BTP",
    "construction",
    "rénovation",
    "maçonnerie",
    "gros œuvre",
    "bâtiment",
    "travaux",
    "entrepreneur",
    "Paris"
  ],
  authors: [{ name: "BTP Excellence" }],
  creator: "BTP Excellence",
  publisher: "BTP Excellence",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.btp-excellence.fr",
    siteName: "BTP Excellence",
    title: "BTP Excellence - Votre partenaire construction de confiance",
    description: "Expert en construction, rénovation et maçonnerie depuis plus de 25 ans.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "BTP Excellence - Construction et rénovation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BTP Excellence - Votre partenaire construction de confiance",
    description: "Expert en construction, rénovation et maçonnerie depuis plus de 25 ans.",
    images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=630&fit=crop"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Vérifier que la locale est valide
  const validLocales: readonly string[] = locales;
  if (!validLocales.includes(locale)) {
    notFound();
  }

  // Récupérer les messages de traduction
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
