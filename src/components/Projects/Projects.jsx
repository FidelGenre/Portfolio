import styles from "./Projects.module.css"

// Importación de imágenes desde src/assets
import ecommerceImg from "../../assets/E-Commerce.png"
import studentImg from "../../assets/StudentSystem.png"
import socialImg from "../../assets/SocialNetwork.png"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce/Inventory-Gestor",
      description:
        "e-commerce project for a coffee beans brand. Users can explore different coffee products, view detailed information, add items to the cart, and place orders. The system also includes basic product and inventory management features",
      image: ecommerceImg,
      tags: ["React","JavaScript","CSS","Node.js","Express.js", "PostgreSQL"],
      projectUrl: "https://ecommerceclient-w2q7.onrender.com/",
      codeUrl: "https://github.com/fidelgenre/ECommerce"
    },
    {
      title: "University Management System",
      description:
        "University management system designed to manage academic entities. Allows registering, updating, and managing students through full CRUD operations. Focused on organizing student data and supporting basic administrative workflows. Project currently in progress.",
      image: studentImg,
      tags: ["React","JavaScript","CSS","Java", "SpringBoot", "PostgreSQL"],
      projectUrl: "https://unisystemclient.onrender.com/",
      codeUrl: "https://github.com/FidelGenre/StudentSystem"
    },
    {
      title: "Social Network",
      description:
        "Social network project designed to connect users through profiles and interactions. Allows user registration, content sharing, and basic social interactions such as following and engagement. Focused on core social features and user experience.",
      image: socialImg,
      tags: ["Next","TypeScript","Tailwind CSS","Java","SpringBoot","PostgreSQL"],
      projectUrl: "https://socialnetworkclient-oyjw.onrender.com/",
      codeUrl: "https://github.com/FidelGenre/SocialNetwork"
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

        {/* Botón inferior sin ícono, como antes */}
        <div className={styles.githubSection}>
          <a
            href="https://github.com/FidelGenre?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
