import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MouseTrail } from "@/components/MouseTrail";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <main>
      <MouseTrail />
      <ScrollToTopButton />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
