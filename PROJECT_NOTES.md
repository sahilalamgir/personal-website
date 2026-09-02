# Project notes for future Claude Code sessions

This is Sahil Alamgir's personal portfolio site — a minimalistic, dark-themed
site with a handful of real routes (not a single-page anchor-scroll site).
It replaced an older version of this same site (same Vercel project / GitHub
repo `sahilalamgir/personal-website`).

## Routes

- `/` (`src/app/page.tsx`) — About: name/intro, experience, leadership,
  contact icons.
- `/projects` (`src/app/projects/page.tsx`) — either the real project grid or
  an "under construction" placeholder, depending on `SHOW_PROJECTS` (see
  below).

`Navbar` (rendered once, in `src/app/layout.tsx`, so it's shared across
routes) links to these with real `next/link` hrefs (`/`, `/projects`) — not
`#about`/`#projects` anchors. Do not switch this back to anchor-based
single-page navigation; the user explicitly asked to move off that pattern.

## Layout shell

`src/app/layout.tsx` wraps every page in one shared centered column:

```tsx
<div className="mx-auto flex w-full max-w-md flex-1 flex-col px-6 py-10 sm:px-10">
  <Navbar />
  <main className="flex-1 pt-14">{children}</main>
</div>
```

This is deliberate, two constraints at once: (1) navbar and every page's
content share the exact same left edge (same container, same padding) — the
navbar sits above the content, left-aligned to it, not pinned to the
viewport's edge independently; (2) the container's max-width is capped to
match the actual content width (`max-w-md`, same as the About paragraph) so
`mx-auto` centers the *visible* block on the page rather than centering a
wider empty box that the (narrower) content then sits left-aligned inside —
that mismatch was the bug in an earlier version of this file (container
wider than content → content visually left-of-center). Any new page should
render inside this shell (just add a route under `src/app/`) rather than
reintroducing its own full-width/independently-centered wrapper.

**Forward-looking gotcha:** `ProjectGrid` (a 2-column card grid, meant for
when `SHOW_PROJECTS` flips on) will look cramped inside a `max-w-md`
container. When that's turned on, widen the shell's `max-w-md` — but do it
per-route (e.g. via a route-level layout for `/projects`, or a prop), not by
widening the shared root layout, or the About page's centering bug above
comes right back.

Design language: dark grey background (not pure black), one serif font
(Source Serif 4) for everything, minimalistic spacing, `react-icons` for all
icons (Simple Icons for brand marks, Lucide for generic icons, Font Awesome 6
just for LinkedIn since Simple Icons dropped that mark over a trademark
dispute).

## Content data

Lives in `src/data/*.ts` (`profile`, `experience`, `leadership`, `projects`)
as small typed arrays — not hardcoded in components. Edit these files to
change content.

Images referenced from data files live in `public/logos/` (company/school
logos, square) and `public/projects/` (project screenshots). Missing files
degrade gracefully (initials / title-text fallback, or the inline logo just
disappears) rather than showing a broken image icon — see the `onError`
handling in `EntryItem.tsx`, `InlineLogo.tsx`, and `ProjectCard.tsx`.

Each experience/leadership logo tile has a colored glow (`glowColor` in the
data file, applied as a `box-shadow` in `EntryItem.tsx`). Optional
`glowAlpha` (2-digit hex, default `"66"`) tunes intensity per entry — Faire's
is dimmed to `"38"` because a near-white glow reads brighter than colored
ones at the same alpha.

## The `SHOW_PROJECTS` toggle (`src/config.ts`)

```ts
export const SHOW_PROJECTS = false;
```

Only affects `/projects`: `false` renders `ProjectsUnderConstruction`, `true`
renders the real `ProjectGrid`/`ProjectCard` grid (fully built, just gated).
Flip it once `src/data/projects.ts` has real content/images.

## Known pending items (things the user still needs to do, not bugs)

- `src/data/projects.ts` has placeholder descriptions and image paths under
  `public/projects/` that don't exist yet — only matters once `SHOW_PROJECTS`
  is flipped on.
- Contact links in `src/data/profile.ts` (GitHub/X/LinkedIn/email) should be
  double-checked against the user's real handles.

## Repo / deploy notes

- `resources/` (local reference screenshots + a copy of the resume PDF used
  as source material while building this) is gitignored — it's planning
  material, not part of the deployed site. `public/resume.pdf` is the actual
  file the live site serves and *is* tracked.
- This repo's `origin` is `github.com/sahilalamgir/personal-website`, already
  connected to a Vercel project (pushing to `main` redeploys the live site).
