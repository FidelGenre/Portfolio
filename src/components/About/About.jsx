import { useState } from "react";
import styles from "./About.module.css";
import meImage from "../../assets/aboutImage.jpg";

export default function About() {
  const [showAllTech, setShowAllTech] = useState(false);
  const [showAllTools, setShowAllTools] = useState(false);

  const technologies = [
    { name: "Next.js", icon: "▲" },
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Solidity", icon: "⛓️" },
    { name: "Foundry", icon: "⚒️" },
    { name: "Node.js", icon: "📗" }, // Agregado
    { name: "TypeScript", icon: "TS" },
    { name: "JavaScript", icon: "JS" },
    { name: "JAVA", icon: "☕" },
    { name: "SpringBoot", icon: "🌱" },
    { name: "PostgreSQL", icon: "🐘" },
  ];

  const tools = [
    { name: "Git", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
    { name: "Wagmi/Viem", icon: "🔌" },
    { name: "Alchemy", icon: "⚗️" },
    { name: "Pinata/IPFS", icon: "📌" },
    { name: "VS Code", icon: "💙" },
    { name: "IntellijIdea", icon: "🧠" },
    { name: "Postman", icon: "📮" },
    { name: "GitHub", icon: "🐱" },
    { name: "Figma", icon: "🎨" },
    { name: "Maven", icon: "⚙️" },
    { name: "Npm", icon: "📦" }, // Importante ya que usas Node
  ];

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      ),
      title: "Frontend",
      subtitle: "Developer",
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
      subtitle: "Developer",
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutWrapper}>
        <h2 className={styles.titleAbout}>About Me</h2>

        <div className={styles.aboutMain}>
          <div className={styles.aboutText}>
            <p>
              <p>
                I'm Fidel Genre, a Software Engineer dedicated to building scalable
                digital solutions that bridge the gap between traditional software
                architectures and the decentralized web.
              </p>
            </p>
            <p>
              I specialize in crafting high-performance applications with a strong
              focus on security, efficiency, and user experience. Whether I'm
              developing robust backend systems or secure smart contracts, I enjoy
              transforming complex challenges into elegant, production-ready solutions.
            </p>
            <p>
              I am driven by a constant curiosity for emerging technologies and a
              commitment to clean code. My goal is to create impactful digital
              experiences that are both functional and future-proof.
            </p>

            <div className={styles.ctaRow}>
              <a
                href="https://drive.google.com/file/d/1Ya09emnd8xseyywXLFAfjrIjISqAknjb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewCV}
                aria-label="View CV on Google Drive"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6z" />
                </svg>
                View CV
              </a>
            </div>
          </div>

          <div className={styles.aboutImage}>
            <div className={styles.imageContainer}>
              <img src={meImage} alt="About me" className={styles.myImage} />
            </div>
          </div>
        </div>

        <section className={styles.overview}>
          <div className={styles.overviewContainer}>
            <div className={styles.overviewHeader}>
              <span className={styles.overviewLabel}>INTRODUCTION</span>
              <h2 className={styles.overviewTitle}>Overview.</h2>
              <p className={styles.overviewDescription}>
                These are the areas I work on, along with the technologies and tools I use to build
                efficient, scalable, and user-friendly solutions.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.serviceIconWrapper}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.skillsContainer}>
          {/* Technologies */}
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>Technologies</h3>
            <div
              className={`${styles.skillsGrid} ${styles.techGrid} ${showAllTech ? styles.expanded : ""
                }`}
            >
              {technologies.map((tech, index) => (
                <div key={index} className={`${styles.skillItem} ${styles.techItem}`}>
                  <span className={styles.skillIcon}>{tech.icon}</span>
                  <span className={styles.skillName}>{tech.name}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={styles.showMoreBtn}
              onClick={() => setShowAllTech((prev) => !prev)}
            >
              <span>{showAllTech ? "View Less" : "View More"}</span>
              <span
                className={`${styles.arrow} ${showAllTech ? styles.arrowUp : ""}`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
          </div>

          {/* Tools & Platforms */}
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>Tools & Platforms</h3>
            <div
              className={`${styles.skillsGrid} ${styles.toolGrid} ${showAllTools ? styles.expanded : ""
                }`}
            >
              {tools.map((tool, index) => (
                <div key={index} className={`${styles.skillItem} ${styles.toolItem}`}>
                  <span className={styles.skillIcon}>{tool.icon}</span>
                  <span className={styles.skillName}>{tool.name}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={styles.showMoreBtn}
              onClick={() => setShowAllTools((prev) => !prev)}
            >
              <span>{showAllTools ? "View Less" : "View More"}</span>
              <span
                className={`${styles.arrow} ${showAllTools ? styles.arrowUp : ""}`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
