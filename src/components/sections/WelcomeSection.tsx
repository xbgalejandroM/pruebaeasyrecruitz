import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const tabs = [
  {
    id: "employers",
    label: "Para Empleadores",
    icon: Briefcase,
    title: "Encuentra a los Empleados Ideales",
    subtitle: "Contrata a tu próximo candidato en Eazy Recruitz",
    description: "Emprender cualquier ejercicio físico laborioso, excepto para obtener alguna ventaja de él, pero quién tiene derecho a criticar a un hombre que elige disfrutar de un placer.",
    features: [
      { icon: "🎯", title: "Entendemos tus Necesidades" },
      { icon: "✨", title: "Encontramos al Candidato Perfecto" },
    ],
    cta: "Tu Talento Requerido",
  },
  {
    id: "employees",
    label: "Para Candidatos",
    icon: Users,
    title: "Explora tu Carrera Profesional",
    subtitle: "Encuentra tu lugar ideal con Eazy Recruitz",
    description: "Te explicamos cómo surgió esta idea errónea de denunciar el placer y alabar el dolor, y te daremos una explicación completa del sistema.",
    features: [
      { icon: "🏆", title: "Oportunidades Ejecutivas" },
      { icon: "📈", title: "Oportunidades No Ejecutivas" },
    ],
    cta: "Explorar Vacantes",
  },
];

const WelcomeSection = () => {
  const [activeTab, setActiveTab] = useState("employers");
  const currentTab = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-subtitle">Bienvenido a Eazy Recruitz</span>
          <h2 className="section-title">Agencia de Reclutamiento Moderna</h2>
          <p className="section-desc mx-auto mt-4">
            Un hecho establecido hace mucho tiempo es que un lector se distraerá 
            con el contenido legible de una página.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Equipo de trabajo"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-lg -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Tabs */}
            <div className="flex gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <span className="section-subtitle">{currentTab.title}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                  {currentTab.subtitle}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {currentTab.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentTab.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-muted rounded-lg"
                    >
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="font-semibold text-secondary">{feature.title}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-primary group">
                  {currentTab.cta}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
