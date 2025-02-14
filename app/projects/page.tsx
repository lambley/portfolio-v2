import type { Project } from "@/types/shared";
import { fetchProjects } from "@/lib/projects";
import ImageCard from "@/components/ui/image-card";

export default async function Projects() {
  const projects: Project[] = await fetchProjects();

  const projectCard = (project: Project) => (
    <ImageCard
      caption={project.title}
      imageUrl={`/images/projects/${project.image}.png`}
      link={project.repo_url}
      created_at={project.created_at}
    ></ImageCard>
  );

  const renderProjects = () => (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {projects.map(projectCard)}
    </div>
  );

  return (
    <main className="w-full p-4 flex flex-col items-center justify-center bg-main text-text">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4">
        Projects I've worked on for learning purposes and for fun. Some go way
        back to my early days of learning web development - so don't judge too
        harshly!
      </p>
      <ul className="mt-4 list-disc">{renderProjects()}</ul>
    </main>
  );
}
