import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const teamMembers = [
  {
    name: "Garrett Barnie",
    role: "Fundador",
    image: team1,
  },
  {
    name: "Isaac Herman",
    role: "VP, Finanzas",
    image: team2,
  },
  {
    name: "Joel Lou",
    role: "Consultor Senior",
    image: team3,
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">Nuestro Equipo</span>
          <h2 className="section-title">Conoce a Nuestros Expertos</h2>
          <p className="section-desc mx-auto mt-4">
            Un equipo de profesionales dedicados a conectar el mejor talento 
            con las mejores oportunidades.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg bg-card shadow-lg">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded">
                    Nuestro Campeón
                  </div>

                  {/* Share Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-coral-dark transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-secondary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.role}</p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Facebook size={14} />
                    </a>
                    <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Twitter size={14} />
                    </a>
                    <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-outline">
            Conocer a Todo el Equipo
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
