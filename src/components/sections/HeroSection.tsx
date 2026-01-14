import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-cream min-h-[80vh] overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Decorative Circles */}
      <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary/20 rounded-full" />
      <div className="absolute bottom-40 left-40 w-20 h-20 border-2 border-primary/20 rounded-full" />
      <div className="absolute top-40 left-1/4 w-4 h-4 bg-primary/30 rounded-full" />
      <div className="absolute top-60 left-1/3 w-3 h-3 bg-primary/20 rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="section-subtitle">Comprometidos con el Talento</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Asociándonos <br />
              <span className="text-primary">Contigo</span> para tus <br />
              Necesidades de <br />
              Recursos Humanos.
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              A través de nosotros puedes lograr lo que deseas. 
              Conectamos el mejor talento con las mejores oportunidades.
            </p>
            <Button className="btn-primary group">
              CONOCER MÁS
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Profesional de recursos humanos"
                className="w-full h-[600px] object-cover object-top rounded-lg shadow-2xl"
              />
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary/20 rounded-lg -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
