import { render, screen } from "@testing-library/react";
import Blog from "@/app/blog/page";
import { fetchBlogs } from "@/lib/blogs";
import type { Blog as BlogType } from "@/types/shared";

jest.mock("@/components/sortButton", () => {
  return () => <button>SortButton</button>;
});

jest.mock("@/lib/blogs", () => ({
  fetchBlogs: jest.fn(),
}));

const mockBlogs: BlogType[] = [
  {
    id: 1,
    title: "First Blog Post",
    description: "This is the first blog post",
    image: "image.jpg",
    created_at: "2021-01-01",
    category: ["web development"],
    slug: "first-blog-post",
    status: "published",
  },
  {
    id: 2,
    title: "Second Blog Post",
    description: "This is the second blog post",
    image: "image.jpg",
    created_at: "2021-02-01",
    category: ["web development"],
    slug: "second-blog-post",
    status: "published",
  },
  {
    id: 3,
    title: "Third Blog Post",
    description: "This is the third blog post",
    image: "image.jpg",
    created_at: "2021-03-01",
    category: ["web development"],
    slug: "third-blog-post",
    status: "published",
  },
];

describe("Blog", () => {
  beforeAll(() => {
    (fetchBlogs as jest.Mock).mockResolvedValue(mockBlogs);
  });

  it("should render the blog", async () => {
    render(<Blog />);

    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A few articles and guides I have put together in my Web Development journey."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("SortButton")).toBeInTheDocument();
    for (const blog of mockBlogs) {
      expect(await screen.findByText(blog.title)).toBeInTheDocument();
    }
  });
});
