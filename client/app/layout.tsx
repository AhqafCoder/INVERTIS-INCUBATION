import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://incubation-ivory.vercel.app'),
  title: {
    default: "Invertis Innovation & Incubation | Empowering Startups & Entrepreneurs",
    template: "%s | Invertis Innovation & Incubation"
  },
  description: "Invertis Innovation & Incubation (III) is the hub for innovators and entrepreneurs at Invertis University, Bareilly. III offers mentoring, funding, industry partnerships, and a vibrant ecosystem to help startups and students turn ideas into impactful businesses. Discover our programs, success stories, and partners driving innovation in technology, healthcare, sustainability, and social impact.",
  keywords: [
    "Invertis University",
    "Invertis Incubation",
    "Innovation Hub",
    "Startup Incubator",
    "Entrepreneurship",
    "Bareilly",
    "Uttar Pradesh",
    "Mentoring",
    "Startup Funding",
    "Technology Innovation",
    "Healthcare Innovation",
    "Sustainability",
    "Social Impact",
    "Student Startups",
    "Industry Partnerships",
    "Business Acceleration"
  ],
  authors: [{ name: "Invertis Innovation & Incubation" }],
  creator: "Invertis University",
  publisher: "Invertis Innovation & Incubation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://incubation-ivory.vercel.app",
    siteName: "Invertis Innovation & Incubation",
    title: "Invertis Innovation & Incubation | Empowering Startups & Entrepreneurs",
    description: "Join the leading innovation and incubation hub at Invertis University. Get mentoring, funding, and resources to transform your ideas into successful businesses.",
    images: [
      {
        url: "/assets/incub-logo-final.png",
        width: 1200,
        height: 630,
        alt: "Invertis Innovation & Incubation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invertis Innovation & Incubation | Empowering Startups & Entrepreneurs",
    description: "Join the leading innovation and incubation hub at Invertis University. Get mentoring, funding, and resources to transform your ideas into successful businesses.",
    images: ["/assets/incub-logo-final.png"],
    creator: "@invertisuniv",
  },
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
  icons: {
    icon: [
      { url: "/assets/circlelogo.png" },
      { url: "/assets/circlelogo.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/circlelogo.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/assets/circlelogo.png",
    apple: [
      { url: "/assets/circlelogo.png" },
      { url: "/assets/circlelogo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Invertis Innovation & Incubation',
    alternateName: 'III',
    url: 'https://incubation-ivory.vercel.app',
    logo: 'https://incubation-ivory.vercel.app/assets/incub-logo-final.png',
    description: 'Invertis Innovation & Incubation (III) is the hub for innovators and entrepreneurs at Invertis University, Bareilly.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Invertis Village, Delhi-Bareilly Road',
      addressLocality: 'Bareilly',
      addressRegion: 'Uttar Pradesh',
      postalCode: '243123',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Admissions',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      'https://www.facebook.com/invertisuniversity',
      'https://twitter.com/invertisuniv',
      'https://www.linkedin.com/school/invertis-university',
      'https://www.instagram.com/invertisuniversity'
    ],
    parentOrganization: {
      '@type': 'University',
      name: 'Invertis University',
      url: 'https://www.invertis.org'
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        <AnnouncementBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
