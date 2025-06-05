
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/ThemeProvider';
import { pharmacyDetails } from '@/lib/data';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-pharmacy-domain.com'; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), // Important for resolving relative Open Graph image URLs
  title: {
    default: `${pharmacyDetails.name} - Trusted Local Pharmacy in Kolkata`,
    template: `%s | ${pharmacyDetails.name}`,
  },
  description: `${pharmacyDetails.name} in ${pharmacyDetails.address.split(',').pop()?.trim() || 'Kolkata'} offers a wide range of medicines, prescription drugs, healthcare products, doctor consultations, and medical tests. Your trusted local pharmacy for all health needs.`,
  applicationName: pharmacyDetails.name,
  authors: [{ name: pharmacyDetails.name, url: siteUrl }],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Mahendar Pharmacy', 'pharmacy', 'Kolkata pharmacy', 'local pharmacy', 'medicines', 'prescription drugs', 'healthcare products', 'doctor consultation', 'medical tests', 'drugstore India'],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: `${pharmacyDetails.name} - Your Local Pharmacy in Kolkata`,
    description: `Visit ${pharmacyDetails.name} for a wide range of medicines, healthcare products, doctor consultations, and medical tests. Conveniently located at ${pharmacyDetails.address}.`,
    url: siteUrl,
    siteName: pharmacyDetails.name,
    images: [
      {
        url: '/hero.png', 
        width: 1200,
        height: 630,
        alt: `${pharmacyDetails.name} - Your Trusted Health Partner`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${pharmacyDetails.name} - Kolkata's Trusted Pharmacy Services`,
    description: `${pharmacyDetails.name} offers comprehensive pharmacy services including medicines, doctor appointments, and lab tests.`,
    images: ['/hero.png'], 
    // creator: '@yourTwitterHandle', // Optional: Add your Twitter handle
  },
  icons: {
    icon: '/favicon.ico', // Assuming you have a favicon.ico in /public
    // apple: '/apple-touch-icon.png', // Optional: For Apple devices
  },
  // Optional: For local business schema
  // verification: { // Example: Add Google Search Console verification
  //   google: 'your-google-site-verification-code',
  // },
  //alternates: { // If you have multiple languages or canonical URLs
  //  canonical: siteUrl,
  // languages: {
  //   'en-US': `${siteUrl}/en-US`,
  //  },
  //},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
        {/* The metadata object above will generate the necessary meta tags.
            You can add other <link> tags or scripts here if needed, like favicons or analytics. */}
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background text-foreground">
        <ThemeProvider
          defaultTheme="light"
          storageKey="mahendar-pharmacy-theme"
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
