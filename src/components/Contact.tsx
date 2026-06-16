"use client";

import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";

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

  const inputClass =
    "w-full min-w-0 rounded-xl border border-[rgba(156,163,175,0.2)] bg-[rgba(55,65,81,0.5)] p-4 text-base text-white transition-all duration-300 [overflow-wrap:anywhere] focus:border-[rgba(156,163,175,0.6)] focus:bg-[rgba(55,65,81,0.8)] focus:shadow-[0_0_0_3px_rgba(156,163,175,0.1)] focus:outline-none";

  const infoItems = [
    {
      svg: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ),
      text: "trabajosfidel4@gmail.com",
    },
    {
      svg: (
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      ),
      text: "+3426102734",
    },
    {
      svg: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ),
      text: t.contact.location,
    },
  ];

  return (
    <section id="contact" className="relative bg-[#1a1a1a] px-8 py-24 [overflow-x:clip]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(156,163,175,0.05)_0%,transparent_50%)]" />

      <div className="relative z-[1] mx-auto max-w-[1400px]">
        <h2 className="text-gradient-gray mb-4 text-center text-[clamp(2rem,5vw,3rem)] font-bold">
          {t.contact.title}
        </h2>
        <p className="mx-auto mb-12 max-w-[700px] text-center text-[1.125rem] leading-[1.6] text-[#9ca3af]">
          {t.contact.subtitle}
        </p>

        <div className="grid gap-12 [grid-template-columns:minmax(0,1fr)] md:[grid-template-columns:minmax(0,1fr)_minmax(0,1.5fr)]">
          {/* Info */}
          <div className="w-full max-w-full overflow-hidden rounded-3xl border border-[rgba(156,163,175,0.2)] bg-[rgba(38,38,38,0.8)] p-10 backdrop-blur-[10px] transition-all duration-300 hover:border-[rgba(156,163,175,0.4)] hover:shadow-[0_10px_40px_rgba(107,114,128,0.15)]">
            <h3 className="mb-8 text-[1.75rem] font-bold text-white">{t.contact.infoTitle}</h3>

            {infoItems.map((item, i) => (
              <div
                key={i}
                className="mb-4 flex items-center gap-4 rounded-2xl border border-[rgba(156,163,175,0.2)] bg-[linear-gradient(135deg,rgba(107,114,128,0.05),rgba(75,85,99,0.05))] p-6 transition-all duration-300 last:mb-0 hover:translate-x-[5px] hover:border-[rgba(156,163,175,0.4)] hover:bg-[linear-gradient(135deg,rgba(107,114,128,0.1),rgba(75,85,99,0.1))]"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#6b7280,#4b5563)] text-white shadow-[0_4px_15px_rgba(107,114,128,0.3)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    {item.svg}
                  </svg>
                </div>
                <span className="min-w-0 break-words text-base text-[#e5e7eb] [overflow-wrap:anywhere]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-full overflow-hidden rounded-3xl border border-[rgba(156,163,175,0.2)] bg-[rgba(38,38,38,0.8)] p-10 backdrop-blur-[10px]"
          >
            <input type="hidden" name="from_name" value="Portfolio Contact" />
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="mb-6">
              <label htmlFor="name" className="mb-2 block text-base font-semibold text-[#e5e7eb]">
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block text-base font-semibold text-[#e5e7eb]">
                {t.contact.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-base font-semibold text-[#e5e7eb]">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`${inputClass} min-h-[150px] resize-y`}
                required
              />
            </div>

            <button
              type="submit"
              disabled={status.sending}
              className="w-full cursor-pointer rounded-xl border-none bg-[linear-gradient(135deg,#6b7280_0%,#4b5563_100%)] p-[1.125rem] text-base font-semibold text-white shadow-[0_4px_15px_rgba(107,114,128,0.4)] transition-all duration-300 hover:-translate-y-[3px] hover:bg-[linear-gradient(135deg,#9ca3af_0%,#6b7280_100%)] hover:shadow-[0_6px_25px_rgba(107,114,128,0.6)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.sending ? t.contact.sending : t.contact.send}
            </button>

            {status.text && <p className="mt-4 text-center text-[#e5e7eb]">{status.text}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
