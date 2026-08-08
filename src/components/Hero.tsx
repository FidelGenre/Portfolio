"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import boxIcon from "@/assets/boxicon.png";

export default function Hero() {
  const { t, lang, setLang } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems: { id: string; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <section
      id="home"
      className="animate-gradient-shift relative flex min-h-screen flex-col overflow-x-hidden bg-[linear-gradient(135deg,#1a1a1a_0%,#2d2d2d_50%,#404040_100%)]"
    >
      {/* Navbar */}
      <nav className="relative mx-[10vw]">
        <div className="mx-auto flex max-w-6xl items-center justify-between py-4 lg:py-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="cursor-pointer transition-opacity hover:opacity-80"
          >
            <img src={boxIcon.src} alt="Logo" className="h-10 w-10" />
          </a>

          <ul className="hidden list-none lg:flex">
            {navItems.map((item) => (
              <li key={item.id} className="flex w-28 justify-center py-2">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block border-none bg-transparent text-base font-medium text-[#9ca3af] transition-colors hover:text-white focus:text-white"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden rounded-full border border-[rgba(107,114,128,0.3)] bg-[rgba(107,114,128,0.12)] p-1 md:flex">
              {(["en", "es"] as const).map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                    lang === code
                      ? "bg-[rgba(107,114,128,0.3)] text-white"
                      : "text-[#9ca3af] hover:text-white"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="relative flex h-6 w-6 flex-none flex-col items-center justify-center gap-1 border-none bg-transparent p-1 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`h-0.5 w-5 bg-white transition-transform ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-5 bg-white transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-5 bg-white transition-transform ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="animate-fade-in fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-[linear-gradient(135deg,rgba(26,26,26,0.98),rgba(38,38,38,0.98))] backdrop-blur-[10px] lg:hidden">
          <div className="absolute top-6 left-[10vw] flex items-center gap-1 rounded-full border border-[rgba(156,163,175,0.3)] bg-[rgba(156,163,175,0.12)] p-[3px]">
            {(["en", "es"] as const).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                  lang === code
                    ? "bg-[linear-gradient(135deg,#6b7280_0%,#4b5563_100%)] text-white"
                    : "bg-transparent text-[#cbd0d8] hover:text-white"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            aria-label="Close menu"
            className="absolute top-6 right-[10vw] flex h-8 w-8 cursor-pointer items-center justify-center border-none bg-transparent text-xl text-white transition-all duration-300 hover:rotate-90 hover:text-[#d1d5db]"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>

          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer border-none bg-transparent p-2 text-2xl font-medium text-white transition-transform duration-200 hover:-translate-y-1"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      ) : null}

      {/* Hero Grid - estructura real de hero-section.tsx de Kent (imagen "giant") */}
      <header className="relative mx-[10vw] flex flex-1 items-center py-6 lg:py-12">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-4 gap-x-4 gap-y-8 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6">
          {/* Image - estilo "giant", con el mismo overlap negativo que usa Kent */}
          <div className="col-span-full flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:-mr-[5vw] lg:px-0">
            <style>{`
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-40px); }
              }
              .hero-image {
                animation: float 6s ease-in-out infinite;
              }
              @keyframes floatMini {
                0%, 100% { transform: translateY(0px) rotate(var(--mini-rot, 0deg)); }
                50% { transform: translateY(-16px) rotate(var(--mini-rot, 0deg)); }
              }
              .hero-mini-box {
                position: absolute;
                animation: floatMini 5s ease-in-out infinite;
                opacity: 0.55;
                filter: grayscale(0.2);
              }
            `}</style>
            <div className="relative flex items-center justify-center">
              <img
                src={boxIcon.src}
                alt="Hero"
                className="hero-image relative z-10 h-auto w-full max-h-[24vh] object-contain lg:max-h-[38vh]"
              />

              {/* Mini boxes esparcidas alrededor, mirando en distintas direcciones */}
              {[
                { top: "-6%", left: "-14%", size: "w-10 lg:w-14", rot: -25, delay: "0s", dur: "5.5s" },
                { top: "-10%", right: "-10%", size: "w-8 lg:w-12", rot: 35, delay: "0.6s", dur: "4.8s" },
                { top: "30%", left: "-20%", size: "w-7 lg:w-10", rot: 60, delay: "1.1s", dur: "6s" },
                { top: "38%", right: "-18%", size: "w-9 lg:w-12", rot: -50, delay: "0.3s", dur: "5.2s" },
                { bottom: "-4%", left: "2%", size: "w-8 lg:w-11", rot: 15, delay: "0.9s", dur: "5.8s" },
                { bottom: "-8%", right: "8%", size: "w-10 lg:w-14", rot: -70, delay: "1.4s", dur: "4.6s" },
                { top: "58%", left: "-6%", size: "w-6 lg:w-8", rot: 90, delay: "1.8s", dur: "5s" },
              ].map((box, i) => (
                <img
                  key={i}
                  src={boxIcon.src}
                  alt=""
                  aria-hidden="true"
                  className={`hero-mini-box pointer-events-none ${box.size} object-contain`}
                  style={{
                    top: box.top,
                    left: box.left,
                    right: box.right,
                    bottom: box.bottom,
                    ["--mini-rot" as string]: `${box.rot}deg`,
                    transform: `rotate(${box.rot}deg)`,
                    animationDelay: box.delay,
                    animationDuration: box.dur,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Text - alineado arriba, igual que el Hero real de Kent (sin centrado vertical) */}
          <div className="col-span-full lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:pt-6">
            <div className="flex flex-auto flex-col">
              <p className="mb-2 text-sm font-semibold text-[#9ca3af]">
                {t.hero.greeting}
              </p>
              <h2 className="text-gradient-gray mb-2 text-3xl font-bold leading-tight md:text-4xl">
                Fidel Genre
              </h2>
              <p className="mb-2 text-xl font-semibold text-[#9ca3af] md:text-2xl lg:mb-4">
                {t.hero.title}
              </p>
              <p className="mb-3 max-w-full text-lg text-[#d1d5db] lg:mb-4">
                {t.hero.description}
              </p>
              <p className="mb-6 min-h-14 max-w-full text-lg text-[#9ca3af] lg:mb-8">
                {t.hero.tagline}
              </p>

              <div className="flex flex-col items-start space-y-3 lg:space-y-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="w-44 rounded-full bg-white px-6 py-3 text-center font-semibold text-black transition hover:opacity-90"
                >
                  {t.hero.viewWork}
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-44 rounded-full border-2 border-[#4b5563] bg-transparent px-6 py-3 text-center font-semibold text-white transition hover:border-white"
                >
                  {t.hero.contactMe}
                </button>
              </div>

              <button
                onClick={() => scrollToSection("about")}
                className="group mt-10 flex w-fit cursor-pointer items-center text-left text-[#d1d5db] transition hover:text-white focus:outline-none lg:mt-28"
              >
                <span className="relative inline-flex h-14 w-14 flex-none items-center justify-center rounded-full">
                  <svg width="56" height="56" viewBox="0 0 56 56" className="absolute inset-0">
                    <circle
                      cx="28"
                      cy="28"
                      r="26"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      className="text-[#4b5563]"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="26"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeDasharray="163.363"
                      className="origin-center -rotate-90 text-white transition-[stroke-dashoffset] duration-500 ease-out [stroke-dashoffset:163.363] group-hover:[stroke-dashoffset:0] group-focus-visible:[stroke-dashoffset:0]"
                    />
                  </svg>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="relative"
                  >
                    <path
                      d="M12 5v14m0 0l-7-7m7 7l7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="ml-4 text-lg font-medium">
                  {t.hero.learnMore}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
