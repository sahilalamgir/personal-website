"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects } from "@/data/projects";
import type { Project } from "@/data/types";

export function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-x-5 gap-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={() => setSelected(project)} />
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
