import styles from "./Projects.module.css"
import projectImage from "../../assets/projects/projectImage.png"

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project-1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quo in nostrum hic, eaque quisquam, eos vero suscipit vitae sequi nihil recusandae odit delectus ex quia perferendis. Accusantium, sed dolorum.",
      technologies: ["</>", "</>", "</>", "</>"],
      demoLink: "",
      isBlog: false,
    },
    {
      id: 2,
      title: "Project-2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quo in nostrum hic, eaque quisquam, eos vero suscipit vitae sequi nihil recusandae odit delectus ex quia perferendis. Accusantium, sed dolorum.",
      technologies: ["</>", "</>", "</>", "</>"],
      demoLink: "",
      isBlog: false,
    },
    {
      id: 3,
      title: "Project-3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quo in nostrum hic, eaque quisquam, eos vero suscipit vitae sequi nihil recusandae odit delectus ex quia perferendis. Accusantium, sed dolorum.",
      technologies: ["</>", "</>", "</>", "</>"],
      demoLink: "",
      isBlog: false,
    },
    {
      id: 4,
      title: "Project-4",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quo in nostrum hic, eaque quisquam, eos vero suscipit vitae sequi nihil recusandae odit delectus ex quia perferendis. Accusantium, sed dolorum.",
      technologies: ["</>", "</>", "</>", "</>"],
      demoLink: "",
      isBlog: false,
    },
    {
      id: 5,
      title: "Project-5",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quo in nostrum hic, eaque quisquam, eos vero suscipit vitae sequi nihil recusandae odit delectus ex quia perferendis. Accusantium, sed dolorum.",
      technologies: ["</>", "</>", "</>", "</>"],
      demoLink: "",
      isBlog: false,
    },
    {
      id: 6,
      title: "Project-6",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quo in nostrum hic, eaque quisquam, eos vero suscipit vitae sequi nihil recusandae odit delectus ex quia perferendis. Accusantium, sed dolorum.",
      technologies: ["</>", "</>", "</>", "</>"],
      demoLink: "",
      isBlog: false,
    },
  ]

  const ProjectCard = ({ project }) => {
    return (
      <div className={styles.projectCard}>
        <div className={styles.projectImage}>
          <img src={project.image || projectImage} alt={project.title} />
          <div className={styles.projectOverlay}>
            <div className={styles.projectLinks}>
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  <span>View</span>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <div className={styles.projectTechnologies}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.projectHeader}>
          <h1 className={styles.projectHeading}>
            My Recent <span className={styles.purple}>Works</span>
          </h1>
          <p className={styles.projectSubheading}>Here are a few projects I've worked on recently.</p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCardWrapper}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
