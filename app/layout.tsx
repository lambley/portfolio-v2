import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react";
import ogImage from "@/public/images/ogimage.png";

export const metadata: Metadata = {
  title: "Aaron Lambley - Fullstack Developer - Ruby, JS/TS, Python",
  description: "Aaron Lambley - Fullstack Developer",
  metadataBase: new URL("https://www.agslambley.dev/"),
  icons: [
    {
      url: "/favicon.ico",
      type: "image/x-icon",
    },
    {
      url: "/favicon-16x16.png",
      type: "image/png",
    },
    {
      url: "/favicon-32x32.png",
      type: "image/png",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://www.agslambley.dev/",
    title: "Aaron Lambley - Fullstack Developer - Ruby, JS/TS, Python",
    description: "Aaron Lambley - Fullstack Developer",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "Aaron Lambley - Fullstack Developer - Ruby, JS/TS, Python",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "Aaron Lambley - Fullstack Developer - Ruby, JS/TS, Python",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-11/12 m-auto bg-main text-text">
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
