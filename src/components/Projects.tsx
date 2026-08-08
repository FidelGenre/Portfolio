"use client";

import { useState, useRef } from "react";
import { useLang } from "@/i18n/LanguageContext";
import ProjectModal from "@/components/ProjectModal";

import ecommerceImg from "@/assets/ecommerce_real.png";
import dappweb3Img from "@/assets/stealthbid_real.png";
import socialImg from "@/assets/SocialNetwork.png";
import lpticketImg from "@/assets/lpticket_real.png";
import elpactoImg from "@/assets/elpacto_real.png";
import petparadiseImg from "@/assets/petparadise_card.png";
import nexfyImg from "@/assets/nexfy_real.jpg";

type ProjectKey =
  | "ecommerce"
  | "lpticket"
  | "elpacto"
  | "stealthbid"
  | "social"
  | "petparadise"
  | "nexfy";

const projectsBase: {
  key: ProjectKey;
  category: string;
  image: string;
  screenshots: string[];
  tags: string[];
  projectUrl: string;
  codeUrl?: string;
}[] = [
  {
    key: "lpticket",
    category: "TICKETING",
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
    category: "SPORTS COMMUNITY",
    image: elpactoImg.src,
    screenshots: [],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS", "Socket.IO", "PWA"],
    projectUrl: "https://elpactoclub-frontend.fly.dev/",
    codeUrl: "https://github.com/FidelGenre/ElPactoClub",
  },
  {
    key: "nexfy",
    category: "SALES NETWORK",
    image: nexfyImg.src,
    screenshots: [],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    projectUrl: "https://www.nexfyapp.com/",
  },
  {
    key: "ecommerce",
    category: "E-COMMERCE",
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
    key: "stealthbid",
    category: "WEB3 MARKETPLACE",
    image: dappweb3Img.src,
    screenshots: [],
    tags: ["Next.js", "SKALE v2", "Coinbase x402", "Gemini AI", "TypeScript", "Solidity"],
    projectUrl: "https://stealthbidagents.vercel.app/",
    codeUrl: "https://github.com/FidelGenre/Crowdfunding",
  },
  {
    key: "social",
    category: "SOCIAL NETWORK",
    image: socialImg.src,
    screenshots: [],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Java", "SpringBoot", "PostgreSQL"],
    projectUrl: "https://socialnetworkclient-production.up.railway.app/",
    codeUrl: "https://github.com/FidelGenre/SocialNetwork",
  },
  {
    key: "petparadise",
    category: "PET E-COMMERCE",
    image: petparadiseImg.src,
    screenshots: [],
    tags: ["Next.js", "TypeScript", "Shopify", "Storefront API", "Nodemailer", "Vercel"],
    projectUrl: "https://www.petparadiseshop.com.ar/",
    codeUrl: "https://github.com/FidelGenre/petparadiseshop",
  },
];

const VISIBLE_COUNT = 3;

/* ─────────────────────────── helpers ─────────────────────────────── */

function TagPill({ tag }: { tag: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.22rem 0.65rem",
        borderRadius: "999px",
        border: "1px solid rgba(156,163,175,0.35)",
        background: "rgba(156,163,175,0.1)",
        color: "#b0b7c3",
        fontSize: "0.73rem",
        fontWeight: 600,
        whiteSpace: "nowrap",
      }}
    >
      {tag}
    </span>
  );
}

function BtnLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        padding: "0.5rem 1.05rem",
        borderRadius: "999px",
        border: "1.5px solid rgba(255,255,255,0.2)",
        background: "rgba(255,255,255,0.05)",
        color: "#e5e7eb",
        fontSize: "0.82rem",
        fontWeight: 700,
        textDecoration: "none",
        transition: "border-color 0.2s, background 0.2s, transform 0.2s",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.5)";
        el.style.background = "rgba(255,255,255,0.12)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.2)";
        el.style.background = "rgba(255,255,255,0.05)";
        el.style.transform = "";
      }}
    >
      {children}
    </a>
  );
}

const IconExternal = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M14 3h7v7M10 14L21 3M21 14v7h-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const IconGithub = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 12 .5Z" />
  </svg>
);

const IconChevron = ({ open }: { open: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.25s ease" }}
  >
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─────────────────────────── project block ─────────────────────────────── */
/* Imagen a un lado (alternando), tarjeta oscura SUPERPUESTA sobre la imagen
   con margin-top negativo — patrón "tarjeta flotante" (juanpestana.netlify.app)
   pero en la paleta gris/oscura del sitio. */

function ProjectOverlap({
  project,
  index,
  viewLabel,
  codeLabel,
  onClick,
}: {
  project: (typeof projectsBase)[0] & { title: string; description: string };
  index: number;
  viewLabel: string;
  codeLabel: string;
  onClick: () => void;
}) {
  const [hov, setHov] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className={`proj-overlap ${isEven ? "proj-overlap--left" : "proj-overlap--right"}`}>
      <button
        type="button"
        className="proj-overlap-img"
        onClick={onClick}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        aria-label={`Ver proyecto: ${project.title}`}
        style={{
          boxSizing: "border-box",
          cursor: "pointer",
          display: "block",
          background: "none",
          border: "none",
          outline: "none",
          padding: 0,
          margin: 0,
          font: "inherit",
          color: "inherit",
          transform: hov ? "scale(1.015)" : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
      </button>

      <div className="proj-overlap-card">
        <p
          style={{
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#75818f",
          }}
        >
          <span style={{ color: "#d1d5db", fontSize: "0.95rem" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.category}
        </p>

        <h3
          style={{
            margin: "0.9rem 0 0",
            fontSize: "1.5rem",
            fontWeight: 800,
            lineHeight: 1.2,
            color: "#f3f4f6",
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            margin: "0.9rem 0 0",
            fontSize: "0.88rem",
            lineHeight: 1.7,
            color: "#9ca3af",
            textAlign: "justify",
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.38rem", marginTop: "1.1rem" }}>
          {project.tags.map((tag) => <TagPill key={tag} tag={tag} />)}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.25rem" }}>
          <BtnLink href={project.projectUrl}>
            <IconExternal /> {viewLabel}
          </BtnLink>
          {project.codeUrl && (
            <BtnLink href={project.codeUrl}>
              <IconGithub /> {codeLabel}
            </BtnLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLang();
  const [activeKey, setActiveKey] = useState<ProjectKey | null>(null);
  const [showAll, setShowAll] = useState(false);
  const collapseRef = useRef<HTMLDivElement>(null);

  const projects = projectsBase.map((p) => ({
    ...p,
    title: t.projects.items[p.key].title,
    description: t.projects.items[p.key].description,
  }));

  return (
    <>
      <style>{`
        #projects-inner {
          max-width: 1160px;
          margin: 0 auto;
        }
        .proj-overlap {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          align-items: center;
          margin-bottom: 6rem;
        }
        .proj-overlap-img,
        .proj-overlap-card {
          grid-row: 1 / 1;
        }
        .proj-overlap-img {
          grid-column: 1 / 9;
          height: 26rem;
          border-radius: 1rem;
          overflow: hidden;
          background: #111214;
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
          z-index: 0;
        }
        .proj-overlap-card {
          grid-column: 5 / 12;
          z-index: 1;
          background: #202020;
          border: 1px solid rgba(156,163,175,0.2);
          border-radius: 1rem;
          box-shadow: 0 30px 70px rgba(0,0,0,0.55);
          padding: 3.5rem 2.25rem;
        }
        /* proyectos pares (2°, 4°...): imagen a la derecha, card a la izquierda */
        .proj-overlap--right .proj-overlap-img { grid-column: 5 / 13; }
        .proj-overlap--right .proj-overlap-card { grid-column: 2 / 9; }
        @media (max-width: 991px) {
          .proj-overlap {
            display: block;
          }
          .proj-overlap-img {
            width: 100%;
            height: 20rem;
          }
          .proj-overlap-card {
            width: 100%;
            margin-top: -2.5rem;
            padding: 1.5rem;
          }
          .proj-overlap {
            margin-bottom: 4rem;
          }
        }
        .proj-collapse {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .proj-collapse--open {
          grid-template-rows: 1fr;
        }
        .proj-collapse-inner {
          overflow: hidden;
          min-height: 0;
          opacity: 0;
          transform: translateY(-12px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .proj-collapse--open .proj-collapse-inner {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s;
        }
      `}</style>

      <section
        id="projects"
        style={{
          position: "relative",
          background: "#1a1a1a",
          padding: "6rem 1.5rem 8rem",
          overflow: "hidden",
        }}
      >
        {/* soft radial glow */}
        <div
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 75% 40% at 50% 0%, rgba(156,163,175,0.05) 0%, transparent 65%)",
          }}
        />

        <div id="projects-inner" style={{ position: "relative", zIndex: 1 }}>
          {/* ── header ── */}
          <div style={{ marginBottom: "5rem" }}>
            <p
              style={{
                margin: "0 0 0.5rem",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#6b7280",
                textTransform: "uppercase",
              }}
            >
              {t.projects.subtitle}
            </p>
            <h2
              className="text-gradient-gray"
              style={{
                margin: 0,
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.025em",
              }}
            >
              {t.projects.title}
            </h2>
          </div>

          {/* ── projects ── */}
          {projects.slice(0, VISIBLE_COUNT).map((project, i) => (
            <ProjectOverlap
              key={project.key}
              project={project}
              index={i}
              viewLabel={t.projects.viewProject}
              codeLabel={t.projects.code}
              onClick={() => setActiveKey(project.key)}
            />
          ))}

          {/* ── extra projects, colapsables ── */}
          <div ref={collapseRef} className={`proj-collapse ${showAll ? "proj-collapse--open" : ""}`}>
            <div className="proj-collapse-inner">
              {projects.slice(VISIBLE_COUNT).map((project, i) => (
                <ProjectOverlap
                  key={project.key}
                  project={project}
                  index={VISIBLE_COUNT + i}
                  viewLabel={t.projects.viewProject}
                  codeLabel={t.projects.code}
                  onClick={() => setActiveKey(project.key)}
                />
              ))}
            </div>
          </div>

          {/* ── view more/less ── */}
          {projects.length > VISIBLE_COUNT && (
            <div
              style={{ display: "flex", justifyContent: "center", marginTop: "1rem", marginBottom: "3rem" }}
            >
              <button
                type="button"
                onClick={() => {
                  if (showAll) {
                    // Atamos el scroll cuadro a cuadro a la altura REAL que
                    // va midiendo el contenedor mientras la transición CSS lo
                    // colapsa (no un scroll "smooth" aparte, que corre con su
                    // propia curva y queda desincronizado — y con
                    // `scroll-behavior: smooth` global, hasta se anima solo).
                    const el = collapseRef.current;
                    const startHeight = el?.getBoundingClientRect().height ?? 0;
                    const startY = window.scrollY;
                    const startTime = performance.now();
                    const DURATION = 650;

                    setShowAll(false);

                    const tick = (now: number) => {
                      const currentHeight = el?.getBoundingClientRect().height ?? 0;
                      const shrunk = startHeight - currentHeight;
                      window.scrollTo({ top: startY - shrunk, behavior: "instant" });
                      if (now - startTime < DURATION) {
                        requestAnimationFrame(tick);
                      }
                    };
                    requestAnimationFrame(tick);
                  } else {
                    setShowAll(true);
                  }
                }}
                style={{
                  all: "unset",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.75rem",
                  borderRadius: "999px",
                  border: "1.5px solid rgba(156,163,175,0.3)",
                  background: "rgba(156,163,175,0.06)",
                  color: "#d1d5db",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(209,213,219,0.6)";
                  el.style.background = "rgba(156,163,175,0.13)";
                  el.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(156,163,175,0.3)";
                  el.style.background = "rgba(156,163,175,0.06)";
                  el.style.color = "#d1d5db";
                }}
              >
                {showAll ? t.projects.viewLess : t.projects.viewMore}
                <IconChevron open={showAll} />
              </button>
            </div>
          )}

          {/* ── see more ── */}
          <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}>
            <a
              href="https://github.com/FidelGenre?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.8rem 2rem",
                borderRadius: "10px",
                border: "2px solid rgba(156,163,175,0.3)",
                background: "rgba(156,163,175,0.07)",
                color: "#d1d5db",
                fontSize: "0.9rem",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-3px)";
                el.style.borderColor = "rgba(209,213,219,0.6)";
                el.style.background = "rgba(156,163,175,0.14)";
                el.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "";
                el.style.borderColor = "rgba(156,163,175,0.3)";
                el.style.background = "rgba(156,163,175,0.07)";
                el.style.color = "#d1d5db";
              }}
            >
              <IconGithub />
              {t.projects.seeMore}
            </a>
          </div>
        </div>

        {/* ── modal ── */}
        {activeKey &&
          (() => {
            const base = projectsBase.find((p) => p.key === activeKey)!;
            return (
              <ProjectModal
                project={{
                  title: t.projects.items[activeKey].title,
                  description: t.projects.items[activeKey].description,
                  features: t.projects.items[activeKey].features,
                  tags: base.tags,
                  screenshots:
                    base.screenshots.length > 0 ? base.screenshots : [base.image],
                  projectUrl: base.projectUrl,
                  codeUrl: base.codeUrl,
                }}
                onClose={() => setActiveKey(null)}
                labels={{
                  viewProject: t.projects.viewProject,
                  code: t.projects.code,
                }}
              />
            );
          })()}
      </section>
    </>
  );
}
