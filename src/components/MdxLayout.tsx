import React from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto my-12 px-4">
      {children}
    </article>
  );
}
