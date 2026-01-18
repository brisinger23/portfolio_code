import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "ANANYA KAUL",
  url: "https://www.linkedin.com/in/ananyakaul",
  image: "/images/hero/IMG_4620.JPG",
  sameAs: [
    "https://www.instagram.com/theluckylad",
    "https://www.linkedin.com/in/ananyakaul",
  ],
  jobTitle: "Junior Mobile Developer",
  worksFor: {
    "@type": "Organization",
    name: "iApp Technologies LLP",
    url: "https://iapptechnologies.com/",
  },
  description:
    "Ananya Kaul — Junior Mobile Developer specializing in high-performance iOS applications and AI/ML solutions.",
};

export const metadata: Metadata = {
  title: "Ananya Kaul | iOS Developer & AI Enthusiast",
  description:
    "Ananya Kaul — Junior Mobile Developer specializing in high-performance iOS applications and AI/ML solutions.",
  keywords: [
    "Ananya Kaul",
    "iOS Developer",
    "Mobile Developer",
    "AI/ML",
    "Swift",
    "Python",
    "Portfolio",
  ],
  metadataBase: new URL("http://localhost:3000"), // Localhost for now or generic
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Ananya Kaul | iOS Developer & AI Enthusiast",
    description:
      "Ananya Kaul — Junior Mobile Developer specializing in high-performance iOS applications and AI/ML solutions.",
    siteName: "Ananya Kaul Portfolio",
    images: [
      {
        url: "/images/hero/IMG_4620.JPG",
        width: 800,
        height: 800,
        alt: "Ananya Kaul",
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Removed verification as it was specific to the previous user
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ananya Kaul",
  },
  icons: {
    icon: "/images/hero/IMG_4620.JPG?v=1", // Using profile picture with version to force refresh
    apple: "/images/hero/IMG_4620.JPG",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1117",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased grid-background`}
      >
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
