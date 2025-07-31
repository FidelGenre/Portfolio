import styles from "./About.module.css"
import meImage from "../../assets/about/aboutImage.jpg";

export function About() {
  const technologies = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "JS" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "📗" },
    { name: "PHP", icon: "H" },
    { name: "Express.js", icon: "🚀" },
    /*{ name: "C#", icon: "#" },*/
    { name: "MySQL", icon: "🐬" },
    { name: "MongoDB", icon: "🍃" },
    { name: "RESTful APIs", icon: "🔗" },
  ]

  const tools = [
    { name: "Git", icon: "🐙" },
    { name: "VS Code", icon: "💙" },
    { name: "Figma", icon: "🎨" },
    { name: "Docker", icon: "🐳" },
    { name: "Vercel", icon: "▲" },
    { name: "Wordpress", icon: "🌐" },
    { name: "GitHub", icon: "🎮" },
    { name: "Chrome DevTools", icon: "🔧" },
    { name: "Npm", icon: "📦" },
    { name: "XAMPP", icon: "🛠️" },
  ]

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
    /*
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Game",
      subtitle: "Developer",
    },
    */
  ]

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutWrapper}>
        <h2 className={styles.titleAbout}>About Me</h2>

        <div className={styles.aboutMain}>
          <div className={styles.aboutText}>
            <p>
            I'm Fidel Genre, a passionate full-stack developer currently in my final year of university. I specialize in frontend development and backend development, bringing ideas to life through clean code and thoughtful design.
            </p>
            <p>
            I love crafting beautiful, functional digital experiences with a strong focus on performance and user experience. Whether it's building web apps, I enjoy turning complex problems into elegant, scalable solutions.
            </p>
            <p>
            Outside of coding, I stay curious by exploring new technologies, contributing to open source, and continuously learning to grow as a developer.
            </p>

            <div className={styles.experienceStats}>
              <div className={styles.statItem}>
                <h3>x+</h3>
                <p>Years Experience</p>
              </div>
              <div className={styles.statItem}>
                <h3>x+</h3>
                <p>Projects Completed</p>
              </div>
              <div className={styles.statItem}>
                <h3>x+</h3>
                <p>Happy Clients</p>
              </div>
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
              I'm a passionate software developer focused on frontend development and backend development. I enjoy creating intuitive user interfaces, building robust backend systems, and bringing interactive experiences to life. I'm a fast learner who works closely with clients to deliver efficient, scalable, and user-friendly solutions that solve real-world problems.
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
  )
}
