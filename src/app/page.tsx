import AboutSection from "./components/AboutSection";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import DarkModeToggle from "./components/DarkModetoggle";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <HeroSection />
      <AboutSection />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <DarkModeToggle />
    </>
  );
}
