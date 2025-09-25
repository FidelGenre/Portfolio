import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <section id="navbar">
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen((v) => !v)}
        />

        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        >
          <li className={styles.navItem}>
          <a href="navbar" onClick={(e) => handleClick(e, "navbar")}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" onClick={(e) => handleClick(e, "about")}>About</a>
          </li>
          <li className={styles.navItem}>
            <a href="#projects" onClick={(e) => handleClick(e, "projects")}>Projects</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" onClick={(e) => handleClick(e, "contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    </section>
  );
};
