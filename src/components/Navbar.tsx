"use client";

import { useState } from "react";
import boxIcon from "@/assets/boxicon.png";
import { useLang } from "@/i18n/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [spin, setSpin] = useState(0);
  const { lang, toggleLang, t } = useLang();

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const handleLangToggle = () => {
    setSpin((s) => s + 360); // gira una vuelta en cada click
    toggleLang();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems: { id: string; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <>
      <nav className="relative z-[999] border-b border-[rgba(156,163,175,0.2)] bg-[rgba(49,49,49,0.92)] shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-[20px]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-[1.2rem]">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={boxIcon.src}
              alt="Logo icon"
              className="h-auto w-[42px] transition-transform duration-200 hover:-translate-y-[3px] md:w-[70px]"
            />
          </a>

          <ul className="hidden list-none gap-12 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="cursor-pointer border-none bg-transparent py-2 text-[1.125rem] font-medium text-[#e5e7eb] transition-[color,transform] duration-300 hover:-translate-y-[3px] hover:text-[#d1d5db]"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleLangToggle}
              aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
              title={lang === "en" ? "Español" : "English"}
              className="flex cursor-pointer items-center justify-center border-none bg-transparent p-1 text-[#cbd0d8] transition-colors duration-200 hover:text-white"
            >
              <span
                className="flex items-center justify-center"
                style={{
                  transform: `rotate(${spin}deg)`,
                  transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
                  <g
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* globo */}
                    <circle cx="11" cy="12" r="4.3" />
                    <path d="M6.7 12h8.6" />
                    <path d="M11 7.7c1.7 1.2 1.7 7.2 0 8.6" />
                    <path d="M11 7.7c-1.7 1.2-1.7 7.2 0 8.6" />
                    {/* flechas de ciclo */}
                    <path d="M16.2 7a6.3 6.3 0 0 1 1.9 4.5" />
                    <path d="m15.1 7.3 1.2-.4.5 1.2" />
                    <path d="M5.8 17a6.3 6.3 0 0 1-1.9-4.5" />
                    <path d="m6.9 16.7-1.2.4-.5-1.2" />
                  </g>
                  {/* letras A / 文 */}
                  <text
                    x="18.6"
                    y="8"
                    fontSize="6.5"
                    fontWeight="700"
                    fill="currentColor"
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    A
                  </text>
                  <text
                    x="4.4"
                    y="17.6"
                    fontSize="6"
                    fontWeight="700"
                    fill="currentColor"
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    文
                  </text>
                </svg>
              </span>
            </button>

            <button
              className="flex cursor-pointer flex-col gap-[5px] border-none bg-transparent p-2 transition-transform duration-300 hover:scale-110 md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className="h-0.5 w-[25px] rounded-sm bg-[linear-gradient(90deg,#9ca3af,#6b7280)]" />
              <span className="h-0.5 w-[25px] rounded-sm bg-[linear-gradient(90deg,#9ca3af,#6b7280)]" />
              <span className="h-0.5 w-[25px] rounded-sm bg-[linear-gradient(90deg,#9ca3af,#6b7280)]" />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="animate-fade-in fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-[linear-gradient(135deg,rgba(26,26,26,0.98),rgba(38,38,38,0.98))] backdrop-blur-[10px]">
          <button
            className="absolute right-8 top-8 flex h-10 w-10 cursor-pointer items-center justify-center border-none bg-transparent text-[2rem] text-white transition-all duration-300 hover:rotate-90 hover:text-[#d1d5db]"
            onClick={toggleMenu}
          >
            ✕
          </button>
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer border-none bg-transparent p-2 text-[1.5rem] font-medium text-white transition-transform duration-200 hover:-translate-y-[3px]"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
