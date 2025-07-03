import React from "react";

import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/emailIcon.png";
import linkedInIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:trabajosfidel4@gmail.com">trabajosfidel4@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedInIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/fidelgenre/">linkedin.com/fidelgenre</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.linkedin.com/in/fidelgenre/">github.com/fidelgenre</a>
        </li>
      </ul>
    </footer>
  );
};