import type { Metadata, Viewport } from "next";
import "./globals.css";
import { StoreProvider } from "../lib/store";

export const viewport: Viewport = {
  themeColor: "#0B192C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://tkmartials.com'),
  title: "MARTIALS | Integrated Consulting Across Trade, Risk, Technology & Talent",
  description: "Strategic consulting and operational support in Textile Raw Materials, General Insurance, Technology Utilities, Education Advisory, HR Operations, and Direct B2B Growth.",
  keywords: [
    "Martials Consulting",
    "TK Martials",
    "Textile Raw Materials Pakistan",
    "Cotton Sourcing Pakistan",
    "Yarn Sourcing",
    "General Insurance Advisory",
    "Marine Cargo Insurance",
    "Business Software Utilities",
    "Study Abroad Admissions",
    "HR Operations Pakistan"
  ],
  authors: [{ name: "Muhammad Talha Khan" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MARTIALS | Integrated Consulting",
    description: "Integrated Consulting Solutions Across Trade, Risk, Technology & Talent. Sourcing, Corporate Insurance, and Enterprise Utilities.",
    url: "https://tkmartials.com",
    siteName: "Martials Integrated Consulting",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Martials Integrated Consulting Logo & Brand",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARTIALS | Integrated Consulting",
    description: "Integrated Consulting Solutions Across Trade, Risk, Technology & Talent.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
