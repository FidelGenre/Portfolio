import React from "react";

import styles from "./About.module.css";
import aboutImage from '../../assets/about/aboutImage.jpg';
import cursorIcon from '../../assets/about/cursorIcon.png';
import serverIcon from '../../assets/about/serverIcon.png';
import aboutLogo from '../../assets/about/aboutLogo.png';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={aboutLogo} alt="logobox"/>
            <div className={styles.aboutItemText}>
            <h3>About Me</h3>
              <p>
              My name is Fidel Genre, and I am a full-stack developer with a passion for creating beautiful and functional web applications.
              I’m finishing my degree this year, currently working as a freelancer, and looking for new opportunities.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Im building responsive
                and optimized sites with HTML, CSS, JavaScript and React.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Im using to developing fast and optimised back-end systems
                and APIs implementation with PHP/Node and SQL/NoSQL.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};