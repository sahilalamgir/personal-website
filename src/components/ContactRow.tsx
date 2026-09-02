import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { contacts } from "@/data/profile";

const iconMap = {
  github: SiGithub,
  x: SiX,
  linkedin: FaLinkedinIn,
  mail: LuMail,
};

export function ContactRow() {
  return (
    <div className="flex items-center gap-5">
      {contacts.map((contact) => {
        const Icon = iconMap[contact.icon];
        return (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.icon === "mail" ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={contact.label}
            className="text-neutral-500 transition-colors hover:text-neutral-100"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        );
      })}
    </div>
  );
}
