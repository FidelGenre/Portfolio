"use client"

import { useState } from "react"
import styles from "./Contact.module.css"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState({ sending: false, text: "" })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ sending: true, text: "Sending..." })

    try {
      const fd = new FormData(e.target)
      // ✅ Tu access key
      fd.append("access_key", "09f4b68c-4a39-4326-a907-ee51665d7b97")
      // Opcionales pero recomendados
      fd.append("subject", "New message from portfolio contact form")
      fd.append("replyto", formData.email)
      fd.append("to", "trabajosfidel4@gmail.com")

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      })

      const data = await res.json()
      console.log("Web3Forms response:", data)

      if (data.success) {
        setStatus({ sending: false, text: "✅ Message sent successfully!" })
        setFormData({ name: "", email: "", message: "" })
        e.target.reset()
      } else {
        setStatus({ sending: false, text: `❌ ${data.message || "Something went wrong."}` })
      }
    } catch (err) {
      console.error("Network error:", err)
      setStatus({ sending: false, text: "❌ Network error. Please try again." })
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>
          Do you have a project in mind? Don’t hesitate to contact me. I’m always open to discussing new projects,
          creative ideas, or opportunities.
        </p>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Contact Information</h3>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6l-10 7L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>trabajosfidel4@gmail.com</span>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>+3426102734</span>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>Argentina</span>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="hidden" name="from_name" value="Portfolio Contact" />
            <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows="6"
                required
              />
            </div>

            <button type="submit" className={styles.submitButton} disabled={status.sending}>
              {status.sending ? "Sending..." : "Send Message"}
            </button>

            {status.text && <p className={styles.status}>{status.text}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
