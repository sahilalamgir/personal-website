import { EntryItem } from "./EntryItem";
import type { RoleEntry } from "@/data/types";

export function EntryList({ heading, entries }: { heading: string; entries: RoleEntry[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xs font-medium uppercase tracking-wider text-neutral-500">{heading}</h2>
      <div className="flex flex-col gap-3.5">
        {entries.map((entry) => (
          <EntryItem
            key={entry.title}
            title={entry.title}
            subtitle={entry.subtitle}
            period={entry.period}
            logoSrc={entry.logoSrc}
            glowColor={entry.glowColor}
            glowAlpha={entry.glowAlpha}
            logoBg={entry.logoBg}
          />
        ))}
      </div>
    </div>
  );
}
