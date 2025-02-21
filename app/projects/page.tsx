"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import type { Project } from "@/types/shared";
import { fetchProjects } from "@/lib/projects";
import SortButton from "@/components/sortButton";
import { faArrowUp91, faArrowUp19 } from "@fortawesome/free-solid-svg-icons";
import SkeletonCard from "@/components/skeletonCard";

const DynamicImageCard = dynamic(() => import("@/components/ui/image-card"), {
  loading: () => <SkeletonCard />,
});

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isSortedByNewest, setIsSortedByNewest] = useState(true);

  useEffect(() => {
    async function getProjects() {
      const fetchedProjects = await fetchProjects();
      setProjects(fetchedProjects);
    }
    getProjects();
  }, []);

  const handleToggle = (checked: boolean) => {
    setIsSortedByNewest(checked);
  };

  const sortedProjects = isSortedByNewest
    ? [...projects].sort((a, b) => b.id - a.id)
    : projects;

  const projectCard = (project: Project) => (
    <DynamicImageCard
      caption={project.title}
      imageUrl={`/images/projects/${project.image}.png`}
      link={project.repo_url}
      created_at={project.created_at}
      key={project.id}
    ></DynamicImageCard>
  );

  const renderProjects = () => (
    <>
      <div className="flex items-center space-x-2">
        <SortButton
          onChange={handleToggle}
          sortState={isSortedByNewest}
          activeIcon={faArrowUp19}
          inactiveIcon={faArrowUp91}
        />
      </div>
      <ul className="mt-4 list-disc">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {sortedProjects.map(projectCard)}
        </div>
      </ul>
    </>
  );

  return (
    <main className="w-full p-4 flex flex-col items-center justify-center bg-main text-text">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="my-4">
        Projects I have worked on for learning purposes and for fun. Some go way
        back to my early days of learning web development - so try not to judge
        too harshly!
      </p>
      {renderProjects()}
    </main>
  );
}
