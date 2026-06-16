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

  const langButton = (className = "") => (
    <button
      type="button"
      onClick={handleLangToggle}
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
      title={lang === "en" ? "Español" : "English"}
      className={`flex cursor-pointer items-center justify-center border-none bg-transparent p-1 text-[#cbd0d8] transition-colors duration-200 hover:text-white ${className}`}
    >
      <span
        className="flex items-center justify-center"
        style={{
          transform: `rotate(${spin}deg)`,
          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
          <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* globo con grilla */}
            <circle cx="50" cy="50" r="21" />
            <clipPath id="globeClip">
              <circle cx="50" cy="50" r="21" />
            </clipPath>
            <g clipPath="url(#globeClip)">
              <ellipse cx="50" cy="50" rx="10" ry="21" />
              <line x1="50" y1="0" x2="50" y2="100" />
              <line x1="0" y1="39" x2="100" y2="39" />
              <line x1="0" y1="50" x2="100" y2="50" />
              <line x1="0" y1="61" x2="100" y2="61" />
            </g>
            {/* flechas que rodean */}
            <path d="M 19 68 A 36 36 0 0 1 62 16" />
            <path d="M 52 14 L 62 16 L 58 26" />
            <path d="M 81 32 A 36 36 0 0 1 38 84" />
            <path d="M 48 86 L 38 84 L 42 74" />
          </g>
          {/* EN (donde iba la A) / ES (donde iba el 文) */}
          <text
            x="73"
            y="27"
            fontSize="23"
            fontWeight="800"
            fill="currentColor"
            textAnchor="middle"
            dominantBaseline="central"
          >
            EN
          </text>
          <text
            x="25"
            y="76"
            fontSize="23"
            fontWeight="800"
            fill="currentColor"
            textAnchor="middle"
            dominantBaseline="central"
          >
            ES
          </text>
        </svg>
      </span>
    </button>
  );

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
            {langButton()}

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
          {/* idioma: arriba a la izquierda, espejando la X */}
          {langButton("absolute left-6 top-6")}

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
