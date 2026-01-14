import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "INICIO", href: "#", active: true },
  { label: "NOSOTROS", href: "#about", hasDropdown: true },
  { label: "EMPLEADORES", href: "#employers", hasDropdown: true },
  { label: "SOLUCIONES", href: "#solutions", hasDropdown: true },
  { label: "CANDIDATOS", href: "#candidates", hasDropdown: true },
  { label: "CONTACTO", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">E</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-secondary leading-tight">Eazy</span>
              <span className="font-heading font-bold text-xl text-primary leading-tight">Recruitz</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link flex items-center gap-1 py-6 ${link.active ? "text-primary after:w-full" : ""}`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} />}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <Button className="btn-secondary rounded-none">
              AGENDAR CITA
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t"
          >
            <nav className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-3 nav-link border-b border-border"
                >
                  {link.label}
                </a>
              ))}
              <Button className="btn-primary w-full mt-4 rounded-none">
                AGENDAR CITA
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
