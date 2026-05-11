import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Norvia – Godkänd leverans. Trygg förbindelse.",
  description:
    "Norvia hjälper dig att skicka paket som uppfyller Kriminalvårdens regler – med omtanke, tydlighet och full respekt för gällande bestämmelser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
