import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import SiteEffects from "@/components/SiteEffects";

export const metadata: Metadata = {
  title: "ApexWash | Professional Pressure Washing & Soft Wash",
  description:
    "Residential and commercial pressure washing, soft wash, and exterior cleaning. Free estimates. Licensed & insured.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Outfit:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <JsonLd />
        {children}
        <SiteEffects />
      </body>
    </html>
  );
}
