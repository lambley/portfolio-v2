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

const blogPosts = [
  {
    title: "Part 1: How to Build a Ruby on Rails and ReactTS App",
    href: "/blog/post-1",
    description: "Building the Rails app.",
  },
  {
    title: "Part 2: How to Build a Ruby on Rails and ReactTS App",
    href: "/blog/post-2",
    description: "Building the ReactTS app.",
  },
  {
    title: "Part 3: How to Build a Ruby on Rails and ReactTS App",
    href: "/blog/post-3",
    description: "Setting up the API.",
  },
  { title: "All posts", href: "/blog", description: "All blog posts." },
];

const portfolioItems = [
  {
    title: "Project 1",
    href: "/projects/project-1",
    description: "A project.",
  },
  {
    title: "Project 2",
    href: "/projects/project-2",
    description: "Another project.",
  },
  {
    title: "Project 3",
    href: "/projects/project-3",
    description: "Yet another project.",
  },
  {
    title: "All projects",
    href: "/projects",
    description: "All portfolio items.",
  },
];

export default function Navigation() {
  return (
    <div className="w-fit h-16 flex justify-center mx-auto lg:mt-4 lg:mb-0 lg:sticky lg:top-4 mb-4 bottom-0 absolute left-0 right-0">
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
                {blogPosts.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={post.href}
                  >
                    {post.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="m750:max-w-[80px] m750:text-xs">
              Projects
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-3 p-4">
                {portfolioItems.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
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
