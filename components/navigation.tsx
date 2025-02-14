"use client";

import * as React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

import { Blog } from "@/types/shared";
import { fetchBlogs } from "@/lib/blogs";

const blogData = await fetchBlogs();

const blogItems: Blog[] = [
  ...blogData.slice(-3),
  {
    id: 0,
    title: "All Blog Posts",
    slug: "",
    image: "",
    description: "View all blog posts",
    status: "published",
    category: [],
    created_at: "",
  },
];

export default function Navigation() {
  return (
    <div className="w-fit h-16 flex justify-center mx-auto mt-4 sticky top-4 left-0 right-0">
      <NavigationMenu className="z-[5] max-w-[1200px] w-full px-4">
        <NavigationMenuList className="flex justify-between w-full">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <FontAwesomeIcon icon={faHouse} />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="m750:max-w-[80px] m750:text-xs">
              Blog
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4">
                {blogItems.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={`/blog/${post.slug}` || "/blog"}
                  >
                    {post.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <Link href="/projects" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="m750:max-w-[80px] m750:text-xs">
                Projects
              </span>
            </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent block text-mtext select-none space-y-1 rounded-base border-2 border-transparent p-3 leading-none no-underline outline-none transition-colors hover:border-border dark:hover:border-darkBorder",
            className
          )}
          {...props}
        >
          <div className="text-base font-heading leading-none">{title}</div>
          <p className="text-muted-foreground font-base line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
