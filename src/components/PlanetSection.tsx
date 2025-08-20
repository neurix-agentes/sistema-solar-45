import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Planet3D from "./Planet3D";
import SunSketchfab from "./SunSketchfab";
import { Planet } from "@/data/planets";

interface PlanetSectionProps {
  planet: Planet;
  index: number;
}

const PlanetSection = ({ planet, index }: PlanetSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPlanet, setShowPlanet] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, { 
    margin: "-20% 0px -20% 0px"
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowPlanet(true), 200);
      return () => clearTimeout(timer);
    } else {
      setShowPlanet(false);
    }
  }, [isInView]);

  const isLeftAligned = index % 2 === 0;
  const size = planet.id === "sun" ? 1.5 : planet.id === "jupiter" || planet.id === "saturn" ? 1.2 : 1;
  const rotationSpeed = planet.id === "sun" ? 0.005 : planet.id === "jupiter" ? 0.02 : 0.01;

  return (
    <section
      ref={sectionRef}
      data-section={planet.id}
      className="planet-section relative"
    >
      <div className="planet-sticky">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isLeftAligned ? '' : 'lg:grid-flow-col-dense'}`}>
            
            {/* Planet 3D Model */}
            <motion.div
              ref={planetRef}
              className={`relative aspect-square ${isLeftAligned ? 'lg:order-1' : 'lg:order-2'}`}
              style={{ y, opacity }}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={showPlanet ? { 
                opacity: 1, 
                scale: 1, 
                rotateY: 0 
              } : { 
                opacity: 0, 
                scale: 0.5, 
                rotateY: -90 
              }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
            >
              <div className="absolute inset-0 rounded-full opacity-30 animate-pulse"
                   style={{ boxShadow: `0 0 100px ${planet.glowColor}` }} />
              
              {planet.id === "sun" ? (
                <SunSketchfab isVisible={showPlanet} />
              ) : (
                <Planet3D
                  color={planet.color}
                  glowColor={planet.glowColor}
                  size={size}
                  rotationSpeed={rotationSpeed}
                  isVisible={showPlanet}
                />
              )}
            </motion.div>

            {/* Planet Information */}
            <motion.div
              className={`space-y-6 ${isLeftAligned ? 'lg:order-2' : 'lg:order-1'}`}
              initial={{ opacity: 0, x: isLeftAligned ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeftAligned ? 50 : -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div>
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold mb-4 text-stellar"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {planet.name}
                </motion.h2>
                
                <motion.p 
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {planet.summary}
                </motion.p>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-2">Temperatura</h4>
                    <p className="text-sm text-muted-foreground">{planet.temperature}</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-2">Diâmetro</h4>
                    <p className="text-sm text-muted-foreground">{planet.diameter}</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-2">Distância</h4>
                    <p className="text-sm text-muted-foreground">{planet.distance}</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-2">Duração do Dia</h4>
                    <p className="text-sm text-muted-foreground">{planet.rotation}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <Button
                  onClick={() => setIsExpanded(!isExpanded)}
                  variant="outline"
                  className="mb-4 hover:shadow-cosmic transition-all duration-300"
                >
                  {isExpanded ? "Mostrar Menos" : "Saiba Mais"} 📖
                </Button>

                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                      <CardContent className="p-6 space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Composição</h4>
                          <p className="text-sm text-muted-foreground">{planet.composition}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Atmosfera</h4>
                          <p className="text-sm text-muted-foreground">{planet.atmosphere}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Fatos Interessantes</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {planet.extra.map((fact, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {fact}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanetSection;