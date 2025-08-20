import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlanetSection from "@/components/PlanetSection";
import Footer from "@/components/Footer";
import { StarsBackground } from "@/components/StarsBackground";
import { planets } from "@/data/planets";
import { preloadModels } from "@/components/PlanetGLB";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description
    document.title = "Explorador do Sistema Solar - Jornada 3D Interativa";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore nosso sistema solar através de modelos 3D imersivos e animações ativadas por scroll. Conteúdo educacional sobre planetas, luas e o Sol para entusiastas da ciência.');
    }
    
    // Preload all GLB models for better performance
    preloadModels();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Fixed navigation */}
      <Navbar />
      
      {/* Hero section */}
      <Hero />
      
      {/* Stars background for everything after Hero */}
      <StarsBackground starColor="#ffffff" speed={60} factor={0.03}>
        {/* Planet sections with scroll-triggered animations */}
        <div className="relative z-10">
          {planets.map((planet, index) => (
            <PlanetSection
              key={planet.id}
              planet={planet}
              index={index}
            />
          ))}
        </div>
        
        {/* Footer with educational resources */}
        <Footer />
      </StarsBackground>
    </div>
  );
};

export default Index;
