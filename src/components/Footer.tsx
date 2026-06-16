"use client";

import boxIcon from "@/assets/boxicon.png";
import { useLang } from "@/i18n/LanguageContext";

const links = [
  { label: "GitHub", href: "https://github.com/FidelGenre" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fidelgenre/" },
  { label: "Instagram", href: "https://www.instagram.com/fidelgenre" },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative border-t border-[rgba(156,163,175,0.2)] bg-[#141414] px-8 pb-8 pt-12">
      {/* línea de acento superior */}
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#6b7280,#9ca3af,transparent)]" />

      <div className="mx-auto max-w-[1400px]">
        <div className="mb-8 flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center transition-transform duration-300 hover:scale-105">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={boxIcon.src}
              alt="Fidel Genre logo"
              className="h-[42px] w-[42px] object-contain drop-shadow-[0_2px_6px_rgba(255,255,255,0.1)] md:w-[45px]"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative py-1 text-base font-medium text-[#9ca3af] transition-colors duration-300 hover:text-[#d1d5db] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[linear-gradient(90deg,#9ca3af,#6b7280)] after:transition-[width] after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="my-8 h-px bg-[linear-gradient(90deg,transparent,rgba(156,163,175,0.3),transparent)]" />

        <div className="text-center">
          <p className="m-0 text-sm text-[#6b7280]">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
