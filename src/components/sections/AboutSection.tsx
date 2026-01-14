import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle">Sobre Nuestra Agencia</span>
            <h2 className="section-title mb-6">
              Socios de Staffing: Agencia de Reclutamiento Confiable y Eficiente
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Un hecho establecido hace mucho tiempo es que un lector se distraerá con el contenido legible de las páginas al mirar su diseño. El punto de usar lorem ipsum es que tiene una distribución de letras más o menos normal.
            </p>
            
            <button className="btn-outline group mb-10">
              Más Sobre Nosotros
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>

            <div className="border-l-4 border-primary pl-6">
              <h4 className="font-semibold text-secondary text-lg mb-2">
                Camino para empleadores y empleados.
              </h4>
              <div className="flex items-center gap-4 mt-4">
                <div className="w-16 h-16 rounded-full bg-secondary overflow-hidden">
                  <img 
                    src={aboutTeam} 
                    alt="Fundador" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-secondary">Daniel Primera</h5>
                  <p className="text-muted-foreground text-sm">Fundador</p>
                </div>
                <div className="ml-4 font-signature text-2xl text-primary italic">
                  Daniel P.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-8 rounded-lg shadow-lg text-center">
                <div className="text-5xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Años de Experiencia</p>
              </div>
              <div className="bg-primary p-8 rounded-lg shadow-lg text-center text-primary-foreground">
                <div className="text-5xl font-bold mb-2">5K+</div>
                <p className="opacity-80">Colocaciones Exitosas</p>
              </div>
              <div className="bg-secondary p-8 rounded-lg shadow-lg text-center text-secondary-foreground">
                <div className="text-5xl font-bold mb-2">300+</div>
                <p className="opacity-80">Empresas Clientes</p>
              </div>
              <div className="bg-card p-8 rounded-lg shadow-lg text-center">
                <div className="text-5xl font-bold text-secondary mb-2">98%</div>
                <p className="text-muted-foreground">Satisfacción</p>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/20 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
