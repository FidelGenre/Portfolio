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
    setSpin((s) => s + 180); // media vuelta: los círculos quedan intercambiados
    toggleLang();
  };

  const spinTransition = "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)";

  // Botón de idioma: dos círculos (ES/EN) unidos por flechas.
  // Al clickear, todo gira media vuelta (las flechas también) y los círculos
  // intercambian lugar; las letras se contra-rotan para no quedar de cabeza.
  const langButton = (className = "") => (
    <button
      type="button"
      onClick={handleLangToggle}
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
      title={lang === "en" ? "Español" : "English"}
      className={`relative h-[50px] w-[50px] shrink-0 cursor-pointer border-none bg-transparent text-[#cbd0d8] transition-colors duration-200 hover:text-white ${className}`}
    >
      {/* capa que gira (flechas + círculos) */}
      <div className="absolute inset-0" style={{ transform: `rotate(${spin}deg)`, transition: spinTransition }}>
        <svg
          viewBox="0 0 50 50"
          className="absolute inset-0 h-full w-full"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M26 6 Q44 6 44 24" />
          <path d="M39.5 19.5 44 24 48 19.5" />
          <path d="M24 44 Q6 44 6 26" />
          <path d="M10.5 30.5 6 26 2 30.5" />
        </svg>

        {(["es", "en"] as const).map((code) => {
          const active = lang === code;
          const topLeft = code === "es"; // ES arranca arriba-izquierda, EN abajo-derecha
          return (
            <span
              key={code}
              className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-current text-[10px] font-extrabold leading-none ${
                active ? "opacity-100" : "opacity-45"
              }`}
              style={{
                top: topLeft ? 1 : 25,
                left: topLeft ? 1 : 25,
                // contra-rotación para que la letra quede siempre derecha
                transform: `rotate(${-spin}deg)`,
                transition: `${spinTransition}, opacity 0.4s ease`,
              }}
            >
              <span className="text-[#1f1f1f]">{code.toUpperCase()}</span>
            </span>
          );
        })}
      </div>
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
            {/* en desktop visible en el navbar; en mobile va dentro del menú */}
            {langButton("hidden md:block")}

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
          {/* idioma: arriba a la izquierda, al mismo nivel que la X (lado opuesto) */}
          <div className="absolute left-6 top-7">{langButton()}</div>

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
