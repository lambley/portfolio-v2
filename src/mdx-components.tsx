import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(
  components: MDXComponents = {}
): MDXComponents {
  return {
    //
    // Headings
    //
    h1: (props) => (
      <h1
        className="mt-8 font-semibold text-black text-5xl"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-4xl"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-3xl"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="text-2xl"
        {...props}
      />
    ),
    h5: (props) => (
      <h5
        className="text-xl"
        {...props}
      />
    ),
    h6: (props) => (
      <h6
        className="text-lg"
        {...props}
      />
    ),

    //
    // Lists / basic styles
    //
    p:  (props) => <p className="my-2" {...props} />,
    ul: (props) => <ul className="list-disc list-inside my-2" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside my-2" {...props} />,
    li: (props) => <li className="my-1" {...props} />,
    a:  (props) => <a className="text-blue-600 underline" {...props} />,

    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-gray-300 pl-4 italic my-4"
        {...props}
      />
    ),

    //
    // Code blocks
    //
    pre: (props) => (
      <pre
        className="
          bg-code text-white rounded-lg
          font-mono font-normal shadow-lg
          p-16
        "
        {...props}
      >
        {props.children}
      </pre>
    ),

    //
    // Inline code
    //
    code: (props) => (
      <code
        className="
          before:content-[''] after:content-['']
          text-white bg-code rounded-lg
          font-mono font-normal shadow-lg
          p-8
        "
        {...props}
      >
        {props.children}
      </code>
    ),

    ...components,
  };
}
