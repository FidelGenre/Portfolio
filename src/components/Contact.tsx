"use client";

import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import boxIcon from "@/assets/boxicon.png";

export default function Contact() {
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ sending: false, text: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ sending: true, text: t.contact.sending });

    try {
      const fd = new FormData(e.currentTarget);
      fd.append("access_key", "09f4b68c-4a39-4326-a907-ee51665d7b97");
      fd.append("subject", "New message from portfolio contact form");
      fd.append("replyto", formData.email);
      fd.append("to", "trabajosfidel4@gmail.com");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ sending: false, text: t.contact.success });
        setFormData({ name: "", email: "", message: "" });
        e.currentTarget.reset();
      } else {
        setStatus({ sending: false, text: data.message ? `❌ ${data.message}` : t.contact.error });
      }
    } catch {
      setStatus({ sending: false, text: t.contact.network });
    }
  };

  const fieldClass =
    "w-full border-0 border-b border-[rgba(156,163,175,0.3)] bg-transparent px-0 py-3 text-lg text-white outline-none transition-colors placeholder:text-[#565d68] focus:border-white";

  const infoItems = [
    {
      href: "mailto:trabajosfidel4@gmail.com",
      svg: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ),
      text: "trabajosfidel4@gmail.com",
    },
    {
      href: "tel:+543426102734",
      svg: (
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      ),
      text: "+54 3426 102734",
    },
    {
      href: null,
      svg: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ),
      text: t.contact.location,
    },
    {
      href: "https://linkedin.com/in/fidelgenre",
      svg: (
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      ),
      text: "linkedin.com/in/fidelgenre",
    },
    {
      href: "https://github.com/FidelGenre",
      svg: (
        <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0012 .5z" fill="currentColor" />
      ),
      text: "github.com/FidelGenre",
    },
  ];

  const floatingBox = (
    key: string,
    side: "left" | "right",
    style: { top: string; offset: string; size: string; rotate: number; opacity: string; duration: string; delay: string }
  ) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={key}
      src={boxIcon.src}
      alt=""
      aria-hidden="true"
      className={`contact-floating-box absolute ${style.size}`}
      style={{
        top: style.top,
        [side]: style.offset,
        opacity: style.opacity,
        ["--float-rot" as string]: `${style.rotate}deg`,
        transform: `rotate(${style.rotate}deg)`,
        animationDuration: style.duration,
        animationDelay: style.delay,
      }}
    />
  );

  return (
    <section id="contact" className="relative overflow-hidden bg-[#1a1a1a] px-6 py-24">
      <style>{`
        @keyframes contactBoxFloat {
          0%, 100% { transform: translateY(0) rotate(var(--float-rot, 0deg)); }
          50% { transform: translateY(-18px) rotate(var(--float-rot, 0deg)); }
        }
        .contact-floating-box {
          animation-name: contactBoxFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(156,163,175,0.05)_0%,transparent_55%)]" />

      <div className="relative z-[1] mx-auto max-w-[1500px]">
        {/* cajitas flotando — costado izquierdo */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-72 xl:block">
          {floatingBox("l1", "left", { top: "8%", offset: "60px", size: "w-16", rotate: -12, opacity: "0.9", duration: "5.5s", delay: "0s" })}
          {floatingBox("l2", "left", { top: "38%", offset: "10px", size: "w-12", rotate: 8, opacity: "0.6", duration: "4.8s", delay: "0.6s" })}
          {floatingBox("l3", "left", { top: "68%", offset: "40px", size: "w-10", rotate: -6, opacity: "0.35", duration: "6s", delay: "1.1s" })}
        </div>

        {/* cajitas flotando — costado derecho (espejadas) */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-72 xl:block">
          {floatingBox("r1", "right", { top: "12%", offset: "60px", size: "w-16", rotate: 12, opacity: "0.9", duration: "5.2s", delay: "0.3s" })}
          {floatingBox("r2", "right", { top: "42%", offset: "10px", size: "w-12", rotate: -8, opacity: "0.6", duration: "4.6s", delay: "0.9s" })}
          {floatingBox("r3", "right", { top: "70%", offset: "40px", size: "w-10", rotate: 6, opacity: "0.35", duration: "5.8s", delay: "1.4s" })}
        </div>

        <div className="relative mx-auto max-w-5xl">
        <p className="mb-2 text-center text-sm font-semibold text-[#9ca3af]">{t.contact.subtitle}</p>
        <h2 className="text-gradient-gray mb-12 text-center text-3xl font-bold leading-tight md:text-4xl">
          {t.contact.title}
        </h2>

        {/* panel único: info + form, misma card, con el ícono del sitio de marca de agua */}
        <div className="relative grid overflow-hidden rounded-3xl border border-[rgba(156,163,175,0.2)] bg-[#202020] shadow-[0_30px_70px_rgba(0,0,0,0.4)] lg:grid-cols-[0.85fr_1.15fr]">
          {/* left: info */}
          <div className="relative overflow-hidden border-b border-[rgba(156,163,175,0.15)] p-8 lg:border-r lg:border-b-0 lg:p-10">
            {/* marca de agua: mismo ícono del navbar/hero */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={boxIcon.src}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 opacity-[0.06]"
            />

            <h3 className="relative mb-6 text-xl font-bold text-white">{t.contact.infoTitle}</h3>

            <div className="relative flex flex-col">
              {infoItems.map((item, i) => {
                const inner = (
                  <>
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(156,163,175,0.3)] text-[#9ca3af] transition-all group-hover:border-white group-hover:text-white">
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                        {item.svg}
                      </svg>
                    </span>
                    <span className="min-w-0 break-words text-sm text-[#d1d5db] transition-colors [overflow-wrap:anywhere] group-hover:text-white">
                      {item.text}
                    </span>
                  </>
                );
                const rowClass = "group flex items-center gap-3 py-3";
                return item.href ? (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
                    {inner}
                  </a>
                ) : (
                  <div key={i} className={rowClass}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          {/* right: form */}
          <form onSubmit={handleSubmit} className="flex flex-col p-8 lg:p-10">
            <input type="hidden" name="from_name" value="Portfolio Contact" />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="mb-6">
              <label htmlFor="name" className="mb-1 block text-sm font-semibold text-[#9ca3af]">
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={fieldClass}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="mb-1 block text-sm font-semibold text-[#9ca3af]">
                {t.contact.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={fieldClass}
                required
              />
            </div>

            <div className="mb-8 flex flex-1 flex-col">
              <label htmlFor="message" className="mb-1 block text-sm font-semibold text-[#9ca3af]">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`${fieldClass} flex-1 resize-none`}
                required
              />
            </div>

            <button
              type="submit"
              disabled={status.sending}
              className="w-full cursor-pointer rounded-full border-2 border-[#4b5563] bg-transparent px-8 py-3 font-semibold text-white transition-all hover:border-white hover:bg-[rgba(255,255,255,0.1)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status.sending ? t.contact.sending : t.contact.send}
            </button>

            {status.text && <p className="mt-4 text-center text-[#d1d5db]">{status.text}</p>}
          </form>
        </div>
        </div>
      </div>
    </section>
  );
}
