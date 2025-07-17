import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { MouseTrail } from "./components/MouseTrail/MouseTrail";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { ScrollToTopButton } from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <div className={styles.App}>
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