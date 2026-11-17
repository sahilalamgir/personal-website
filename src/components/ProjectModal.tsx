"use client";

import { useEffect, useRef } from "react";
import { SiGithub } from "react-icons/si";
import { LuExternalLink, LuX } from "react-icons/lu";
import type { Project } from "@/data/types";
import { ProjectImage } from "./ProjectImage";

const linkClass =
  "inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-sm text-neutral-200 transition-colors hover:border-white/25 hover:text-white";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label={project.title}
      onClose={onClose}
      // The inner wrapper fills the dialog, so a click whose target is the dialog itself hit the backdrop.
      onClick={(e) => {
        if (e.target === dialogRef.current) dialogRef.current?.close();
      }}
      className="project-modal m-auto max-h-[85vh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#17181b] p-0 text-neutral-200 shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div>
        <div className="relative">
          <ProjectImage project={project} className="aspect-[4/3] w-full" />
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="absolute right-3 top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-neutral-200 backdrop-blur transition-colors hover:text-white"
          >
            <LuX className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-col gap-5 p-6">
          <div>
            <h2 className="text-xl font-medium text-neutral-50">{project.title}</h2>
            {project.period && <p className="mt-0.5 text-xs text-neutral-500">{project.period}</p>}
          </div>

          <p className="text-[15px] leading-relaxed text-neutral-300">{project.overview}</p>

          {project.highlights && (
            <ul className="flex flex-col gap-2 text-sm leading-relaxed text-neutral-400">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <ul className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-neutral-400"
              >
                {t}
              </li>
            ))}
          </ul>

          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-2">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <SiGithub className="h-3.5 w-3.5" />
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  <LuExternalLink className="h-3.5 w-3.5" />
                  Visit
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
