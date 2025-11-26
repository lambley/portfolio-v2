import { Calendar, ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useMemo, useState } from "react";

interface BlogPost {
  id?: number;
  title: string;
  date: string;
  url: string;
  image?: string;
  description: string;
  status?: string;
  category?: string[];
  slug: string;
}

export default function BlogPage() {
  const [sortLatest, setSortLatest] = useState(true);

  const modules = import.meta.glob("../content/posts/*.{md,mdx}", {
    eager: true,
  }) as Record<string, any>;

  const discoveredPosts: BlogPost[] = useMemo(() => {
    return Object.entries(modules).map(([path, mod], idx) => {
      const filename = path.split("/").pop()!;
      const slug = filename.replace(/\.[^.]+$/, "");
      return {
        id: mod.id ?? idx + 1,
        title: mod.title || slug,
        slug,
        url: `/blog/${slug}`,
        date: mod.date || "",
        description: mod.description || "",
      };
    });
  }, [modules]);

  const sortedPosts = [...discoveredPosts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortLatest ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="mb-4">Blog</h1>
        <p className="text-gray-600 mb-6">
          A few articles and guides I have put together in my Web Development
          journey.
        </p>
        <Button
          variant={sortLatest ? "default" : "outline"}
          onClick={() => setSortLatest(!sortLatest)}
          className={`gap-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all ${
            sortLatest
              ? "bg-pink-400 hover:bg-pink-500"
              : "bg-white hover:bg-gray-50"
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          {sortLatest ? "Latest" : "Oldest"}
        </Button>
      </div>

      <div className="space-y-4">
        {sortedPosts.map((post, index) => {
          const postHref = post.url ?? `/blog/${post.slug}`;
          return (
            <Card
              key={post.id}
              className={`border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all group ${
                index % 3 === 0
                  ? "bg-yellow-100"
                  : index % 3 === 1
                  ? "bg-pink-100"
                  : "bg-blue-100"
              }`}
            >
              <CardContent className="p-6">
                <a href={postHref} className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 border-4 border-black rounded-lg flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                      index % 3 === 0
                        ? "bg-yellow-400"
                        : index % 3 === 1
                        ? "bg-pink-400"
                        : "bg-blue-400"
                    }`}
                  >
                    <Calendar className="w-6 h-6 text-black" />
                  </div>

                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg mb-1">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.date}</p>
                  </div>

                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-black" />
                  </div>
                </a>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
