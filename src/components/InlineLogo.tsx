"use client";

import { useState } from "react";

export function InlineLogo({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="mx-1 inline-block h-[1.05em] w-[1.05em] -translate-y-[1px] rounded-full align-middle object-cover"
    />
  );
}
