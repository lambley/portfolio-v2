import { Blog } from "@/types/shared";
import { BlogStatus, Categories } from "@/types/enums";

export async function fetchBlogs() {
  const posts: Blog[] = [
    {
      id: 1,
      title: "Part 1 of 4 - Creating Ruby on Rails and TypeScript React app",
      slug: "post-1",
      image: "rails-ts-blog-1",
      description:
        "How to create a Ruby on Rails API only backend for use with a JS frontend framework",
      status: BlogStatus.PUBLISHED,
      category: [
        Categories.RUBY_ON_RAILS,
        Categories.REACT,
        Categories.FRONTEND,
      ],
      created_at: "2023-08-7",
    },
    {
      id: 2,
      title: "Part 2 of 4 - Creating Ruby on Rails and TypeScript React app",
      slug: "post-2",
      image: "rails-ts-blog-2",
      description:
        "Creating a ReactTS app with a Post component for a Ruby on Rails API",
      status: BlogStatus.PUBLISHED,
      category: [
        Categories.RUBY_ON_RAILS,
        Categories.REACT,
        Categories.FRONTEND,
      ],
      created_at: "2023-08-14",
    },
    {
      id: 3,
      title: "Part 3 of 4 - Creating Ruby on Rails and TypeScript React app",
      slug: "post-3",
      image: "rails-ts-blog-3",
      description:
        "Updating your ReactTS frontend to handle Create and Edit functionality",
      status: BlogStatus.PUBLISHED,
      category: [
        Categories.RUBY_ON_RAILS,
        Categories.REACT,
        Categories.FRONTEND,
      ],
      created_at: "2023-08-21",
    },
    {
      id: 4,
      title: "Part 4 of 4 - Creating Ruby on Rails and TypeScript React app",
      slug: "post-4",
      image: "rails-ts-blog-4",
      description:
        "Adding the final CRUD action - Delete - to your ReactTS frontend and a note about authentication",
      status: BlogStatus.PUBLISHED,
      category: [
        Categories.RUBY_ON_RAILS,
        Categories.REACT,
        Categories.FRONTEND,
      ],
      created_at: "2023-08-28",
    },
    {
      id: 5,
      title: "How to setup reCAPTCHA v2 in a Rails and React app",
      slug: "post-5",
      image: "setup-recaptcha",
      description:
        "A quick guide to setting up reCAPTCHA v2 in a Rails and React app",
      status: BlogStatus.PUBLISHED,
      category: [
        Categories.RUBY_ON_RAILS,
        Categories.REACT,
        Categories.FRONTEND,
      ],
      created_at: "2023-09-18",
    },
    {
      id: 6,
      title: "How to get started with GitHub Actions",
      slug: "post-6",
      image: "github-actions",
      description: "A quick guide to getting started with GitHub Actions",
      status: BlogStatus.PUBLISHED,
      category: [Categories.GITHUB, Categories.CI_CD],
      created_at: "2023-09-11",
    },
    {
      id: 7,
      title: "Design Patterns - a few I have used recently",
      slug: "post-7",
      image: "design-patterns",
      description:
        "Design Patterns I have used recently: Repository, Presenter, and Service Objects",
      status: BlogStatus.PUBLISHED,
      category: [Categories.DESIGN_PATTERNS, Categories.FULLSTACK],
      created_at: "2023-11-06",
    },
    {
      id: 8,
      title: "Getting started with testing in Ruby on Rails",
      slug: "post-8",
      image: "getting-started-with-testing",
      description:
        "A quick guide to getting started with testing in Ruby on Rails",
      status: BlogStatus.PUBLISHED,
      category: [
        Categories.RUBY_ON_RAILS,
        Categories.TESTING,
        Categories.BACKEND,
      ],
      created_at: "2024-01-18",
    },
    {
      id: 9,
      title: "Markdown & NextJS - a quick guide",
      slug: "post-9",
      image: "markdown-nextjs",
      description: "A quick guide to using Markdown in a NextJS app",
      status: BlogStatus.PUBLISHED,
      category: [Categories.FRONTEND, Categories.NEXTJS, Categories.FULLSTACK],
      created_at: "2025-2-21",
    },
  ];
  return posts;
}
