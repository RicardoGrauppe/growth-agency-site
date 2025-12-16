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
    <section className="py-24 bg-secondary/20 relative border-y border-border/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Great Service alone doesn't build a <span className="text-primary">Million-Dollar Business</span>.
          </h2>
          <p className="text-xl text-muted-foreground">
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
              className="bg-card border border-border/50 p-8 hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              
              <div className="mb-6 inline-flex p-3 bg-secondary rounded-none text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 font-display">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-white bg-card inline-block px-6 py-3 border border-border">
            It's not your fault. You just need a <span className="text-primary font-bold">system</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
