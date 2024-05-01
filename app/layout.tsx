import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spam Detector | HACK-A-VISHKAR",
  description: "Spam Detector is a Hack-A-Vishkar hackathon project on spam email detection system using python ml models",
  applicationName: 'Sapm Detector',
  manifest: '/manifest.json',
  metadataBase: new URL('https://spam-detector-793.vercel.app'),
  creator: 'Dhawal Vijayvargiya',
  authors: [
    {
      name: 'Dhawal Vijayvargiya',
      url: 'https://github.com/dhawal-793'
    }
  ],
  keywords: ['spam detection', 'spam message detector', 'spam email detector', 'spam detector', 'dhawal vijayvargiya', 'dhawal vijayvargiya projects'],
  openGraph: {
    title: 'Spam Detector | HACK-A-VISHKAR',
    description: 'Spam Detector is a Hack-A-Vishkar hackathon project on spam email detection system using python ml models',
    siteName: 'Spam Detector',
    url: 'https://spam-detector-793.vercel.app/',
    images: '/og-image.png',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spam Detector | HACK-A-VISHKAR',
    description: 'Spam Detector is a Hack-A-Vishkar hackathon project on spam email detection system using python ml models'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    },
  },
  category: 'technology',
  alternates: {
    canonical: 'https://spam-detector-793.vercel.app'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-background">
            <main className="flex-1 flex items-center justify-between px-6 sm:px-10 md:px-16 lg:px-20">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
