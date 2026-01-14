import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-secondary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-secondary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-secondary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-primary uppercase tracking-wider text-sm font-semibold mb-4 block">
            ¿Listo para Empezar?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 leading-tight">
            Encuentra tu Próximo Candidato Ideal o tu Trabajo Soñado
          </h2>
          <p className="text-secondary-foreground/70 text-lg mb-10">
            Únete a miles de empresas y profesionales que confían en nosotros 
            para conectar el mejor talento con las mejores oportunidades.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-primary group">
              COMENZAR AHORA
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <a 
              href="tel:+528001234567"
              className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Phone className="text-primary-foreground" size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm opacity-70">Llámanos ahora</p>
                <p className="font-bold">(800) 123-4567</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
