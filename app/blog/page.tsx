import Link from "next/link";
import { fetchBlogs } from "@/lib/blogs";

export default async function Blog() {
  const posts = await fetchBlogs();

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
