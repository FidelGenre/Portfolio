import React from "react";

import styles from "./Hero.module.css";
import heroImage from '../../assets/hero/herito.png';

export const Hero = () => {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Fidel</h1>
        <p className={styles.description}>
        "I'm a Programmer. I write code so you don’t have to. <br /> Let’s connect!"
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={heroImage} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};