import { AboutContent } from "@/components/AboutContent";
import { ContactRow } from "@/components/ContactRow";

export default function Home() {
  return (
    <div className="flex flex-col gap-9">
      <AboutContent />
      <ContactRow />
    </div>
  );
}
