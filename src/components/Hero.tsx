import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const scrollToFirstPlanet = () => {
    const element = document.querySelector('[data-section="sun"]');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={heroRef}
      data-section="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div 
        className="absolute inset-0 backdrop-blur-[1px] will-change-transform" 
        style={{
          backgroundImage: "url('/assets/background/space-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
          y: bgY
        }}
      />
      
      {/* Content with parallax */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mx-auto will-change-transform"
        style={{
          y: contentY,
          opacity: contentOpacity
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-stellar leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            Explorador do
            <br />
            <span className="text-glow">Sistema Solar</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Embarque numa jornada interativa através da nossa vizinhança cósmica. 
            Descubra as maravilhas dos planetas, luas e do Sol através de experiências 
            3D imersivas e ciência de ponta.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button 
              size="lg" 
              className="btn-cosmic text-lg px-8 py-6 hover:shadow-stellar transition-all duration-300"
              onClick={scrollToFirstPlanet}
            >
              🚀 Iniciar Exploração
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-primary/50 hover:border-primary hover:shadow-cosmic transition-all duration-300"
            >
              📚 Saiba Mais
            </Button>
          </motion.div>

          <motion.div
            className="pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <div className="scroll-indicator text-primary/70">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm font-medium">Role para explorar</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl"
                >
                  ↓
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gradient fade transition */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(transparent, hsl(var(--background)))",
          opacity: gradientOpacity
        }}
      />

      {/* Floating cosmic elements */}
      <motion.div
        className="absolute top-20 left-20 text-6xl opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        🌟
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-20 text-4xl opacity-30"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🪐
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 left-10 text-3xl opacity-25"
        animate={{ x: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ☄️
      </motion.div>
    </section>
  );
};

export default Hero;