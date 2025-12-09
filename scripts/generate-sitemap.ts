import fs from "fs/promises";
import fsSync from "fs";
import path from "path";

const baseDir = process.cwd();

const DOMAIN = "https://agslambley.dev";

const publicDir: string = path.resolve(baseDir, "public");
const postsDir: string = path.resolve(
  baseDir,
  "src",
  "content",
  "posts"
);

const ROUTES: readonly string[] = ["/", "/projects", "/blog"];

const isMarkdown = (filename: string): boolean =>
  /\.(md|mdx|markdown)$/i.test(filename);

async function readBlogSlugs(dir: string): Promise<string[]> {
  try {
    if (!fsSync.existsSync(dir)) return [];
    const entries: string[] = await fs.readdir(dir);
    return entries
      .filter((f): f is string => typeof f === "string" && isMarkdown(f))
      .map((f) => `/blog/${path.basename(f, path.extname(f))}`);
  } catch (err) {
    console.error(`Failed to read blog posts directory (${dir}):`, err);
    return [];
  }
}

function absoluteUrl(route: string): string {
  try {
    return new URL(route, DOMAIN).toString();
  } catch {
    return `${DOMAIN.replace(/\/$/, "")}${
      route.startsWith("/") ? route : `/${route}`
    }`;
  }
}

function buildSitemapXml(urls: string[], lastModIso: string): string {
  const urlEntries = urls
    .map(
      (u) => `  <url>
    <loc>${absoluteUrl(u)}</loc>
    <lastmod>${lastModIso}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

async function ensureDir(dir: string): Promise<void> {
  await fs.mkdir(dir, { recursive: true });
}

async function writeSitemap(destDir: string, xml: string): Promise<void> {
  const dest = path.join(destDir, "sitemap.xml");
  await fs.writeFile(dest, xml, { encoding: "utf8" });
  console.log(`sitemap.xml written to ${dest}`);
}

async function generateSitemap(): Promise<void> {
  try {
    const blogSlugs = await readBlogSlugs(postsDir);
    const urls = [...ROUTES, ...blogSlugs];
    const now = new Date().toISOString();
    const sitemapXml = buildSitemapXml(urls, now);

    await ensureDir(publicDir);
    await writeSitemap(publicDir, sitemapXml);
  } catch (err) {
    console.error("Failed to generate sitemap:", err);
    process.exitCode = 1;
  }
}

if (typeof process !== "undefined" && (process as NodeJS.Process).argv0) {
  generateSitemap().catch((err) => {
    console.error("Unhandled error generating sitemap:", err);
    process.exitCode = 1;
  });
}
