import React from "react";

import styles from "./ProjectCard.module.css";
import projectImage from "../../assets/projects/projectImage.png";

export const ProjectCard = ({
  project: { title, description, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={projectImage}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul>
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link}>
          View
        </a>
      </div>
    </div>
  );
};