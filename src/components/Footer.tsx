import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-nebula border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-stellar">
              Continue sua Jornada Cósmica
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore o universo ainda mais com recursos educacionais das principais agências espaciais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/30"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="font-semibold text-primary mb-2">NASA</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Descubra as últimas missões espaciais e descobertas científicas
              </p>
              <a 
                href="https://www.nasa.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors"
              >
                Visitar NASA →
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/30"
            >
              <div className="text-4xl mb-4">🌌</div>
              <h4 className="font-semibold text-primary mb-2">ESA</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Programas de exploração e pesquisa da Agência Espacial Europeia
              </p>
              <a 
                href="https://www.esa.int" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors"
              >
                Visitar ESA →
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-card/30 backdrop-blur-sm rounded-lg p-6 border border-border/30"
            >
              <div className="text-4xl mb-4">🔭</div>
              <h4 className="font-semibold text-primary mb-2">Hubble</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Imagens incríveis do telescópio espacial e descobertas astronômicas
              </p>
              <a 
                href="https://hubblesite.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors"
              >
                Visitar Hubble →
              </a>
            </motion.div>
          </div>

          <div className="border-t border-border/30 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © 2024 Explorador do Sistema Solar. Conteúdo educacional fonte NASA & ESA.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <span>Feito para Feira de Ciências 2024</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-primary"
                >
                  🌟
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;