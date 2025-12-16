import { ArrowRight, TrendingUp, BarChart3, PieChart, User, Target, TrendingUp as TrendingUpIcon, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "The Deep Dive",
    description: "We analyze your current online presence, competitors, and pricing to find the hidden gaps losing you money."
  },
  {
    number: "02",
    title: "The Blueprint",
    description: "We build a custom Growth Roadmap tailored to your revenue goals, whether you want 5 new jobs a week or 50."
  },
  {
    number: "03",
    title: "The Launch",
    description: "We deploy your new website, launch your campaigns, and integrate your operations system. You focus on the work; we handle the growth."
  }
];

export default function Process() {
  return (
    <section className="py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>How We Scale Your Business</h2>
          <p style={{ color: '#666666' }}>A systematic approach to predictable growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) - Only visible between cards */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px z-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className="p-8 h-full rounded-2xl transition-colors duration-300 relative z-10 overflow-hidden" style={{ backgroundColor: '#f5f5f5' }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold font-display transition-colors" style={{ color: 'rgba(0, 0, 0, 0.1)' }}>
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(254, 65, 81, 0.1)' }}>
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>{step.title}</h3>
                <p className="leading-relaxed mb-4" style={{ color: '#666666' }}>
                  {step.description}
                  {index === 2 && (
                    <span className="inline-block ml-2">😉</span>
                  )}
                </p>
                
                {index === 1 && (
                  <div className="mt-6 -mb-12 relative" style={{ marginBottom: '-48px' }}>
                    {/* Blueprint Roadmap */}
                    <div 
                      className="rounded-2xl overflow-hidden shadow-lg relative"
                      style={{ 
                        backgroundColor: '#ffffff',
                        backgroundImage: `
                          linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                        minHeight: '320px'
                      }}
                    >
                      <div className="p-4">
                      {/* Roadmap Steps */}
                      <div className="space-y-4">
                        {[
                          { icon: Target, color: '#fe4151' },
                          { icon: TrendingUpIcon, color: '#00FF94' },
                          { icon: Rocket, color: '#0a113d' },
                          { icon: CheckCircle2, color: '#666666' },
                        ].map((stepItem, idx) => (
                          <div key={idx} className="flex items-center gap-3 relative">
                            <div className="flex flex-col items-center">
                              <div 
                                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                                style={{ backgroundColor: `${stepItem.color}15` }}
                              >
                                <stepItem.icon className="w-5 h-5" style={{ color: stepItem.color }} />
                              </div>
                              {idx < 3 && (
                                <div 
                                  className="w-0.5 mt-1"
                                  style={{ 
                                    height: '32px', 
                                    backgroundColor: 'rgba(0, 0, 0, 0.1)' 
                                  }} 
                                />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="h-3 rounded animate-pulse mb-2" style={{ width: '70%', backgroundColor: '#e0e0e0' }} />
                              <div className="h-2 rounded animate-pulse" style={{ width: '50%', backgroundColor: '#e0e0e0' }} />
                            </div>
                          </div>
                        ))}
                      </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {index === 0 && (
                  <div className="mt-6 -mb-12 relative" style={{ marginBottom: '-48px' }}>
                    {/* macOS Window */}
                    <div className="rounded-2xl overflow-hidden shadow-lg" style={{ backgroundColor: '#ffffff' }}>
                      {/* macOS Window Header */}
                      <div className="flex items-center gap-2 px-3 py-2" style={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28ca42' }} />
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-xs font-medium" style={{ color: '#666666' }}>Market Research Analysis</span>
                        </div>
                        <div className="w-12" />
                      </div>
                      
                      {/* Window Content */}
                      <div className="p-4">
                        {/* Competitor List */}
                        <div className="space-y-3 mb-4">
                          {[
                            { value: 85, color: '#fe4151', emoji: '🤵🏻‍♂️' },
                            { value: 72, color: '#00FF94', emoji: '👨🏼‍💻' },
                            { value: 68, color: '#0a113d', emoji: '👩🏻‍💼' },
                            { value: 45, color: '#666666', emoji: '👨🏼‍💼' },
                          ].map((company, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div 
                                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden text-lg"
                                style={{ backgroundColor: '#f0f0f0' }}
                              >
                                {company.emoji}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <div className="h-3 rounded animate-pulse" style={{ width: '60px', backgroundColor: '#e0e0e0' }} />
                                  <div className="h-3 w-8 rounded animate-pulse" style={{ backgroundColor: '#e0e0e0' }} />
                                </div>
                                <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                                  <div 
                                    className="h-full rounded-full transition-all duration-500"
                                    style={{ 
                                      width: `${company.value}%`,
                                      backgroundColor: company.color 
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Charts Section */}
                        <div className="grid grid-cols-2 gap-3">
                          {/* Bar Chart - Market Share */}
                          <div className="p-3 rounded-lg" style={{ backgroundColor: '#fafafa' }}>
                            <div className="flex items-center gap-2 mb-5">
                              <BarChart3 className="w-3 h-3" style={{ color: '#666666' }} />
                              <div className="h-3 w-20 rounded animate-pulse" style={{ backgroundColor: '#e0e0e0' }} />
                            </div>
                            <div className="flex items-end gap-2" style={{ height: '64px' }}>
                              {[85, 72, 68, 45].map((value, i) => {
                                const maxValue = 85;
                                const containerHeight = 64; // altura do container em pixels
                                const barHeight = (value / maxValue) * containerHeight;
                                return (
                                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                    <div 
                                      className="w-full rounded-t transition-all duration-500"
                                      style={{ 
                                        height: `${barHeight}px`,
                                        backgroundColor: ['#fe4151', '#00FF94', '#0a113d', '#666666'][i],
                                        minHeight: '16px'
                                      }}
                                    />
                                    <div className="h-2 w-8 rounded animate-pulse" style={{ backgroundColor: '#e0e0e0' }} />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          
                          {/* Pie Chart Visual */}
                          <div className="p-3 rounded-lg" style={{ backgroundColor: '#fafafa' }}>
                            <div className="flex items-center gap-2 mb-2">
                              <PieChart className="w-3 h-3" style={{ color: '#666666' }} />
                              <div className="h-3 w-16 rounded animate-pulse" style={{ backgroundColor: '#e0e0e0' }} />
                            </div>
                            <div className="relative w-16 h-16 mx-auto">
                              <svg viewBox="0 0 64 64" className="transform -rotate-90">
                                <circle
                                  cx="32"
                                  cy="32"
                                  r="28"
                                  fill="none"
                                  stroke="rgba(0, 0, 0, 0.1)"
                                  strokeWidth="8"
                                />
                                <circle
                                  cx="32"
                                  cy="32"
                                  r="28"
                                  fill="none"
                                  stroke="#fe4151"
                                  strokeWidth="8"
                                  strokeDasharray={`${2 * Math.PI * 28 * 0.35} ${2 * Math.PI * 28}`}
                                  strokeDashoffset={0}
                                />
                                <circle
                                  cx="32"
                                  cy="32"
                                  r="28"
                                  fill="none"
                                  stroke="#00FF94"
                                  strokeWidth="8"
                                  strokeDasharray={`${2 * Math.PI * 28 * 0.30} ${2 * Math.PI * 28}`}
                                  strokeDashoffset={-2 * Math.PI * 28 * 0.35}
                                />
                                <circle
                                  cx="32"
                                  cy="32"
                                  r="28"
                                  fill="none"
                                  stroke="#0a113d"
                                  strokeWidth="8"
                                  strokeDasharray={`${2 * Math.PI * 28 * 0.25} ${2 * Math.PI * 28}`}
                                  strokeDashoffset={-2 * Math.PI * 28 * 0.65}
                                />
                                <circle
                                  cx="32"
                                  cy="32"
                                  r="28"
                                  fill="none"
                                  stroke="#666666"
                                  strokeWidth="8"
                                  strokeDasharray={`${2 * Math.PI * 28 * 0.10} ${2 * Math.PI * 28}`}
                                  strokeDashoffset={-2 * Math.PI * 28 * 0.90}
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
