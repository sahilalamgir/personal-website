import { profile } from "@/data/profile";
import { InlineLogo } from "./InlineLogo";

export function Intro() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold text-neutral-50">{profile.name}</h1>
      <p className="text-[15px] leading-relaxed text-neutral-400">
        {"I study CS @"}
        <InlineLogo src="/logos/uwaterloo.png" alt="University of Waterloo" />
        {"University of Waterloo and BBA @"}
        <InlineLogo src="/logos/laurier.png" alt="Wilfrid Laurier University" />
        {
          "Wilfrid Laurier University. I build full-stack software at startup and enterprise scale, most recently as a Software Engineer at Faire."
        }
      </p>
    </div>
  );
}
