import React, { Suspense, useMemo } from "react";
import { useParams } from "react-router-dom";
import MdxLayout from "../components/MdxLayout";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const modules = import.meta.glob("../content/posts/*.{md,mdx}");
  const Component = useMemo(() => {
    if (!slug) return null;
    const mdxPath = `../content/posts/${slug}.mdx`;
    const mdPath = `../content/posts/${slug}.md`;
    const key =
      mdxPath in modules ? mdxPath : mdPath in modules ? mdPath : null;
    if (!key) return null;
    return React.lazy((modules as Record<string, () => Promise<any>>)[key]);
  }, [slug, modules]);

  if (!Component) return <div>Post not found</div>;

  return (
    <Suspense fallback={<div>Loading…</div>}>
      <MdxLayout>
        <Component />
      </MdxLayout>
    </Suspense>
  );
}
