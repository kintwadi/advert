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
  title: {
    default: "MGP Angola",
    template: "%s | MGP Angola",
  },
  description: "Engineering and Project Management in Angola",
  metadataBase: new URL("https://mgp-angola.com"),
  openGraph: {
    title: "MGP Angola",
    description: "Engineering and Project Management in Angola",
    url: "https://mgp-angola.com",
    siteName: "MGP Angola",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MGP Angola",
    description: "Engineering and Project Management in Angola",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
