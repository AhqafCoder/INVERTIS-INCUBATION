import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invertis Incubation Center",
  description: "Invertis Incubation Center supports startups with mentorship, resources, and innovation to drive entrepreneurial success.",
  keywords: ["incubation center", "startups", "Invertis", "entrepreneurship", "innovation", "business growth", "mentorship"],
  icons: {
    icon: "/iiif.svg",
    apple: "/iiif.svg",
  },
  openGraph: {
    title: "Invertis Incubation Center",
    description: "Empowering startups with mentorship, funding, and resources at Invertis Incubation Center.",
    url: "https://invertisincubation.com",
    siteName: "Invertis Incubation",
    images: [
      {
        url: "/iiif.svg",
        width: 1200,
        height: 630,
        alt: "Invertis Incubation Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invertis Incubation Center",
    description: "Join Invertis Incubation Center to accelerate your startup with expert guidance and resources.",
    images: ["/iiif.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://invertisincubation.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}