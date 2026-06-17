"use client";

import { useState, useEffect } from "react";

interface ModalProject {
  title: string;
  description: string;
  features: readonly string[];
  tags: string[];
  screenshots: string[];
  projectUrl: string;
  codeUrl: string;
}

interface Props {
  project: ModalProject;
  onClose: () => void;
  labels: { viewProject: string; code: string };
}

export default function ProjectModal({ project, onClose, labels }: Props) {
  const [imgIdx, setImgIdx] = useState(0);
  const shots = project.screenshots;
  const hasMultiple = shots.length > 1;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[3000] flex items-center justify-center p-4 backdrop-blur-[6px]"
      style={{ background: "rgba(0,0,0,0.72)" }}
      onClick={onClose}
    >
      <div
        className="animate-slide-up no-scrollbar relative w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#1e1e1e] shadow-2xl"
        style={{ maxHeight: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-none bg-black/40 text-lg text-white transition-colors duration-200 hover:bg-black/65"
        >
          ✕
        </button>

        {/* Gallery */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-[#2a2a2a]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shots[imgIdx]}
            alt={`${project.title} screenshot ${imgIdx + 1}`}
            className="h-full w-full object-cover"
          />

          {hasMultiple && (
            <>
              <button
                onClick={() => setImgIdx((i) => (i - 1 + shots.length) % shots.length)}
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-black/50 text-2xl leading-none text-white transition-colors hover:bg-black/75"
              >
                ‹
              </button>
              <button
                onClick={() => setImgIdx((i) => (i + 1) % shots.length)}
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-black/50 text-2xl leading-none text-white transition-colors hover:bg-black/75"
              >
                ›
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {shots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    aria-label={`Image ${i + 1}`}
                    className={`h-2 cursor-pointer rounded-full border-none transition-all duration-200 ${
                      i === imgIdx ? "w-5 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="mb-3 text-[1.5rem] font-bold text-white">{project.title}</h3>
          <p className="mb-5 text-[0.93rem] leading-[1.7] text-[#b0b5be]">{project.description}</p>

          <ul className="mb-5 space-y-2">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-[0.88rem] text-[#c4c9d1]">
                <span className="mt-[3px] shrink-0 text-[#9ca3af]">▸</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-white/20 bg-white/[0.09] px-3 py-1 text-[0.78rem] font-semibold text-[#d7dbe2]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#6b7280_0%,#4b5563_100%)] px-4 py-3 text-[0.88rem] font-bold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M14 3h7v7M10 14L21 3M21 14v7h-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              {labels.viewProject}
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.08] px-4 py-3 text-[0.88rem] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.15]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 12 .5Z" />
              </svg>
              {labels.code}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
