import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

const testimonials = [
  {
    name: "Evan Clement",
    role: "Gerente, Cypertech",
    image: team1,
    quote: "[Eazy Recruitz] es muy preciso cuando se trata de ayudarte a encontrar un trabajo y si ese trabajo termina, ¡te ayudan a encontrar otra colocación laboral!",
  },
  {
    name: "Freddie Esther",
    role: "VP, Daily News",
    image: team2,
    quote: "Realmente aprecié el tiempo, trabajo y esfuerzo excepcionales que todo el personal dedicó para encontrarme una excelente colocación laboral. Muchas gracias.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">Testimonios de Clientes</span>
          <h2 className="section-title">Mayor Índice de Satisfacción del Cliente</h2>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl shadow-xl p-8 md:p-12 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-primary/20">
                <Quote size={80} />
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image */}
                <div className="shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center md:text-left">
                  <p className="text-xl text-foreground leading-relaxed mb-6 italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <h4 className="font-bold text-secondary text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary font-medium">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
