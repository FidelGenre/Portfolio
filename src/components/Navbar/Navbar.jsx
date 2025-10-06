"use client"

import { useState } from "react"
import styles from "./Navbar.module.css"
import iconBox from "../../assets/boxicon.png"  // 🔹 nuevo icono

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          {/* 🔹 reemplazado el SVG por la imagen */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("home")
            }}
          >
            <img
              src={iconBox}
              alt="Logo icon"
              className={styles.heroImg}
            />
          </a>

          <ul className={styles.navLinks}>
            <li>
              <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("projects")}>Projects</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </li>
          </ul>

          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            ✕
          </button>
          <nav className={styles.mobileNav}>
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </nav>
        </div>
      )}
    </>
  )
}
