import Link from "next/link";

async function fetchPosts() {
  const posts = [
    {
      id: 1,
      title: "Part 1: How to Build a Ruby on Rails and ReactTS App",
      slug: "post-1",
    },
    {
      id: 2,
      title: "Part 2: How to Build a Ruby on Rails and ReactTS App",
      slug: "post-2",
    },
    {
      id: 3,
      title: "Part 3: How to Build a Ruby on Rails and ReactTS App",
      slug: "post-3",
    },
    {
      id: 4,
      title: "Part 4: How to Build a Ruby on Rails and ReactTS App",
      slug: "post-4",
    },
    {
      id: 5,
      title: "How to setup reCAPTCHA v2 in a Rails and React app",
      slug: "post-5",
    },
    {
      id: 6,
      title: "How to get started with GitHub Actions",
      slug: "post-6",
    },
    {
      id: 7,
      title: "Design Patterns - a few I have used recently",
      slug: "post-7",
    },
    {
      id: 8,
      title: "Getting started with testing in Ruby on Rails",
      slug: "post-8",
    },
  ];
  return posts;
}

export default async function Blog() {
  const posts = await fetchPosts();

  return (
    <main className="w-full p-4 flex flex-col items-center justify-center bg-main text-text">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-4">
        A few articles and guides I've put together in my Web Development
        journey.
      </p>
      <ul className="mt-4 list-disc">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
