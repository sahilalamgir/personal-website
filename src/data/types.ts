export interface RoleEntry {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  logoSrc: string;
  glowColor: string;
  /** 2-digit hex alpha for the glow's box-shadow color, e.g. "66". Defaults to "66" in EntryItem. */
  glowAlpha?: string;
  /** Solid background behind a transparent logo, e.g. "#FFFFFF". Logo is inset on it. */
  logoBg?: string;
}

export interface Project {
  slug: string;
  title: string;
  /** One-liner shown under the tile. */
  tagline: string;
  /** Shown in the modal. */
  overview: string;
  highlights?: string[];
  tech: string[];
  /** e.g. "Sept. 2026"; omitted when unknown. */
  period?: string;
  /** Path under public/ (e.g. /logos/x.png). Missing files fall back to a tinted placeholder. */
  image: string;
  /** Hex color tinting the placeholder when there is no image. */
  accent: string;
  githubUrl?: string;
  liveUrl?: string;
}
