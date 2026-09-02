import { Intro } from "./Intro";
import { EntryList } from "./EntryList";
import { experience } from "@/data/experience";
import { leadership } from "@/data/leadership";

export function AboutContent() {
  return (
    <div className="flex flex-col gap-9">
      <Intro />
      <EntryList heading="Experience" entries={experience} />
      <EntryList heading="Leadership" entries={leadership} />
    </div>
  );
}
