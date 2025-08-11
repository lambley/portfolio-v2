export async function fetchProjects() {
  const projects = [
    {
      id: 1,
      title: "DisneyLife",
      slug: "project-1",
      description:
        "Interview challenge to create a page from a template for a mock DisneyLife page.",
      url: "",
      repo_url: "https://github.com/lambley/front-end-test",
      image: "disneylife",
      category: ["frontend", "react"],
      created_at: "2022-10-30",
    },
    {
      id: 2,
      title: "PawFinders",
      slug: "project-2",
      description:
        "Main bootcamp team project built over 10 days. App helps dog owners find dog-friendly activities.",
      url: "",
      repo_url: "https://github.com/lambley/pawfinder-fix",
      image: "pawfinder",
      category: ["Ruby on Rails", "Fullstack"],
      created_at: "2022-09-22",
    },
    {
      id: 3,
      title: "PokeSearch",
      slug: "project-3",
      description:
        "Small project made to showcase PostgresSQL search and AJAX dynamic search.",
      url: "",
      repo_url: "https://github.com/lambley/rails-search",
      image: "pokesearch",
      category: ["Ruby on Rails", "Fullstack"],
      created_at: "2022-08-30",
    },
    {
      id: 4,
      title: "Portfolio V1",
      slug: "project-4",
      description: "My portfolio website - version 1",
      url: "https://portfolio-three-tau-95.vercel.app/",
      repo_url: "https://github.com/lambley/portfolio",
      image: "portfolio",
      category: ["Nextjs", "React", "Ruby on Rails", "Prisma ORM", "Fullstack"],
      created_at: "2023-08-16",
    },
    {
      id: 5,
      title: "WiseWords - Api",
      slug: "project-5",
      description:
        "Restful api created with ruby on rails. Made solo during a 10 day training course.",
      url: "",
      repo_url: "https://github.com/lambley/journal-api",
      image: "wisewords-api",
      category: ["Ruby on Rails", "Backend"],
      created_at: "2023-07-26",
    },
    {
      id: 6,
      title: "WiseWords - Client",
      slug: "project-6",
      description:
        "Client app for WiseWords. Restful api created with ruby on rails. Made solo during a 10 day training course.",
      url: "",
      repo_url: "https://github.com/lambley/journal-frontend",
      image: "wisewords-client",
      category: ["React", "Frontend"],
      created_at: "2023-07-26",
    },
    {
      id: 7,
      title: "Hackathon Case Study App",
      slug: "project-7",
      description:
        "NestJS backend for storing case studies documents in AWS S3 bucket.",
      url: "",
      repo_url: "https://github.com/Solirius/case_study_backend",
      image: "hackathon-2024",
      category: ["backend", "nestjs", "aws"],
      created_at: "2024-02-02",
    },
    {
      id: 8,
      title: "TensorFlow Chat App",
      slug: "project-8",
      description:
        "Chat app using tensorflow.js QnA model to answer questions based on a prompt.",
      url: "",
      repo_url: "https://github.com/lambley/tf_chat_app",
      image: "tf-chat-app",
      category: ["frontend", "react", "tensorflow.js"],
      created_at: "2024-03-11",
    },
    {
      id: 9,
      title: "Grad Training - Exam App",
      slug: "project-12",
      description:
        "Exam app for new starters built in fullstack Rails 8. Features Eng and French language support and top score tracking.",
      url: "",
      repo_url: "https://github.com/lambley/exam-grad-training-app",
      image: "grad-training",
      category: ["Ruby on Rails", "Fullstack"],
      created_at: "2024-06-28",
    },
    {
      id: 10,
      title: "Rails 8 Subscription Manager",
      slug: "project-10",
      description:
        "Playground project to learn about Rails 8, refresh my fullstack Rails skills and use frontend libraries. App aims to help you track your subscriptions.",
      url: "",
      repo_url: "https://github.com/lambley/subscription-manager-r8",
      image: "rails-8-subscription-manager",
      category: ["Ruby on Rails", "Fullstack"],
      created_at: "2025-01-15",
    },
    {
      id: 11,
      title: "Wedding RSVP App",
      slug: "project-11",
      description:
        "Wedding RSVP app built for my wedding. Allows guests to RSVP and view wedding details.",
      url: "https://www.aga-and-aaron.com/",
      repo_url: "https://github.com/lambley/wedding-rsvp-client",
      image: "wedding-client",
      category: ["NextJS", "Fullstack"],
      created_at: "2024-11-21",
    },
    {
      id: 12,
      title: "Portfolio V2",
      slug: "project-9",
      description: "My portfolio website - Version 2. Opted for NextJS only and Markdown for blog posts. A lot easier to maintain!",
      url: "https://www.agslambley.dev/",
      repo_url: "https://github.com/lambley/portfolio-v2",
      image: "portfolio-v2",
      category: ["Nextjs", "Markdown", "Fullstack"],
      created_at: "2025-02-14",
    },
    {
      id: 13,
      title: "Sales and Marketing site with TinaCMS",
      slug: "project-13",
      description: "Proof of concept site built using NextJS and TinaCMS for non-developer content management.",
      url: "https://solirius-spa-poc.vercel.app/",
      repo_url: "https://github.com/lambley/solirius-spa-poc",
      image: "solirius-spa-poc",
      category: ["Nextjs", "TinaCMS", "Fullstack"],
      created_at: "2025-05-22",
    }
  ];

  const projectsWithLocaleDateStringFormatting = projects.map((project) => {
    return {
      ...project,
      created_at: new Date(project.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
  });

  return projectsWithLocaleDateStringFormatting;
}
