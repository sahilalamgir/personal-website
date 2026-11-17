"use client";

import { useState } from "react";
import type { Project } from "@/data/types";

/** Project screenshot; falls back to a tinted placeholder when the file is missing. */
export function ProjectImage({ project, className }: { project: Project; className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center ${className ?? ""}`}
        style={{
          background: `radial-gradient(120% 120% at 20% 0%, ${project.accent}2e, transparent 60%), #17181b`,
        }}
      >
        <span
          className="text-5xl font-light select-none"
          style={{ color: `${project.accent}80` }}
          aria-hidden
        >
          {project.title.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={project.image}
      alt={project.title}
      className={`object-cover ${className ?? ""}`}
      onError={() => setFailed(true)}
    />
  );
}
