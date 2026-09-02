export interface RoleEntry {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  logoSrc: string;
  glowColor: string;
  /** 2-digit hex alpha for the glow's box-shadow color, e.g. "66". Defaults to "66" in EntryItem. */
  glowAlpha?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}
