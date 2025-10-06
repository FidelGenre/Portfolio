import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { MouseTrail } from "./components/MouseTrail/MouseTrail"
import { ScrollToTopButton } from "./ScrollToTopButton/ScrollToTopButton"

export default function Home() {
  return (
    <main className="dark">
      <MouseTrail />
      <ScrollToTopButton />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
