import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.content}>
      <p className={styles.eyebrow}>Hello, I'm</p>
        <h1 className={styles.title}>Fidel Genre</h1>
        <h2 className={styles.subtitle}>Software Developer</h2>
        <p className={styles.description}>
        Crafting web experiences with modern technologies
        and clean code.<br/> I write the code so you don’t have to — let’s connect!
        </p>
        <div className={styles.btngroup}>
        <a href="#projects" className={styles.contactBtn}>
        View Work</a>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
        </div>
        <div className={styles.downArrow}>↓</div>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};