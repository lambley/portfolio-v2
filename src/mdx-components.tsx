import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(
  components: MDXComponents = {}
): MDXComponents {
  return {
    h1: (props) => <h1 className="text-4xl font-bold my-6" {...props} />,
    h2: (props) => <h2 className="text-3xl" {...props} />,
    h3: (props) => <h3 className="text-2xl font-medium my-4" {...props} />,
    a: (props) => <a className="text-blue-600 underline" {...props} />,
    p: (props) => <p className="my-2" {...props} />,
    ul: (props) => <ul className="list-disc list-inside my-2" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside my-2" {...props} />,
    li: (props) => <li className="my-1" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-gray-300 pl-4 italic my-4"
        {...props}
      />
    ),
    ...components,
  };
}
