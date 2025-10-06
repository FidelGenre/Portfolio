import styles from "./Footer.module.css"
import iconBox from "../../assets/boxicon.png"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* 🔹 Reemplazamos el SVG por el mismo icono de la Navbar */}
          <div className={styles.logo}>
            <img
              src={iconBox}
              alt="Fidel Genre logo"
              className={styles.iconImage}
            />
          </div>

          <div className={styles.links}>
            <a
              href="https://github.com/FidelGenre"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fidelgenre/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/fidelgenre"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Instagram
            </a>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.copyright}>
          <p>© 2025 Fidel Genre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
