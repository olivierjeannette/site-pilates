import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Studio Pilates by Skàli – Laval",
  description:
    "Cours de Pilates Matwork à Laval. Groupes réduits, tous niveaux, ambiance bienveillante. Cours collectifs, prénatal, entreprises et à domicile.",
  keywords: "pilates, laval, cours pilates, matwork, prenatal, studio pilates, skali",
  openGraph: {
    title: "Studio Pilates by Skàli – Laval",
    description: "Cours de Pilates Matwork à Laval. Bougez, respirez, réveillez-vous.",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: "#FDFAF5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
