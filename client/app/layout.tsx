import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Invertis Innovation & Incubation",
  description: "Invertis Innovation & Incubation (III) is the hub for innovators and entrepreneurs at Invertis University, Bareilly. III offers mentoring, funding, industry partnerships, and a vibrant ecosystem to help startups and students turn ideas into impactful businesses. Discover our programs, success stories, and partners driving innovation in technology, healthcare, sustainability, and social impact.",
  keywords: ["Invertis University", "Incubation", "Innovation", "Startups", "Entrepreneurship", "Bareilly", "Mentoring", "Funding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
