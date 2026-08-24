import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { Toaster } from "sonner";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// ─────────────────────────────────────────────
// GLOBAL SEO
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://moroccan-trip.com"),

  title: {
    default: "Moroccan Trip | Private Morocco Tours & Desert Trips",
    template: "%s | Moroccan Trip",
  },

  description:
    "Discover Morocco with private tours, Sahara Desert trips and authentic experiences. Explore Marrakech, Fes and Casablanca with local travel experts.",

  applicationName: "Moroccan Trip",

  creator: "Moroccan Trip",

  publisher: "Moroccan Trip",
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Moroccan Trip | Private Morocco Tours & Desert Trips",
  
    description:
      "Discover Morocco with private tours, Sahara desert trips and personalized journeys. Explore Marrakech, Merzouga, the Atlas Mountains and more with Moroccan Trip.",
  
    siteName: "Moroccan Trip",
  
    locale: "en_US",
  
    type: "website",
  
    images: [
      {
        url: "/images/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Moroccan Trip - Private Morocco Tours",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
  
    title: "Moroccan Trip | Private Morocco Tours & Desert Trips",
  
    description:
      "Discover Morocco with private tours, Sahara desert trips and personalized journeys across Morocco.",
  
    images: [
      "/images/home/og-home.webp",
    ],
  },


  robots: {
    index: true,
    follow: true,
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// ─────────────────────────────────────────────
// ROOT LAYOUT
// ─────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />

        <main className="w-full flex-1 bg-background">
          {children}
        </main>

        <Footer />
        <Toaster
  position="bottom-left"
  toastOptions={{
    duration: 4000,
  }}
/>
      </body>
    </html>
  );
}