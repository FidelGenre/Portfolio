import { useEffect } from "react";
import styles from "./ScrollToTopButton.module.css";
import arrowUp from "../assets/arrowUp.png";

export const ScrollToTopButton = () => {
  useEffect(() => {
    const boton = document.getElementById("BotonArriba");

    const handleScroll = () => {
      const scroll = document.documentElement.scrollTop;
      if (scroll > 100) {
        boton.classList.add(styles.visible);
      } else {
        boton.classList.remove(styles.visible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <img
      id="BotonArriba"
      src={arrowUp}
      alt="Volver arriba"
      className={styles.scrollToTop}
      onClick={scrollToTop}
    />
  );
};