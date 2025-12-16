import { motion } from "framer-motion";
import { AlertTriangle, Ghost, TrendingDown, Users } from "lucide-react";

const problems = [
  {
    icon: Users,
    title: "Relying on Word-of-Mouth",
    description: "Your phone only rings when clients feel like referring you. You have zero control over your lead flow."
  },
  {
    icon: Ghost,
    title: "Invisible Website",
    description: "Your site looks outdated and doesn't bring new customers from Google. It's a digital ghost town."
  },
  {
    icon: TrendingDown,
    title: "Competing on Price",
    description: "Clients treat you like a commodity, not a premium service. You're fighting for scraps."
  },
  {
    icon: AlertTriangle,
    title: "Marketing Gambling",
    description: "You boosted posts on Instagram but got zero ROI. You're burning cash without a strategy."
  }
];

export default function Problem() {
  return (
    <section className="py-24 relative" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
            Great Service alone doesn't build a <span className="text-primary">Million-Dollar Business</span>.
          </h2>
          <p className="text-xl" style={{ color: '#666666' }}>
            You deliver 5-star service, but your growth is stuck. Sound familiar?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl transition-all duration-300 group relative overflow-hidden hover:scale-[1.02]"
              style={{ backgroundColor: 'rgba(5, 9, 50, 0.08)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              
              <div className="mb-6 inline-flex p-3 rounded-2xl transition-colors" style={{ backgroundColor: 'rgba(254, 65, 81, 0.1)' }}>
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 font-display" style={{ color: '#000000' }}>{item.title}</h3>
              <p className="leading-relaxed" style={{ color: '#666666' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.p 
            className="text-lg font-medium inline-block px-6 py-3 rounded-2xl relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: 'rgba(5, 9, 50, 0.08)', color: '#000000' }}
            onClick={() => {
              const formSection = document.getElementById('sdr-form');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            <motion.span
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(254, 65, 81, 0.5), transparent)',
              }}
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <span className="relative z-10">It's not your fault. You just need a <span className="text-primary font-bold">system</span>.</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
