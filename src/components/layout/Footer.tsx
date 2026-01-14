import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                Suscríbete a Nuestro Newsletter
              </h3>
              <p className="text-primary-foreground/80">
                Recibe las últimas ofertas de empleo directamente en tu correo.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-primary-foreground border-0 rounded-none min-w-[300px]"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-none px-8">
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">E</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-xl text-secondary-foreground leading-tight">Eazy</span>
                  <span className="font-heading font-bold text-xl text-primary leading-tight">Recruitz</span>
                </div>
              </div>
              <p className="text-secondary-foreground/70 mb-6 leading-relaxed">
                Somos líderes en soluciones de reclutamiento y recursos humanos, 
                conectando talento excepcional con empresas innovadoras.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {["Sobre Nosotros", "Nuestros Servicios", "Vacantes Disponibles", "Blog y Noticias", "Contacto", "Preguntas Frecuentes"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                      <ArrowRight size={14} className="text-primary" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6">Nuestros Servicios</h4>
              <ul className="space-y-3">
                {["Contratación Directa", "Personal Temporal", "Outsourcing", "Headhunting", "Evaluación de Personal", "Consultoría HR"].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                      <ArrowRight size={14} className="text-primary" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-bold mb-6">Contáctanos</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1 shrink-0" size={20} />
                  <span className="text-secondary-foreground/70">
                    Av. Reforma 222, Col. Juárez<br />
                    Ciudad de México, CP 06600
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-primary shrink-0" size={20} />
                  <a href="tel:+528001234567" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    (800) 123-4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-primary shrink-0" size={20} />
                  <a href="mailto:contacto@eazyrecruitz.com" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    contacto@eazyrecruitz.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-foreground/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
            <p>© 2024 Eazy Recruitz. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
