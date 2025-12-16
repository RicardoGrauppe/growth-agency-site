import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, ShieldCheck } from "lucide-react";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      <Header />
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-2xl border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            ACCEPTING NEW PARTNERS FOR Q1 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight" style={{ color: '#000000' }}>
            Stop Chasing Leads. <br />
            <span className="text-primary">
              Start Closing Jobs.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-xl leading-relaxed border-l-2 border-primary/50 pl-6" style={{ color: '#666666' }}>
            The only growth agency for Brazilian Cleaning & Construction businesses in the USA powered by proprietary technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-14 rounded-2xl group transition-all duration-300 hover:scale-105"
              onClick={() => {
                const formSection = document.getElementById('sdr-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <motion.span
                className="absolute inset-0 z-0"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                }}
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 0,
                }}
              />
              <span className="relative z-10 flex items-center">
                Book Your Free Growth Analysis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 h-14 rounded-2xl transition-all duration-300 hover:scale-105" style={{ color: '#000000', backgroundColor: '#ffffff' }}>
              View Case Studies
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-8 text-sm" style={{ color: '#666666' }}>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>CleanOps Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Data-Driven Growth</span>
            </div>
          </div>
        </motion.div>
        
        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 p-2 rounded-2xl shadow-lg" style={{ backgroundColor: '#fafafa' }}>
            <div className="overflow-hidden rounded-2xl">
              <img 
                src="/images/hero-bg.png" 
                alt="Growth Dashboard" 
                className="w-full h-auto object-cover opacity-90 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-10 -left-10 p-6 rounded-2xl shadow-2xl max-w-xs z-20"
              style={{ backgroundColor: '#fafafa' }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm" style={{ color: '#666666' }}>Monthly Revenue</span>
                <span className="text-xs text-primary font-mono">+124%</span>
              </div>
              <div className="text-3xl font-bold font-mono" style={{ color: '#000000' }}>$52,450</div>
              <div className="w-full bg-secondary h-1 mt-4 rounded-full">
                <div className="bg-primary h-full w-[75%] rounded-full" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
