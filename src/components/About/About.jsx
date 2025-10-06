import styles from "./About.module.css";
import meImage from "../../assets/aboutImage.jpg";

export default function About() {
  const technologies = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "JS" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "📗" },
    { name: "Express.js", icon: "🚀" },
    { name: "JAVA", icon: "☕" },
    { name: "SpringBoot", icon: "🌱" },
    { name: "RESTful APIs", icon: "🔗" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
  ];

  const tools = [
    { name: "Git", icon: "🐙" },
    { name: "VS Code", icon: "💙" },
    { name: "Figma", icon: "🎨" },
    { name: "Docker", icon: "🐳" },
    { name: "Vercel", icon: "▲" },
    { name: "Hosting", icon: "🌐" },
    { name: "GitHub", icon: "🐱" },
    { name: "Maven", icon: "⚙️" },
    { name: "Npm", icon: "📦" },
    { name: "Render", icon: "☁️" },
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
              I'm Fidel Genre, a passionate full-stack developer currently in my
              final year of university. I specialize in frontend development and
              backend development, bringing ideas to life through clean code and
              thoughtful design.
            </p>
            <p>
              I love crafting beautiful, functional digital experiences with a
              strong focus on performance and user experience. Whether it's
              building web apps, I enjoy turning complex problems into elegant,
              scalable solutions.
            </p>
            <p>
              Outside of coding, I stay curious by exploring new technologies,
              contributing to open source, and continuously learning to grow as a
              developer.
            </p>

            <div className={styles.ctaRow}>
              <a
                href="https://drive.google.com/file/d/1d9XvUgy1OfpkU3SSfUdJOG7dDp4fEcpr/view?usp=sharing"
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
          <div className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>Technologies</h3>
            <div className={styles.skillsGrid}>
              {technologies.map((tech, index) => (
                <div key={index} className={`${styles.skillItem} ${styles.techItem}`}>
                  <span className={styles.skillIcon}>{tech.icon}</span>
                  <span className={styles.skillName}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>Tools & Platforms</h3>
            <div className={styles.skillsGrid}>
              {tools.map((tool, index) => (
                <div key={index} className={`${styles.skillItem} ${styles.toolItem}`}>
                  <span className={styles.skillIcon}>{tool.icon}</span>
                  <span className={styles.skillName}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
