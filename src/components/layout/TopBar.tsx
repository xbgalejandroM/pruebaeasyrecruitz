import { Phone, Mail, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const TopBar = () => {
  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 text-sm">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a href="tel:+18004561234" className="top-bar-link flex items-center gap-2">
              <Phone size={14} />
              <span className="font-medium">LLAMAR:</span>
              <span>(800) 456-1234</span>
            </a>
            <a href="mailto:info@example.com" className="top-bar-link flex items-center gap-2">
              <Mail size={14} />
              <span className="font-medium">CORREO:</span>
              <span>info@example.com</span>
            </a>
          </div>

          {/* Recent Job & Links */}
          <div className="flex items-center gap-6 mt-2 md:mt-0">
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-primary font-semibold">RECIENTE:</span>
              <motion.span 
                className="text-secondary-foreground/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Gerente de Desarrollo de Negocios, Ciudad de México
              </motion.span>
              <a href="#" className="text-primary hover:text-primary-foreground flex items-center gap-1 ml-2 transition-colors">
                APLICAR AHORA <ChevronRight size={14} />
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="top-bar-link">Sobre Nosotros</a>
              <a href="#" className="top-bar-link">Ubicaciones</a>
              <a href="#" className="top-bar-link">Recursos</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
