"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import aboutImage from "@/assets/aboutImage.jpg";
import yocopiaImage from "@/assets/yocopia.jpg";
import { useLang } from "@/i18n/LanguageContext";

const technologies = [
  { name: "JAVA", icon: "☕" },
  { name: "SpringBoot", icon: "🌱" },
  { name: "NestJS", icon: "🐱" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛️" },
  { name: "React Native", icon: "📱" },
  { name: "TypeScript", icon: "TS" },
  { name: "JavaScript", icon: "JS" },
  { name: "Node.js", icon: "📗" },
  { name: "Socket.IO", icon: "⚡" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "Tailwind CSS", icon: "🌊" },
];

const tools = [
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git/GitHub", icon: "🐙" },
  { name: "Vercel", icon: "🚀" },
  { name: "Fly.io", icon: "✈️" },
  { name: "Stripe", icon: "💳" },
  { name: "Shopify", icon: "🛍️" },
  { name: "Supabase", icon: "🟢" },
  { name: "Expo", icon: "📱" },
  { name: "AI Integration", icon: "🤖" },
  { name: "Cursor", icon: "✨" },
  { name: "Postman", icon: "📮" },
  { name: "Figma", icon: "🎨" },
];

const skillItemClass =
  "flex min-h-[80px] flex-col items-center justify-center rounded-[15px] border border-[rgba(156,163,175,0.22)] bg-[linear-gradient(135deg,rgba(156,163,175,0.045),rgba(156,163,175,0.09))] px-[0.8rem] py-[1.2rem] text-center text-sm font-semibold text-[#f0f1f3] transition-all duration-300 hover:-translate-y-[6px] hover:scale-[1.04] hover:border-[rgba(156,163,175,0.5)] hover:bg-[linear-gradient(135deg,rgba(156,163,175,0.14),rgba(156,163,175,0.2))] hover:shadow-[0_10px_30px_rgba(156,163,175,0.28)]";

function SkillsSection({
  title,
  items,
}: {
  title: string;
  items: { name: string; icon: string }[];
}) {
  // Triplicado: da margen para arrastrar libremente hacia cualquier lado
  // sin llegar nunca al borde real del contenido.
  const marqueeItems = [...items, ...items, ...items];
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Bypasea cualquier scroll-behavior:smooth heredado/ambiental — los
    // saltos de "wrap" y el incremento cuadro a cuadro tienen que ser
    // instantáneos, no animados por el navegador.
    el.style.scrollBehavior = "auto";

    let raf = 0;
    let interacting = false;
    let resumeTimeout: ReturnType<typeof setTimeout> | null = null;
    const AUTO_SPEED = 1; // px por frame cuando nadie la toca

    const oneSetWidth = () => el.scrollWidth / 3;

    // Centrar en la copia del medio. Se reintenta porque en el primer
    // frame los emojis/iconos pueden no haber terminado de ocupar layout
    // todavía y scrollWidth leería 0.
    const center = () => {
      const one = oneSetWidth();
      if (one > 0) el.scrollLeft = one;
    };
    center();
    const centerRetry = setTimeout(center, 200);

    const wrap = () => {
      const one = oneSetWidth();
      if (one <= 0) return;
      if (el.scrollLeft < one * 0.5) el.scrollLeft += one;
      else if (el.scrollLeft > one * 1.5) el.scrollLeft -= one;
    };

    const tick = () => {
      // el incremento NO depende de que el centrado ya haya corrido —
      // así nunca queda bloqueado esperando algo que no pasó.
      if (!interacting) el.scrollLeft += AUTO_SPEED;
      wrap();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onStart = () => {
      interacting = true;
      if (resumeTimeout) clearTimeout(resumeTimeout);
    };
    const onEnd = () => {
      // espera a que se apague el momentum del scroll nativo antes de retomar
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        interacting = false;
      }, 800);
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    el.addEventListener("touchcancel", onEnd, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(centerRetry);
      if (resumeTimeout) clearTimeout(resumeTimeout);
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
      el.removeEventListener("touchcancel", onEnd);
    };
  }, []);

  return (
    <div className="rounded-[20px] border border-[rgba(139,146,160,0.35)] bg-[rgba(35,35,35,0.85)] p-5 backdrop-blur-[8px] transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(139,146,160,0.6)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] sm:p-8 lg:p-10">
      <h3 className="text-gradient-gray relative mb-8 text-center text-2xl font-bold after:absolute after:-bottom-3 after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-[linear-gradient(90deg,#6b7280,#9ca3af)]">
        {title}
      </h3>

      {/* Desktop/tablet: grid fijo con todo el contenido */}
      <div className="hidden gap-4 sm:grid sm:[grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]">
        {items.map((item, i) => (
          <div key={i} className={skillItemClass}>
            <span className="mb-2 text-2xl">{item.icon}</span>
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Mobile: scroll horizontal real — se arrastra con el dedo en
          cualquier dirección y a la velocidad que quieras; suelta y sigue
          moviéndose sola. */}
      <div
        className="relative -mx-5 sm:hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-3 overflow-x-auto px-5"
          style={{ touchAction: "pan-x" }}
        >
          {marqueeItems.map((item, i) => (
            <div key={i} className={`${skillItemClass} w-28 flex-shrink-0`}>
              <span className="mb-2 text-2xl">{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const { t, lang } = useLang();
  const [photoRevealed, setPhotoRevealed] = useState(false);
  const isTouchRef = useRef(false);

  const services: { icon: ReactNode; title: string; subtitle: string }[] = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      ),
      title: "Frontend",
      subtitle: t.about.developer,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: "Backend",
      subtitle: t.about.developer,
    },
  ];

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1a1a1a] py-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(160,160,160,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(140,140,140,0.08)_0%,transparent_50%)]" />

      <div className="relative z-[1] mx-auto w-full max-w-[1200px] px-8">
        <h2 className="text-gradient-gray m-0 mb-8 text-center text-3xl font-bold leading-tight md:text-4xl">
          {t.about.title}
        </h2>

        <div className="mb-16 mt-8 grid items-center gap-16 [grid-template-columns:1.2fr_0.8fr] max-[980px]:grid-cols-1 max-[980px]:gap-10 max-[980px]:text-center">
          <div className="text-left max-[980px]:text-center">
            <p className="mb-[1.6rem] text-lg leading-[1.75] text-[#b8bec7]">
              {t.about.p1}
            </p>
            <p className="mb-[1.6rem] text-lg leading-[1.75] text-[#b8bec7]">
              {t.about.p2}
            </p>
            <p className="mb-[1.6rem] text-lg leading-[1.75] text-[#b8bec7]">
              {t.about.p3}
            </p>

            <div className="mt-[2.2rem] flex justify-center">
              <a
                href={lang === "es" ? "https://drive.google.com/file/d/1Ooa2Xjsa6ldLW5j0AMXDVyYJdR-2pq6a/view?usp=sharing" : "https://drive.google.com/file/d/1VP-aXKMigTxaacbQ7yrKFyT5lHqNcqlH/view?usp=sharing"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.about.viewCV}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-[#4b5563] bg-transparent px-6 py-3 font-semibold text-white transition-all hover:border-white hover:bg-[rgba(255,255,255,0.1)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6z" />
                </svg>
                {t.about.viewCV}
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className="group relative max-w-[480px] overflow-hidden rounded-[25px] shadow-[0_25px_50px_rgba(0,0,0,0.15)] transition-all duration-[400ms] hover:-translate-y-[15px] hover:scale-[1.02] hover:shadow-[0_35px_70px_rgba(0,0,0,0.2)] max-[980px]:mx-auto"
              onTouchStart={() => { isTouchRef.current = true; setPhotoRevealed((v) => !v); }}
              onMouseEnter={() => { if (!isTouchRef.current) setPhotoRevealed(true); }}
              onMouseLeave={() => { if (!isTouchRef.current) setPhotoRevealed(false); }}
            >
              <div className="absolute inset-0 z-[1] bg-[linear-gradient(135deg,rgba(0,0,0,0.1),rgba(255,255,255,0.15))] transition-opacity duration-300 group-hover:opacity-0" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={aboutImage.src} alt="About me" className="block h-auto w-full" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={yocopiaImage.src}
                alt="Fidel Genre"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${photoRevealed ? "opacity-100" : "opacity-0"}`}
              />
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="mx-[-2rem] mt-8 py-14">
          <div className="mx-auto max-w-[1200px] px-8">
            <div className="mx-auto mb-12 max-w-[900px] text-center">
              <span className="mb-2 block text-sm font-semibold text-[#9ca3af]">
                {t.about.introduction}
              </span>
              <h2 className="text-gradient-gray m-0 mb-4 text-center text-3xl font-bold leading-tight md:text-4xl">
                {t.about.overviewTitle}
              </h2>
              <p className="mx-auto max-w-[800px] text-center text-lg leading-[1.7] text-[#d1d5db]">
                {t.about.overviewDescription}
              </p>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-4 sm:gap-8 sm:[grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[20px] border border-[rgba(156,163,175,0.3)] bg-[rgba(35,35,35,0.85)] px-4 py-6 text-center backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-[10px] hover:border-[rgba(156,163,175,0.6)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] sm:px-8 sm:py-9"
                >
                  <div className="relative mx-auto mb-[0.9rem] flex h-14 w-14 items-center justify-center [&_svg]:h-7 [&_svg]:w-7 [&_svg]:text-[#9ca3af] [&_svg]:transition-all [&_svg]:duration-300 group-hover:[&_svg]:scale-110 group-hover:[&_svg]:text-white sm:mb-[1.3rem] sm:h-20 sm:w-20 sm:[&_svg]:h-10 sm:[&_svg]:w-10">
                    {service.icon}
                  </div>
                  <h3 className="relative mb-[0.35rem] text-base font-bold text-white sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="relative m-0 text-sm text-[#9ca3af] sm:text-base">{service.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <div className="mt-12 grid grid-cols-2 gap-12 max-[980px]:grid-cols-1 max-[980px]:gap-8">
          <SkillsSection title={t.about.technologies} items={technologies} />
          <SkillsSection title={t.about.tools} items={tools} />
        </div>
      </div>
    </section>
  );
}
