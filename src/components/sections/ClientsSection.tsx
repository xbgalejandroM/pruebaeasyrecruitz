import { motion } from "framer-motion";

const clients = [
  { name: "Daily News", icon: "📰" },
  { name: "Technology", icon: "💻" },
  { name: "Cybertech", icon: "🔒" },
  { name: "Futuratech", icon: "🚀" },
  { name: "Art Studio", icon: "🎨" },
  { name: "Innovation", icon: "💡" },
];

const ClientsSection = () => {
  return (
    <section className="bg-secondary py-8 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Double the clients for seamless loop */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors shrink-0"
            >
              <span className="text-3xl">{client.icon}</span>
              <span className="font-heading font-bold text-xl uppercase tracking-wider whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
