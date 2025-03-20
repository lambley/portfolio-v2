import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ogImage from "@/public/images/ogimage.png";
import { cn } from "@/lib/utils";

const mainFont = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaron Lambley | Fullstack Developer - Ruby, JS/TS, Python",
  description: "Aaron Lambley is a full-stack developer specializing in Ruby on Rails, JavaScript/TypeScript, and Python. Explore projects, blog posts, and technical insights.",
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
      <body
        className={cn("w-11/12 m-auto bg-main text-text", mainFont.className)}
      >
        <Navigation />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
