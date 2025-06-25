"use client";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import { Footer } from "./components/Footer";
import { ModeToggle } from "./components/ModeToggle";
import { BiListUl } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { ScrollTop } from "./components/ScrollTop";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certification from "./components/Certification";
import { ScrollAnimate } from "./components/scroll-animate";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const sectionIds = [
      "hero",
      "about",
      "skills",
      "certification",
      "projects",
      "resume",
    ];

    const handleScroll = () => {
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        activeSection={activeSection}
        toggleMobileMenu={toggleMobileMenu}
      />

      <div className="ml-0 lg:ml-[300px]">
        <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
          <ModeToggle />
          <Button
            variant="outline"
            size="icon"
            className="text-2xl lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <BiListUl />
          </Button>
        </div>

        <Hero />
        <ScrollAnimate animation="slideUp" duration={0.4}>
          <About />
        </ScrollAnimate>
        <Skills />
        <ScrollAnimate animation="slideRight" duration={0.4}>
          <Certification />
        </ScrollAnimate>
        <ScrollAnimate animation="slideRight" duration={0.4}>
          <Projects />
        </ScrollAnimate>
        <ScrollAnimate animation="slideUp" duration={0.4}>
          <Resume />
        </ScrollAnimate>
        <Footer />
        <ScrollTop />
      </div>
    </main>
  );
}
