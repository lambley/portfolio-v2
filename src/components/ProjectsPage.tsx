import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sales and Marketing site with TinaCMS",
    description:
      "Proof of concept site built using NextJS and TinaCMS for non-developer content management.",
    date: "May 22, 2025",
    tags: ["NextJs", "tinacms", "fullstack"],
    repoUrl: "https://github.com/lambley/solirius-spa-poc",
    liveUrl: "https://solirius-spa-poc.vercel.app/",
    image: "/images/projects/sales-and-marketing-tinacms.png",
  },
  {
    id: 2,
    title: "Portfolio V2",
    description:
      "My portfolio website - Version 2. Opted for NextJS only and Markdown for blog posts. A lot easier to maintain!",
    date: "February 14, 2025",
    tags: ["nextjs", "markdown", "fullstack"],
    repoUrl: "https://github.com/lambley/portfolio-v2",
    liveUrl: "https://www.agslambley.dev/",
    image: "/images/projects/portfolio-v2.png",
  },
  {
    id: 3,
    title: "Wedding RSVP App",
    description:
      "Wedding RSVP app built for my wedding. Allows guests to RSVP and view wedding details.",
    date: "November 21, 2024",
    tags: ["nodejs", "fullstack"],
    repoUrl: "https://github.com/lambley/wedding-rsvp-client",
    liveUrl: "https://www.aga-and-aaron.com/",
    image: "/images/projects/wedding-rsvp-app.png",
  },
  {
    id: 4,
    title: "Rails 8 Subscription Manager",
    description:
      "Playground project to learn about Rails 8, refresh my fullstack Rails skills and use frontend libraries. App aims to help you track your subscriptions.",
    date: "January 15, 2025",
    tags: ["ruby on rails", "fullstack"],
    repoUrl: "https://github.com/lambley/subscription-manager-r8",
    image: "/images/projects/rails-8-subscription-manager.png",
  },
  {
    id: 5,
    title: "Grad Training - Exam App",
    description:
      "Exam app for new starters built in fullstack Rails 8. Features Erb and French language support and top scorer list.",
    date: "March 11, 2024",
    tags: ["ruby on rails", "fullstack"],
    repoUrl: "https://github.com/lambley/exam-grad-training-app",
    image: "/images/projects/grad-training-exam-app.png",
  },
  {
    id: 6,
    title: "TensorFlow Chat App",
    description:
      "Chat app using tensorflow.js QnA model to answer questions based on a prompt.",
    date: "March 11, 2024",
    tags: ["frontend", "react", "tensorflow.js"],
    repoUrl: "https://github.com/lambley/tf_chat_app",
    image: "/images/projects/tensorflow-chat-app.png",
  },
  {
    id: 7,
    title: "Hackathon Case Study App",
    description:
      "NestJS backend for storing case studies documents in AWS S3 bucket.",
    date: "February 2, 2024",
    tags: ["backend", "nestjs"],
    repoUrl: "https://github.com/Solirius/case_study_backend",
    image: "/images/projects/hackathon-case-study-app.png",
  },
  {
    id: 8,
    title: "WiseWords - Client",
    description:
      "Client app for WiseWords. Restful api created with ruby on rails. Made solo during a 10 day training course.",
    date: "July 26, 2023",
    tags: ["frontend", "react"],
    repoUrl: "https://github.com/lambley/journal-frontend",
    image: "/images/projects/wisewords-client.png",
  },
  {
    id: 9,
    title: "WiseWords - API",
    description:
      "Restful api created with ruby on rails. Made solo during a 10 day training course.",
    date: "July 26, 2023",
    tags: ["backend", "ruby on rails"],
    repoUrl: "https://github.com/lambley/journal-api",
    image: "/images/projects/wisewords-api.png",
  },
  {
    id: 10,
    title: "Personal Portfolio V1",
    description:
      "My portfolio website - Version 1. Built with React and hosted on Vercel.",
    date: "January 5, 2023",
    tags: ["react", "frontend"],
    liveUrl: "https://portfolio-three-tau-95.vercel.app/",
    repoUrl: "https://github.com/lambley/portfolio",
    image: "/images/projects/portfolio-v1.png",
  },
  {
    id: 11,
    title: "PokeSearch",
    description:
      "Small project made to showcase PostgresSQL search and AJAX dynamic search.",
    date: "August 30, 2022",
    tags: ["ruby on rails", "postgresql", "ajax"],
    repoUrl: "https://github.com/lambley/rails-search",
    image: "/images/projects/pokesearch.png",
  },
  {
    id: 12,
    title: "PawFinders",
    description:
      "Main bootcamp team project built over 10 days. App helps dog owners find dog-friendly activities.",
    date: "September 22, 2022",
    tags: ["ruby on rails", "fullstack"],
    repoUrl: "https://github.com/lambley/pawfinder-fix",
    image: "/images/projects/pawfinders.png",
  },
  {
    id: 13,
    title: "DisneyLife",
    description:
      "Interview challenge to create a page from a template for a mock DisneyLife page.",
    date: "October 30, 2022",
    tags: ["react", "frontend"],
    repoUrl: "https://github.com/lambley/front-end-test",
    image: "/images/projects/disneylife.png",
  },
  {
    id: 14,
    title: "Recongnize Landing Page",
    description:
      "Landing page for an AI hackathon project called Recongnize, created with Figma Make and modified.",
    date: "24 November, 2025",
    tags: ["figma", "frontend"],
    repoUrl: "https://github.com/lambley/recognize-landing-page",
    liveUrl: "https://recognize-landing-page-eight.vercel.app/",
    image: "/images/projects/recongnize-landing-page.png",
  },
];

export default function ProjectsPage() {
  const [sortLatest, setSortLatest] = useState(true);

  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortLatest ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="mb-4">Projects</h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          Projects I have worked on for learning purposes and for fun. Some go
          way back to my early days of learning web development and are no
          longer live. Live URLs are present where available.
        </p>
        <Button
          variant={sortLatest ? "default" : "outline"}
          onClick={() => setSortLatest(!sortLatest)}
          className={`gap-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all ${
            sortLatest
              ? "bg-purple-400 hover:bg-purple-500"
              : "bg-white hover:bg-gray-50"
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          {sortLatest ? "Latest" : "Oldest"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all bg-white overflow-hidden"
          >
            <div className="bg-gradient-to-br from-blue-200 to-purple-200 h-48 flex items-center justify-center border-b-4 border-black overflow-hidden">
              <div className="h-full w-full flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            <CardHeader>
              <h3 className="text-lg">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.date}</p>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className={`text-xs border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                      index % 4 === 0
                        ? "bg-yellow-200 hover:bg-yellow-200"
                        : index % 4 === 1
                        ? "bg-pink-200 hover:bg-pink-200"
                        : index % 4 === 2
                        ? "bg-green-200 hover:bg-green-200"
                        : "bg-blue-200 hover:bg-blue-200"
                    }`}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="gap-2">
              {project.repoUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 gap-2 border-2 border-black bg-white hover:bg-gray-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                  asChild
                >
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    Repo
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  size="sm"
                  className="flex-1 gap-2 bg-green-400 hover:bg-green-500 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
