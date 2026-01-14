import { motion } from "framer-motion";
import { Calendar, User, MessageCircle, ArrowRight } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const newsItems = [
  {
    image: news1,
    date: { day: "21", month: "May" },
    category: "Recursos Humanos",
    title: "5 Formas Efectivas de Contratar Más Trabajadores",
    author: "Harley Reuban",
    comments: 3,
    link: "#",
  },
  {
    image: news2,
    date: { day: "20", month: "May" },
    category: "Técnicas",
    title: "¿Mi Negocio Necesita un Director de Capacitación?",
    author: "Harley Reuban",
    comments: 5,
    link: "#",
  },
  {
    image: news3,
    date: { day: "19", month: "May" },
    category: "Reclutamiento",
    title: "¿Cuáles son las Tendencias de Staffing 2024 en México?",
    author: "Harley Reuban",
    comments: 4,
    link: "#",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-subtitle">Noticias y Actualizaciones</span>
          <h2 className="section-title">Noticias y Actualizaciones Destacadas</h2>
          <p className="section-desc mx-auto mt-4">
            Mantente al día con las últimas tendencias en reclutamiento y recursos humanos.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 text-center rounded">
                  <div className="text-2xl font-bold leading-none">{item.date.day}</div>
                  <div className="text-xs uppercase">{item.date.month}</div>
                </div>
                {/* Category */}
                <div className="absolute bottom-4 left-4 bg-secondary/80 text-secondary-foreground px-3 py-1 text-xs font-semibold rounded">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <a href={item.link}>{item.title}</a>
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {item.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    {item.comments} Comentarios
                  </span>
                </div>

                {/* Read More */}
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Leer más <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
