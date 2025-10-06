import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mgp-angola.com"),
  title: {
    default:
      "MGP Investment cc — Procurement, Supplier Management, and Projects in Angola",
    template: "%s | MGP Investment cc",
  },
  description:
    "MGP is a 3PP service provider in Angola focused on procurement, supplier enablement, and project delivery.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MGP Investment cc",
    description:
      "Procurement and supplier management for cost-effective, reliable supply in Angola.",
    type: "website",
    url: "https://mgp-angola.com/",
    siteName: "MGP Investment cc",
  },
  twitter: {
    card: "summary_large_image",
    title: "MGP Investment cc",
    description:
      "Procurement and supplier management for cost-effective, reliable supply in Angola.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${inter.variable} min-h-screen bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100`}
      >
        {children}
      </body>
    </html>
  );
}
