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
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
          <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            {/* globo con grilla */}
            <circle cx="11" cy="12" r="4.5" />
            <path d="M6.5 12h9" />
            <path d="M11 7.5c1.8 1.6 1.8 7.4 0 9" />
            <path d="M11 7.5c-1.8 1.6-1.8 7.4 0 9" />
            <path d="M7.4 9.6c2.2 1.2 5 1.2 7.2 0" />
            <path d="M7.4 14.4c2.2-1.2 5-1.2 7.2 0" />
            {/* flecha que rodea (mitad izquierda+arriba), punta abajo-derecha */}
            <path d="M7.6 17.9A6.8 6.8 0 0 1 14.4 6.1" />
            <path d="M13.5 4.3 14.4 6.1 12.4 6.2" />
            {/* flecha opuesta = rotación 180° */}
            <g transform="rotate(180 11 12)">
              <path d="M7.6 17.9A6.8 6.8 0 0 1 14.4 6.1" />
              <path d="M13.5 4.3 14.4 6.1 12.4 6.2" />
            </g>
          </g>
          {/* códigos EN / ES en cada punta */}
          <text
            x="20.2"
            y="4.2"
            fontSize="5.8"
            fontWeight="800"
            fill="#ffffff"
            stroke="#171717"
            strokeWidth="0.5"
            paintOrder="stroke"
            textAnchor="middle"
            dominantBaseline="central"
          >
            EN
          </text>
          <text
            x="3.8"
            y="19.8"
            fontSize="5.8"
            fontWeight="800"
            fill="#ffffff"
            stroke="#171717"
            strokeWidth="0.5"
            paintOrder="stroke"
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
