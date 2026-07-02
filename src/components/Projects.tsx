"use client";

import { useRef, useEffect, useState, useLayoutEffect, useCallback } from "react";
import { useLang } from "@/i18n/LanguageContext";
import ProjectModal from "@/components/ProjectModal";

import ecommerceImg from "@/assets/ecommerce_real.png";
import dappweb3Img from "@/assets/stealthbid_real.png";
import socialImg from "@/assets/SocialNetwork.png";
import lpticketImg from "@/assets/lpticket_real.png";
import elpactoImg from "@/assets/elpacto_real.png";

type ProjectKey = "ecommerce" | "lpticket" | "elpacto" | "stealthbid" | "social";

const projectsBase: {
  key: ProjectKey;
  image: string;
  screenshots: string[];
  tags: string[];
  projectUrl: string;
  codeUrl: string;
}[] = [
  {
    key: "ecommerce",
    image: ecommerceImg.src,
    screenshots: [
      "/screenshots/ecommerce-1.png",
      "/screenshots/ecommerce-2.png",
      "/screenshots/ecommerce-3.png",
      "/screenshots/ecommerce-4.png",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Java", "SpringBoot", "PostgreSQL"],
    projectUrl: "https://ecommerceclient-production.up.railway.app/",
    codeUrl: "https://github.com/fidelgenre/ECommerce",
  },
  {
    key: "lpticket",
    image: lpticketImg.src,
    screenshots: [
      "/screenshots/lpticket-1.png",
      "/screenshots/lpticket-2.png",
      "/screenshots/lpticket-3.png",
      "/screenshots/lpticket-4.png",
      "/screenshots/lpticket-5.png",
      "/screenshots/lpticket-6.png",
      "/screenshots/lpticket-7.png",
      "/screenshots/lpticket-8.png",
      "/screenshots/lpticket-9.png",
    ],
    tags: ["Next.js", "React Native", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL", "Stripe"],
    projectUrl: "https://lpticket.com",
    codeUrl: "https://github.com/LpTicket/TicketSystem",
  },
  {
    key: "elpacto",
    image: elpactoImg.src,
    screenshots: [],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS", "Socket.IO", "PWA"],
    projectUrl: "https://elpactoclub-frontend.fly.dev/",
    codeUrl: "https://github.com/FidelGenre/ElPactoClub",
  },
  {
    key: "stealthbid",
    image: dappweb3Img.src,
    screenshots: [],
    tags: ["Next.js", "SKALE BITE v2", "Coinbase x402", "Google (AP2 + Gemini)", "TypeScript", "Tailwind CSS", "Solidity", "Foundry"],
    projectUrl: "https://stealthbidagents.vercel.app/",
    codeUrl: "https://github.com/FidelGenre/Crowdfunding",
  },
  {
    key: "social",
    image: socialImg.src,
    screenshots: [],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Java", "SpringBoot", "PostgreSQL"],
    projectUrl: "https://socialnetworkclient-production.up.railway.app/",
    codeUrl: "https://github.com/FidelGenre/SocialNetwork",
  },
];

const actionBtnClass =
  "inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-white/25 bg-white/[0.12] px-[0.95rem] py-[0.55rem] text-[0.88rem] font-bold text-white backdrop-blur-[6px] transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-white/55 hover:bg-white/[0.22]";

export default function Projects() {
  const { t } = useLang();

  const projects = projectsBase.map((p) => ({
    ...p,
    title: t.projects.items[p.key].title,
    description: t.projects.items[p.key].description,
  }));

  const n = projects.length;
  const slides = [...projects, ...projects, ...projects];

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Empezamos centrados en LPTicket (índice 1): Ecommerce · LPTicket · El Pacto BC.
  const [pos, setPos] = useState(n + 1);
  const [animate, setAnimate] = useState(true);
  const [metrics, setMetrics] = useState({ step: 0, cardW: 0, vw: 0 });
  const [sharpRadius, setSharpRadius] = useState(1);
  const [activeKey, setActiveKey] = useState<ProjectKey | null>(null);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;
    const card = track.children[0] as HTMLElement | undefined;
    if (!card) return;
    const cardW = card.offsetWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    setMetrics({ step: cardW + gap, cardW, vw: viewport.offsetWidth });
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const onResize = () => {
      setSharpRadius(window.matchMedia("(min-width: 1024px)").matches ? 1 : 0);
      measure();
    };
    onResize();
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, [measure]);

  const offset = metrics.vw / 2 - (pos * metrics.step + metrics.cardW / 2);

  const posRef = useRef(pos);

  const go = (dir: number) => {
    const prev = posRef.current;
    const target = prev + dir;

    if (target >= n && target < 2 * n) {
      posRef.current = target;
      setAnimate(true);
      setPos(target);
      return;
    }

    const shifted = prev - dir * n;
    posRef.current = shifted;
    setAnimate(false);
    setPos(shifted);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        posRef.current = shifted + dir;
        setAnimate(true);
        setPos(shifted + dir);
      })
    );
  };

  return (
    <section id="projects" className="relative bg-[#1f1f1f] px-8 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(156,163,175,0.05)_0%,transparent_55%)]" />

      <div className="relative z-[1] mx-auto max-w-[1560px]">
        <h2 className="text-gradient-gray mb-2 text-center text-[clamp(2rem,5vw,3rem)] font-bold">
          {t.projects.title}
        </h2>
        <p className="mb-16 text-center text-[1.125rem] text-[#9ca3af]">{t.projects.subtitle}</p>

        <div className="relative px-0 min-[1024px]:px-[3.25rem]">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous project"
            className="absolute left-[0.15rem] top-1/2 z-[5] flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[rgba(156,163,175,0.4)] bg-[linear-gradient(135deg,#6b7280_0%,#4b5563_100%)] text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-all duration-300 hover:bg-[linear-gradient(135deg,#9ca3af_0%,#6b7280_100%)] hover:shadow-[0_10px_30px_rgba(107,114,128,0.6)] active:scale-90 max-[1023px]:left-2 max-[1023px]:h-11 max-[1023px]:w-11 max-[1023px]:bg-[rgba(75,85,99,0.7)] max-[1023px]:backdrop-blur-[4px] max-[640px]:left-0 max-[640px]:h-10 max-[640px]:w-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div ref={viewportRef} className="overflow-hidden py-8">
            <div
              ref={trackRef}
              className="flex gap-5"
              style={{
                transform: `translate3d(${offset}px, 0, 0)`,
                transition: animate ? "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
              }}
            >
              {slides.map((project, index) => {
                const isCenter = Math.abs(index - pos) <= sharpRadius;
                return (
                  <article
                    key={index}
                    aria-hidden={!isCenter}
                    onClick={isCenter ? () => setActiveKey(project.key) : undefined}
                    className={`group relative flex shrink-0 basis-[78%] flex-col overflow-hidden rounded-[1.25rem] border border-[rgba(156,163,175,0.16)] bg-[linear-gradient(160deg,#2e2e2e_0%,#252525_100%)] shadow-[0_18px_45px_rgba(0,0,0,0.4)] transition-[transform,opacity,filter,border-color,box-shadow] duration-[550ms] min-[641px]:basis-[60%] min-[1024px]:basis-[29%] ${
                      isCenter
                        ? "cursor-pointer scale-100 opacity-100 hover:-translate-y-2 hover:border-[rgba(156,163,175,0.45)] hover:shadow-[0_26px_60px_rgba(107,114,128,0.3)]"
                        : "pointer-events-none scale-[0.84] opacity-50 blur-[4px] brightness-[0.65]"
                    }`}
                  >
                    {/* línea de acento superior */}
                    <div
                      className={`absolute inset-x-0 top-0 z-[2] h-[3px] bg-[linear-gradient(90deg,#9ca3af,#6b7280,transparent)] transition-opacity duration-[400ms] ${
                        isCenter ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[linear-gradient(135deg,#3a3a3a,#2b2b2b)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                      />

                      <div className="absolute inset-0 flex items-end justify-center gap-[0.6rem] bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,0.55)_100%)] p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={isCenter ? 0 : -1}
                          aria-label={`${t.projects.viewProject}: ${project.title}`}
                          className={actionBtnClass}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M14 3h7v7M10 14L21 3M21 14v7h-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                          {t.projects.viewProject}
                        </a>

                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={isCenter ? 0 : -1}
                          aria-label={`${t.projects.code}: ${project.title}`}
                          className={actionBtnClass}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 12 .5Z" />
                          </svg>
                          {t.projects.code}
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col px-[1.4rem] py-7">
                      <h3 className="mb-[0.6rem] text-[1.25rem] font-bold leading-[1.25] text-white">
                        {project.title}
                      </h3>
                      <p className="mb-5 line-clamp-4 text-[0.9rem] leading-[1.6] text-[#c4c9d1]">
                        {project.description}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        {project.tags.map((tag, ti) => (
                          <span
                            key={ti}
                            className="rounded-full border border-[rgba(156,163,175,0.3)] bg-[rgba(156,163,175,0.18)] px-3 py-[0.35rem] text-[0.78rem] font-semibold text-[#d7dbe2] transition-all duration-300 hover:border-[rgba(156,163,175,0.55)] hover:bg-[rgba(156,163,175,0.28)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next project"
            className="absolute right-[0.15rem] top-1/2 z-[5] flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[rgba(156,163,175,0.4)] bg-[linear-gradient(135deg,#6b7280_0%,#4b5563_100%)] text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-all duration-300 hover:bg-[linear-gradient(135deg,#9ca3af_0%,#6b7280_100%)] hover:shadow-[0_10px_30px_rgba(107,114,128,0.6)] active:scale-90 max-[1023px]:right-2 max-[1023px]:h-11 max-[1023px]:w-11 max-[1023px]:bg-[rgba(75,85,99,0.7)] max-[1023px]:backdrop-blur-[4px] max-[640px]:right-0 max-[640px]:h-10 max-[640px]:w-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/FidelGenre?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-xl border-none bg-[linear-gradient(135deg,#6b7280_0%,#4b5563_100%)] px-10 py-4 text-base font-semibold text-white no-underline shadow-[0_4px_15px_rgba(107,114,128,0.4)] transition-all duration-300 hover:-translate-y-[3px] hover:bg-[linear-gradient(135deg,#9ca3af_0%,#6b7280_100%)] hover:shadow-[0_6px_25px_rgba(107,114,128,0.6)]"
          >
            {t.projects.seeMore}
          </a>
        </div>
      </div>

      {activeKey && (() => {
        const base = projectsBase.find((p) => p.key === activeKey)!;
        return (
          <ProjectModal
            project={{
              title: t.projects.items[activeKey].title,
              description: t.projects.items[activeKey].description,
              features: t.projects.items[activeKey].features,
              tags: base.tags,
              screenshots: base.screenshots.length > 0 ? base.screenshots : [base.image],
              projectUrl: base.projectUrl,
              codeUrl: base.codeUrl,
            }}
            onClose={() => setActiveKey(null)}
            labels={{ viewProject: t.projects.viewProject, code: t.projects.code }}
          />
        );
      })()}
    </section>
  );
}
