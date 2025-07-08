import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { MouseTrail } from "./components/MouseTrail/MouseTrail";
import { Navbar } from "./components/NavBar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { ScrollToTopButton } from "./components/ScrollToTopButton/ScrollToTopButton";
import videoBg from "./assets/background/fondo5.mp4";

function App() {
  return (
    <div className={styles.App}>
      <video src={videoBg} autoPlay loop muted></video>
      <MouseTrail />
      <ScrollToTopButton />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;