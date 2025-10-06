import styles from "./Projects.module.css"

// ✅ Importación correcta de imágenes desde src/assets/
import ecommerceImg from "../../assets/E-Commerce.png"
import studentImg from "../../assets/StudentSystem.png"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce",
      description:
        "Restaurant e-commerce project built for my portfolio. Users can browse the menu, add items to the cart, and place orders online. Developed with React and Node.js/Express.",
      image: ecommerceImg,
      tags: ["React", "Express.js", "PostgreSQL"],
      projectUrl: "https://e-commerce-nine-kohl-13.vercel.app/",
      codeUrl: "https://github.com/fidelgenre/E-Commerce"
    },
    {
      title: "Student Management System",
      description:
        "Student management system. Allows registering and managing students with CRUD operations. Developed with Java Spring Boot and React, not yet finished.",
      image: studentImg,
      tags: ["React", "SpringBoot", "MongoDB"],
      projectUrl: "https://studentsystemf.onrender.com/",
      codeUrl: "https://github.com/FidelGenre/StudentSystem"
    },
    {
      title: "Project-3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quo in nostrum hic, eaque quia quam, eos vero suscipit vitae sequi nihil recusandae odit delectus ex quia perferendis. Accusantium, sed dolorum.",
      image: "",
      tags: ["</>", "</>", "</>", "</>"],
      projectUrl: "https://your-live-project-url.com",
      codeUrl: "https://github.com/tuusuario/tu-repo"
    },
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Recent Works</h2>
        <p className={styles.subtitle}>Here are a few projects I've worked on recently.</p>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  loading="lazy"
                />

                <div className={styles.imageActions}>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.viewBtn}`}
                    aria-label={`View project: ${project.title}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M14 3h7v7M10 14L21 3M21 14v7h-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    View Project
                  </a>

                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.codeBtn}`}
                    aria-label={`View code on GitHub: ${project.title}`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 12 .5Z" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Botón que dirige a tu GitHub */}
        <div className={styles.githubSection}>
          <a
            href="https://github.com/FidelGenre?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            {/* Ícono de GitHub + texto */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ marginRight: "8px" }}
            >
              <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.26c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 12 .5Z" />
            </svg>
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
