import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import NextBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    optimizePackageImports: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/react-fontawesome",
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withBundleAnalyzer(withMDX(nextConfig));
