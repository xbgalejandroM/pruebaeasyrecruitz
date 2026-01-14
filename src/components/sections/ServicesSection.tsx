import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const services = [
  {
    image: service1,
    icon: "🎯",
    title: "Contratación Directa",
    description: "Te explicamos cómo esta idea de denunciar el placer y alabar el dolor nació.",
    link: "#",
  },
  {
    image: service2,
    icon: "📋",
    title: "Personal Temporal",
    description: "Te explicamos cómo esta idea de denunciar el placer y alabar el dolor nació.",
    link: "#",
  },
  {
    image: service3,
    icon: "🤝",
    title: "Outsourcing",
    description: "Te explicamos cómo esta idea de denunciar el placer y alabar el dolor nació.",
    link: "#",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">Soluciones que Ofrecemos</span>
          <h2 className="section-title">Soluciones de Staffing Inspiradoras</h2>
          <p className="section-desc mx-auto mt-4">
            Un hecho establecido hace mucho tiempo es que un lector se distraerá 
            con el contenido legible de una página.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-service group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-3xl shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Más detalles <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
