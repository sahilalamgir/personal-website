"use client";

import { useState } from "react";

type EntryItemProps = {
  title: string;
  subtitle: string;
  period?: string;
  logoSrc: string;
  glowColor: string;
  glowAlpha?: string;
  logoBg?: string;
};

export function EntryItem({ title, subtitle, period, logoSrc, glowColor, glowAlpha, logoBg }: EntryItemProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-neutral-800"
        style={{
          boxShadow: `0 0 16px 2px ${glowColor}${glowAlpha ?? "66"}`,
          ...(logoBg && { backgroundColor: logoBg }),
        }}
      >
        {imgFailed ? (
          <span className="text-sm font-medium text-neutral-300">{title.charAt(0)}</span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logoSrc}
            alt={`${title} logo`}
            className={logoBg ? "h-full w-full object-contain p-1.5" : "h-full w-full object-cover"}
            onError={() => setImgFailed(true)}
          />
        )}
      </div>
      <div className="flex min-w-0 flex-1 items-baseline justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[15px] font-medium text-neutral-100">{title}</p>
          <p className="truncate text-sm text-neutral-400">{subtitle}</p>
        </div>
        {period && <span className="shrink-0 text-xs text-neutral-500">{period}</span>}
      </div>
    </div>
  );
}
