"use client";

import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import type { Project } from "@/data/types";

export function ProjectCard({ project }: { project: Project }) {
  const [imgFailed, setImgFailed] = useState(false);
  const hasLinks = project.githubUrl || project.liveUrl;

  return (
    <div className="group flex flex-col gap-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/5 bg-neutral-900">
        {imgFailed ? (
          <div className="flex h-full w-full items-center justify-center text-sm text-neutral-600">
            {project.title}
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            onError={() => setImgFailed(true)}
          />
        )}

        {hasLinks && (
          <div className="absolute right-2.5 top-2.5 flex gap-1.5 opacity-0 transition-opacity group-hover:opacity-100">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-neutral-200 backdrop-blur transition-colors hover:text-white"
              >
                <SiGithub className="h-3.5 w-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live site`}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-neutral-200 backdrop-blur transition-colors hover:text-white"
              >
                <LuExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-[15px] font-medium text-neutral-100">{project.title}</h3>
        <p className="mt-0.5 text-sm text-neutral-400">{project.description}</p>
      </div>
    </div>
  );
}
