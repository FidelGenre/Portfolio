"use client";

import { useLang } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLang();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="animate-gradient-shift relative flex min-h-[95svh] items-center justify-center overflow-x-hidden bg-[linear-gradient(135deg,#1a1a1a_0%,#2d2d2d_50%,#404040_100%)] px-8 pb-16 pt-0 text-center max-[380px]:px-4 max-[380px]:pb-12"
    >
      <div className="relative z-[1] mx-auto min-w-0 max-w-[900px]">
        <p className="m-0 mb-3 text-[clamp(15px,1.4vw,18px)] font-semibold tracking-[0.08em] text-white/70">
          {t.hero.greeting}
        </p>
        <h1 className="text-gradient-light m-0 text-[clamp(42px,5vw,96px)] font-black leading-[1.05]">
          Fidel Genre
        </h1>
        <h2 className="mt-1 text-[clamp(26px,3.2vw,40px)] font-extrabold text-white">
          {t.hero.title}
        </h2>

        <p className="mx-auto mb-[10px] mt-2 max-w-[880px] text-[clamp(16px,2.1vw,22px)] leading-[1.7] text-white/75 [overflow-wrap:anywhere]">
          {t.hero.description}
        </p>
        <p className="mx-auto mb-8 max-w-[880px] text-[clamp(16px,2.1vw,22px)] leading-[1.7] text-white/75 [overflow-wrap:anywhere]">
          {t.hero.tagline}
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer rounded-xl border-2 border-transparent bg-[linear-gradient(135deg,#6b7280_0%,#8b92a0_100%)] px-10 py-4 text-base font-semibold text-white shadow-[0_4px_15px_rgba(107,114,128,0.5)] transition-[transform,box-shadow] duration-300 hover:-translate-y-[3px] hover:shadow-[0_6px_25px_rgba(107,114,128,0.7)] max-[380px]:px-6 max-[380px]:py-[0.9rem]"
          >
            {t.hero.viewWork}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer rounded-xl border-2 border-[#8b92a0] bg-transparent px-10 py-4 text-base font-semibold text-white shadow-[0_0_15px_rgba(139,146,160,0.3)] transition-[transform,box-shadow,background] duration-300 hover:-translate-y-[3px] hover:border-[#b8bcc4] hover:bg-[rgba(139,146,160,0.15)] hover:shadow-[0_0_25px_rgba(139,146,160,0.5)] max-[380px]:px-6 max-[380px]:py-[0.9rem]"
          >
            {t.hero.contactMe}
          </button>
        </div>

        <div
          onClick={() => scrollToSection("about")}
          title={t.hero.goToAbout}
          className="animate-bounce-arrow mx-auto flex cursor-pointer select-none justify-center text-[#b8bcc4] [filter:drop-shadow(0_0_10px_rgba(184,188,196,0.6))]"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14m0 0l-7-7m7 7l7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
