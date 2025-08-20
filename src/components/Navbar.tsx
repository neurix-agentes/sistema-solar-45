import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { planets } from "@/data/planets";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("[data-section]");
      let current = "hero";
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = section.getAttribute("data-section") || "hero";
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-stellar cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          🌌 Explorador do Sistema Solar
        </motion.div>

        <div className="hidden md:flex items-center space-x-1">
          <Button
            variant={activeSection === "hero" ? "default" : "ghost"}
            size="sm"
            onClick={() => scrollToSection("hero")}
            className="text-sm"
          >
            Início
          </Button>
          
          {planets.map((planet) => (
            <Button
              key={planet.id}
              variant={activeSection === planet.id ? "default" : "ghost"}
              size="sm"
              onClick={() => scrollToSection(planet.id)}
              className="text-sm"
            >
              {planet.name}
            </Button>
          ))}
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            ☰
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;