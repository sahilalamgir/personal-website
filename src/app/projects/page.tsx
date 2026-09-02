import { ProjectGrid } from "@/components/ProjectGrid";
import { ProjectsUnderConstruction } from "@/components/ProjectsUnderConstruction";
import { SHOW_PROJECTS } from "@/config";

export default function ProjectsPage() {
  if (!SHOW_PROJECTS) {
    return <ProjectsUnderConstruction />;
  }

  return <ProjectGrid />;
}
