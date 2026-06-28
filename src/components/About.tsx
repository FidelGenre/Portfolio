"use client";

import { useState, useRef, type ReactNode } from "react";
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
  { name: "Cursor", icon: "✨" },
  { name: "IntelliJ IDEA", icon: "🧠" },
  { name: "VS Code", icon: "💙" },
  { name: "Postman", icon: "📮" },
  { name: "Figma", icon: "🎨" },
  { name: "Maven", icon: "⚙️" },
  { name: "npm", icon: "📦" },
];

const skillItemClass =
  "flex min-h-[80px] flex-col items-center justify-center rounded-[15px] border border-[rgba(139,146,160,0.3)] bg-[linear-gradient(135deg,rgba(107,114,128,0.08),rgba(139,146,160,0.08))] px-[0.8rem] py-[1.2rem] text-center text-sm font-semibold text-[#f0f1f3] transition-all duration-300 hover:-translate-y-[6px] hover:scale-[1.04] hover:border-[rgba(139,146,160,0.6)] hover:bg-[linear-gradient(135deg,rgba(107,114,128,0.2),rgba(139,146,160,0.2))] hover:shadow-[0_10px_30px_rgba(107,114,128,0.35)]";

const showMoreBtnClass =
  "mx-auto mt-[1.6rem] hidden cursor-pointer items-center gap-2 rounded-[0.6rem] border-2 border-[#8b92a0] bg-transparent px-[1.8rem] py-[0.7rem] text-[0.95rem] font-semibold text-white shadow-[0_0_12px_rgba(139,146,160,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#b8bcc4] hover:bg-[rgba(139,146,160,0.15)] hover:shadow-[0_0_20px_rgba(139,146,160,0.5)] max-[980px]:flex";

function SkillsSection({
  title,
  items,
  expanded,
  onToggle,
  viewMore,
  viewLess,
}: {
  title: string;
  items: { name: string; icon: string }[];
  expanded: boolean;
  onToggle: () => void;
  viewMore: string;
  viewLess: string;
}) {
  return (
    <div className="rounded-[20px] border border-[rgba(139,146,160,0.35)] bg-[rgba(35,35,35,0.85)] p-10 backdrop-blur-[8px] transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(139,146,160,0.6)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
      <h3 className="text-gradient-light relative mb-8 text-center text-[clamp(22px,3vw,28px)] font-extrabold after:absolute after:-bottom-3 after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-[linear-gradient(90deg,#8b92a0,#b8bcc4)]">
        {title}
      </h3>
      <div className="grid justify-center gap-4 [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]">
        {items.map((item, i) => (
          <div
            key={i}
            className={`${skillItemClass} ${i >= 3 && !expanded ? "max-[980px]:hidden" : ""}`}
          >
            <span className="mb-2 text-[1.8rem]">{item.icon}</span>
            <span className="text-[0.92rem]">{item.name}</span>
          </div>
        ))}
      </div>
      <button type="button" className={showMoreBtnClass} onClick={onToggle}>
        <span>{expanded ? viewLess : viewMore}</span>
        <span className={`transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true">
          ▾
        </span>
      </button>
    </div>
  );
}

export default function About() {
  const { t, lang } = useLang();
  const [showAllTech, setShowAllTech] = useState(false);
  const [showAllTools, setShowAllTools] = useState(false);
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
        <h2 className="text-gradient-light m-0 mb-8 text-center text-[clamp(42px,5.5vw,72px)] font-extrabold leading-[1.05]">
          {t.about.title}
        </h2>

        <div className="mb-16 mt-8 grid items-center gap-16 [grid-template-columns:1.2fr_0.8fr] max-[980px]:grid-cols-1 max-[980px]:gap-10 max-[980px]:text-center">
          <div className="text-left max-[980px]:text-center">
            <p className="mb-[1.6rem] text-[clamp(16px,1.9vw,20px)] font-medium leading-[1.75] text-white/75">
              {t.about.p1}
            </p>
            <p className="mb-[1.6rem] text-[clamp(16px,1.9vw,20px)] leading-[1.75] text-white/75">
              {t.about.p2}
            </p>
            <p className="mb-[1.6rem] text-[clamp(16px,1.9vw,20px)] leading-[1.75] text-white/75">
              {t.about.p3}
            </p>

            <div className="mt-[2.2rem] flex justify-center">
              <a
                href={lang === "es" ? "https://drive.google.com/file/d/1Ooa2Xjsa6ldLW5j0AMXDVyYJdR-2pq6a/view?usp=sharing" : "https://drive.google.com/file/d/1VP-aXKMigTxaacbQ7yrKFyT5lHqNcqlH/view?usp=sharing"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.about.viewCV}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[0.6rem] border-2 border-[#8b92a0] bg-transparent px-[1.8rem] py-[0.7rem] text-[0.95rem] font-semibold text-white shadow-[0_0_12px_rgba(139,146,160,0.3)] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#b8bcc4] hover:bg-[rgba(139,146,160,0.15)] hover:shadow-[0_0_20px_rgba(139,146,160,0.5)]"
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
              <span className="mb-4 block text-[0.9rem] font-semibold uppercase tracking-[0.1em] text-white/70">
                {t.about.introduction}
              </span>
              <h2 className="text-gradient-light m-0 mb-4 text-center text-[clamp(32px,4.5vw,56px)] font-black">
                {t.about.overviewTitle}
              </h2>
              <p className="mx-auto max-w-[800px] text-center text-[clamp(16px,1.8vw,20px)] leading-[1.7] text-white/75">
                {t.about.overviewDescription}
              </p>
            </div>

            <div className="mt-9 grid gap-8 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[20px] border border-[rgba(139,146,160,0.3)] bg-[rgba(35,35,35,0.85)] px-8 py-9 text-center backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-[10px] hover:border-[rgba(139,146,160,0.6)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,14,14,0.1),rgba(206,206,206,0.12))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative mx-auto mb-[1.3rem] flex h-20 w-20 items-center justify-center [&_svg]:h-10 [&_svg]:w-10 [&_svg]:text-[#e2e8f0] [&_svg]:transition-all [&_svg]:duration-300 group-hover:[&_svg]:scale-110 group-hover:[&_svg]:text-white">
                    {service.icon}
                  </div>
                  <h3 className="relative mb-[0.35rem] text-[1.25rem] font-bold text-[#f0f1f3]">
                    {service.title}
                  </h3>
                  <p className="relative m-0 text-base text-[#cfd3da]">{service.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <div className="mt-12 grid grid-cols-2 gap-12 max-[980px]:grid-cols-1 max-[980px]:gap-8">
          <SkillsSection
            title={t.about.technologies}
            items={technologies}
            expanded={showAllTech}
            onToggle={() => setShowAllTech((v) => !v)}
            viewMore={t.about.viewMore}
            viewLess={t.about.viewLess}
          />
          <SkillsSection
            title={t.about.tools}
            items={tools}
            expanded={showAllTools}
            onToggle={() => setShowAllTools((v) => !v)}
            viewMore={t.about.viewMore}
            viewLess={t.about.viewLess}
          />
        </div>
      </div>
    </section>
  );
}
