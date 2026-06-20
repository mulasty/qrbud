import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "QR BUD Mikołaj Tchórzewski | Budowa domów i remonty — Łomża",
    template: "%s | QR BUD Łomża",
  },
  description:
    "Firma budowlana QR BUD Mikołaj Tchórzewski — budowa domów jednorodzinnych, remonty, wykończenia wnętrz, elewacje, dachy, usługi koparko-ładowarką. Łomża i woj. podlaskie.",
  keywords: [
    "budowa domów",
    "Łomża",
    "remonty",
    "wykończenia wnętrz",
    "elewacje",
    "ocieplenia",
    "dachy",
    "więźby dachowe",
    "fundamenty",
    "koparko-ładowarka",
    "QR BUD",
    "Mikołaj Tchórzewski",
    "firma budowlana",
    "podlaskie",
  ],
  authors: [{ name: "QR BUD Mikołaj Tchórzewski" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://qrbud.pl",
    siteName: "QR BUD Mikołaj Tchórzewski",
    title: "QR BUD Mikołaj Tchórzewski | Budowa domów i remonty — Łomża",
    description:
      "Profesjonalne usługi budowlane — budowa domów jednorodzinnych, remonty, wykończenia wnętrz, elewacje, dachy. Działamy w Łomży i woj. podlaskim.",
    images: [
      {
        url: "https://qrbud.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QR BUD — budowa domów i remonty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QR BUD Mikołaj Tchórzewski | Budowa domów i remonty",
    description:
      "Profesjonalne usługi budowlane w Łomży i woj. podlaskim.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://qrbud.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-text">
        <SchemaOrg />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
