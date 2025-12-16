import { CheckCircle2, Globe, Laptop, Megaphone } from "lucide-react";

export default function Solution() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#fafafa' }}>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-4 text-primary font-mono text-sm tracking-wider uppercase">
              // The Solution
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#000000' }}>
              The "Service <br />
              <span className="text-primary">Growth Engine"</span>
            </h2>
            <p className="text-xl mb-8 border-l-4 border-primary pl-6 py-2" style={{ color: '#666666' }}>
              Most agencies just give you leads. We give you a business machine.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl" style={{ backgroundColor: 'rgba(254, 65, 81, 0.1)' }}>
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#000000' }}>High-Converting Web Presence</h3>
                  <p style={{ color: '#666666' }}>
                    We build websites designed to convert visitors into paying clients, not just look pretty. Mobile-optimized, fast, and built for SEO dominance.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl" style={{ backgroundColor: 'rgba(254, 65, 81, 0.1)' }}>
                    <Megaphone className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#000000' }}>Automated Client Acquisition</h3>
                  <p style={{ color: '#666666' }}>
                    Targeted Google & Meta Ads that put your offer in front of homeowners actively looking for cleaning and construction services in your area.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl" style={{ backgroundColor: 'rgba(254, 65, 81, 0.1)' }}>
                    <Laptop className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#000000' }}>Operational Excellence (CleanOps)</h3>
                  <p style={{ color: '#666666' }}>
                    The only agency that gives you the tools to manage the growth. Get our proprietary software <strong className="text-primary">CleanOps</strong> included to handle scheduling, payments, and team management.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <img 
                  src="/images/service-cleaning.png" 
                  alt="Cleaning Service" 
                  className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                />
                <div className="p-6 rounded-2xl shadow-lg" style={{ backgroundColor: 'rgba(5, 9, 50, 0.08)' }}>
                  <div className="text-4xl font-bold text-primary mb-2">3x</div>
                  <div className="text-sm" style={{ color: '#666666' }}>Lead Volume Increase</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl shadow-lg" style={{ backgroundColor: 'rgba(5, 9, 50, 0.08)' }}>
                  <div className="text-4xl font-bold text-primary mb-2">-40%</div>
                  <div className="text-sm" style={{ color: '#666666' }}>Cost Per Acquisition</div>
                </div>
                <img 
                  src="/images/service-construction.png" 
                  alt="Construction Service" 
                  className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            {/* Central Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full shadow-[0_0_30px_rgba(0,255,148,0.3)]" style={{ backgroundColor: '#ffffff', border: '2px solid #00FF94' }}>
              <CheckCircle2 className="w-8 h-8" style={{ color: '#00FF94' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
