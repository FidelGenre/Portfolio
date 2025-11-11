"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.greeting}>Hello, I'm</p>
        <h1 className={styles.name}>Fidel Genre</h1>
        <h2 className={styles.title}>Software Developer</h2>

        <p className={styles.description}>
          Crafting web experiences with modern technologies and clean code.
        </p>
        <p className={styles.tagline}>
          I write the code so you don’t have to — let’s connect!
        </p>

        <div className={styles.buttons}>
          <button
            className={styles.primaryButton}
            onClick={() => scrollToSection("projects")}
          >
            View Work
          </button>
          <button
            className={styles.secondaryButton}
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </button>
        </div>

        {/* 🔽 FLECHITA que lleva al ABOUT */}
        <div
          className={styles.scrollIndicator}
          onClick={() => scrollToSection("about")}
          style={{ cursor: "pointer" }}
          title="Go to About"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14m0 0l-7-7m7 7l7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
