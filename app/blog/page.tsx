"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import type { Blog } from "@/types/shared";
import { fetchBlogs } from "@/lib/blogs";
import SortButton from "@/components/sortButton";
import { faArrowUp91, faArrowUp19 } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [isSortedByNewest, setIsSortedByNewest] = useState(true);

  useEffect(() => {
    async function getBlogs() {
      const fetchedBlogs = await fetchBlogs();
      const publishedBlogs = fetchedBlogs.filter(
        (blog) => blog.status === "published"
      );
      setPosts(publishedBlogs);
    }
    getBlogs();
  }, []);

  const handleToggle = (checked: boolean) => {
    setIsSortedByNewest(checked);
  };

  const sortedPosts = isSortedByNewest
    ? [...posts].sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      )
    : posts;

  return (
    <main className="w-full p-4 flex flex-col items-center justify-center bg-main text-text">
      <h1 className="text-4xl font-bold">Blog</h1>
      <p className="mt-4">
        A few articles and guides I have put together in my Web Development
        journey.
      </p>
      <div className="flex items-center space-x-2">
        <SortButton
          onChange={handleToggle}
          sortState={isSortedByNewest}
          activeIcon={faArrowUp19}
          inactiveIcon={faArrowUp91}
        />
      </div>
      <ul className="mt-4 list-disc">
        {sortedPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
