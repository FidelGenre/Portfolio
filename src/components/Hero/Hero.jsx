import React from "react";

import styles from "./Hero.module.css";
import heroImage from '../../assets/hero/herito.png';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Fidel</h1>
        <p className={styles.description}>
        I'm a full-stack developer who enjoys building cool things on the web. Let’s connect!
        </p>
        <a href="mailto:trabajosfidel4@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={heroImage} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <div className={styles.moreBlur} />
      <div className={styles.lastBlur} />
    </section>
  );
};