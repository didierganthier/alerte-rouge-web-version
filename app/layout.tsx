import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alerte Rouge",
  description: "Gout San Sove Lavi. Pri Yon Pochèt San se Lanmou",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Alerte Rouge" />
        <meta property="og:description" content="Gout San Sove Lavi. Pri Yon Pochèt San se Lanmou." />
        <meta property="og:image" content="hero1.jpg" />
        <meta property="og:url" content="https://alerterouge.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alerte Rouge" />
        <meta name="twitter:description" content="Gout San Sove Lavi. Pri Yon Pochèt San se Lanmou." />
        <meta name="twitter:image" content="hero1.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
