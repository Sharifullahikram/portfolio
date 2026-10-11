import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Process from "./sections/Process";
import Contact from "./sections/Contact";
import useActiveSection from "./hooks/useActiveSection";

const sectionIds = ["home", "about", "skills", "projects", "experience", "process", "contact"];

export default function App() {
  const active = useActiveSection(sectionIds);
  // "process" has no nav item of its own, so it highlights Experience.
  const navActive = active === "process" ? "experience" : active;

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Navbar active={navActive} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
