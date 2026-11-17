"use client";

import type { Project } from "@/data/types";
import { ProjectImage } from "./ProjectImage";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex cursor-pointer flex-col gap-3 text-left focus-visible:outline-none"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/5 bg-neutral-900 transition-colors duration-300 group-hover:border-white/15 group-focus-visible:border-white/30">
        <ProjectImage
          project={project}
          className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div>
        <h3 className="text-[15px] font-medium text-neutral-100">{project.title}</h3>
        <p className="mt-0.5 text-sm leading-snug text-neutral-500 transition-colors group-hover:text-neutral-400">
          {project.tagline}
        </p>
      </div>
    </button>
  );
}
