import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import Navigation from "@/components/navigation";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Aaron Lambley - Fullstack Developer - Ruby, JS/TS, Python",
  description: "Aaron Lambley - Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          property="og:title"
          content="Aaron Lambley - Fullstack Developer - Ruby, JS/TS, Python"
        />
        <meta
          property="og:description"
          content="Aaron Lambley - Fullstack Developer - Ruby, JS/TS, Python"
        />
        <meta property="og:image" content="/images/ogimage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.agslambley.dev/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <body className="w-11/12 m-auto bg-main text-text">
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
