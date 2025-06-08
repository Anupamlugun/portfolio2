"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import { useEffect, useState } from "react";
import Resume from "./components/Resume";
import { Footer } from "./components/Footer";
import { ModeToggle } from "./components/ModeToggle";
import { BiListUl } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { ScrollTop } from "./components/ScrollTop";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <main className="relative">
      <Header mobileMenuOpen={mobileMenuOpen} />

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

        <Hero toggleMobileMenu={toggleMobileMenu} />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Footer />
        <ScrollTop />
      </div>
    </main>
  );
}
