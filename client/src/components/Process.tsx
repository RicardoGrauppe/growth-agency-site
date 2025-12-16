import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "The Deep Dive",
    description: "We analyze your current online presence, competitors, and pricing to find the hidden gaps losing you money."
  },
  {
    number: "02",
    title: "The Blueprint",
    description: "We build a custom Growth Roadmap tailored to your revenue goals—whether you want 5 new jobs a week or 50."
  },
  {
    number: "03",
    title: "The Launch",
    description: "We deploy your new website, launch your campaigns, and integrate your operations system. You focus on the work; we handle the growth."
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-secondary/10 border-y border-border/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Scale Your Business</h2>
          <p className="text-muted-foreground">A systematic approach to predictable growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-border z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className="bg-background border border-border p-8 h-full hover:border-primary transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-secondary-foreground/20 font-display group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
