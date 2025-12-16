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
    <section className="py-12 md:py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>How We Scale Your Business</h2>
          <p style={{ color: '#666666' }}>A systematic approach to predictable growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connecting Line (Desktop) - Only visible between cards */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px z-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className="p-4 md:p-8 pb-2 md:pb-4 h-full rounded-2xl transition-colors duration-300 relative z-10 overflow-visible flex flex-col" style={{ backgroundColor: '#f5f5f5' }}>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <span className="text-4xl md:text-5xl font-bold font-display transition-colors" style={{ color: 'rgba(0, 0, 0, 0.1)' }}>
                    {step.number}
                  </span>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(254, 65, 81, 0.1)' }}>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: '#000000' }}>{step.title}</h3>
                <p className="text-sm md:text-base leading-relaxed mb-4 flex-shrink-0" style={{ color: '#666666' }}>
                  {step.description}
                  {index === 2 && (
                    <span className="inline-block ml-2">😉</span>
                  )}
                </p>
                
                {index === 1 && (
                  <div className="mt-4 md:mt-6 relative flex-shrink-0" style={{ marginBottom: '0' }}>
                    {/* Blueprint Roadmap */}
                    <div 
                      className="rounded-2xl overflow-hidden shadow-lg relative min-h-[280px] md:min-h-[400px] flex items-center"
                      style={{ 
                        backgroundColor: '#ffffff',
                        backgroundImage: `
                          linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                      }}
                    >
                      <div className="p-3 md:p-4 w-full">
                        {/* Roadmap Steps */}
                        <div className="space-y-2 md:space-y-3">
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
                  <div className="mt-4 md:mt-6 relative flex-shrink-0" style={{ marginBottom: '0' }}>
                    {/* macOS Window */}
                    <div className="rounded-2xl overflow-hidden shadow-lg min-h-[280px] md:min-h-[400px]" style={{ backgroundColor: '#ffffff' }}>
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
                      <div className="p-3 md:p-4">
                        {/* Competitor List */}
                        <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                
                {index === 2 && (
                  <div className="mt-4 md:mt-6 relative flex-shrink-0" style={{ marginBottom: '0' }}>
                    {/* Launch Element */}
                    <div className="rounded-2xl overflow-hidden shadow-lg min-h-[280px] md:min-h-[400px]" style={{ backgroundColor: '#ffffff' }}>
                      <div className="p-2 md:p-4 flex items-center justify-center min-h-[280px] md:min-h-[400px]">
                        <div className="relative flex items-center justify-center">
                          {/* MacBook */}
                          <div className="relative z-0">
                            {/* MacBook Base */}
                            <div className="relative w-[200px] md:w-[280px]">
                              {/* Screen */}
                              <div 
                                className="rounded-t-lg overflow-hidden mx-auto relative w-[180px] h-[120px] md:w-[260px] md:h-[160px]"
                                style={{ 
                                  backgroundColor: '#1a1a1a',
                                  border: '3px solid #2a2a2a',
                                  borderBottom: 'none'
                                }}
                              >
                                {/* Notch */}
                                <div 
                                  className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-lg w-[45px] h-[5px] md:w-[60px] md:h-[6px]"
                                  style={{ 
                                    backgroundColor: '#1a1a1a'
                                  }}
                                />
                                
                                {/* Website Content */}
                                <div className="h-full p-1 md:p-2" style={{ backgroundColor: '#ffffff' }}>
                                  {/* Header */}
                                  <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                                    <div className="flex gap-0.5 md:gap-1">
                                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
                                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
                                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" style={{ backgroundColor: '#28ca42' }} />
                                    </div>
                                    <div className="flex-1 h-1.5 md:h-2 rounded" style={{ backgroundColor: '#e0e0e0' }} />
                                  </div>
                                  
                                  {/* Navigation */}
                                  <div className="flex gap-0.5 md:gap-1 mb-1 md:mb-2">
                                    {[1, 2, 3, 4].map((i) => (
                                      <div key={i} className="h-1 md:h-1.5 rounded animate-pulse" style={{ width: '25px', maxWidth: '40px', backgroundColor: '#e0e0e0' }} />
                                    ))}
                                  </div>
                                  
                                  {/* Hero Section */}
                                  <div className="mb-1 md:mb-2">
                                    <div className="h-2 md:h-3 rounded mb-0.5 md:mb-1 animate-pulse" style={{ width: '60%', backgroundColor: '#e0e0e0' }} />
                                    <div className="h-1.5 md:h-2 rounded animate-pulse" style={{ width: '80%', backgroundColor: '#e0e0e0' }} />
                                  </div>
                                  
                                  {/* Content Blocks */}
                                  <div className="grid grid-cols-2 gap-0.5 md:gap-1">
                                    {[1, 2].map((i) => (
                                      <div key={i} className="h-6 md:h-8 rounded" style={{ backgroundColor: '#f5f5f5' }} />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Keyboard Base */}
                              <div 
                                className="rounded-b-lg mx-auto relative w-[200px] h-[10px] md:w-[280px] md:h-[12px]"
                                style={{ 
                                  backgroundColor: '#2a2a2a',
                                  border: '3px solid #2a2a2a',
                                  borderTop: 'none'
                                }}
                              >
                                {/* Trackpad */}
                                <div 
                                  className="absolute bottom-1 left-1/2 transform -translate-x-1/2 rounded w-[30px] h-[2px] md:w-[40px]"
                                  style={{ 
                                    backgroundColor: '#1a1a1a'
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          
                          {/* iPhone - Overlapping MacBook */}
                          <div className="relative z-10 -ml-10 md:-ml-12" style={{ marginTop: '0' }}>
                            <div 
                              className="rounded-3xl overflow-hidden relative w-[70px] h-[130px] md:w-[95px] md:h-[172px]"
                              style={{ 
                                backgroundColor: '#1a1a1a',
                                border: '4px solid #2a2a2a',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                              }}
                            >
                              {/* Notch */}
                              <div 
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-lg w-[30px] h-[6px] md:w-[40px] md:h-[8px]"
                                style={{ 
                                  backgroundColor: '#1a1a1a',
                                  zIndex: 10
                                }}
                              />
                              
                              {/* Screen Content */}
                              <div className="h-full p-1 pt-1.5 md:p-1.5 md:pt-2" style={{ backgroundColor: '#ffffff' }}>
                                {/* Status Bar */}
                                <div className="flex items-center justify-between mb-0.5 md:mb-1">
                                  <div className="h-0.5 w-4 md:w-6 rounded" style={{ backgroundColor: '#000000' }} />
                                  <div className="h-0.5 w-3 md:w-4 rounded" style={{ backgroundColor: '#000000' }} />
                                </div>
                                
                                {/* App Header */}
                                <div className="mb-1 md:mb-1.5">
                                  <div className="h-1 md:h-1.5 rounded mb-0.5 animate-pulse" style={{ width: '70%', backgroundColor: '#e0e0e0' }} />
                                  <div className="h-0.5 md:h-1 rounded animate-pulse" style={{ width: '50%', backgroundColor: '#e0e0e0' }} />
                                </div>
                                
                                {/* Money Growth Chart */}
                                <div className="space-y-0.5 md:space-y-1">
                                  {/* Chart Title */}
                                  <div className="flex items-center gap-0.5 md:gap-1 mb-0.5 md:mb-1">
                                    <TrendingUp className="w-2 h-2 md:w-2.5 md:h-2.5" style={{ color: '#00FF94' }} />
                                    <div className="h-0.5 md:h-1 w-8 md:w-12 rounded animate-pulse" style={{ backgroundColor: '#e0e0e0' }} />
                                  </div>
                                  
                                  {/* Chart Area */}
                                  <div className="relative h-[45px] md:h-[60px]">
                                    {/* Grid Lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between">
                                      {[0, 1, 2].map((i) => (
                                        <div key={i} className="h-px" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                                      ))}
                                    </div>
                                    
                                    {/* Growth Line */}
                                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                                      <polyline
                                        points="5,50 20,45 35,35 50,25 65,15 80,10 95,8"
                                        fill="none"
                                        stroke="#00FF94"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                      />
                                      {/* Area fill */}
                                      <polygon
                                        points="5,50 20,45 35,35 50,25 65,15 80,10 95,8 95,60 5,60"
                                        fill="rgba(0, 255, 148, 0.1)"
                                      />
                                    </svg>
                                    
                                    {/* Data Points */}
                                    {[
                                      { x: 20, y: 45 },
                                      { x: 50, y: 25 },
                                      { x: 80, y: 10 },
                                    ].map((point, idx) => (
                                      <div key={idx} className="absolute" style={{ left: `${point.x}%`, top: `${point.y}%`, transform: 'translate(-50%, -50%)' }}>
                                        <div 
                                          className="w-1.5 h-1.5 rounded-full"
                                          style={{ backgroundColor: '#00FF94', border: '1.5px solid #ffffff' }}
                                        />
                                      </div>
                                    ))}
                                  </div>
                                  
                                  {/* Stats */}
                                  <div className="mt-1 md:mt-1.5 space-y-0.5">
                                    <div className="flex items-center justify-between">
                                      <div className="h-0.5 md:h-1 w-6 md:w-8 rounded animate-pulse" style={{ backgroundColor: '#e0e0e0' }} />
                                      <div className="h-0.5 md:h-1 w-8 md:w-12 rounded" style={{ backgroundColor: '#00FF94' }} />
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <div className="h-0.5 md:h-1 w-4 md:w-6 rounded animate-pulse" style={{ backgroundColor: '#e0e0e0' }} />
                                      <div className="h-0.5 md:h-1 w-6 md:w-10 rounded" style={{ backgroundColor: '#00FF94' }} />
                                    </div>
                                  </div>
                                  
                                  {/* Dollar Sign Indicator */}
                                  <div className="mt-0.5 md:mt-1 flex items-center gap-0.5 md:gap-1">
                                    <div className="text-xs md:text-sm font-bold" style={{ color: '#00FF94' }}>💰</div>
                                    <div className="h-0.5 md:h-1 w-12 md:w-16 rounded animate-pulse" style={{ backgroundColor: '#e0e0e0' }} />
                                  </div>
                                </div>
                              </div>
                              
                              {/* Home Indicator */}
                              <div 
                                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-full w-[20px] h-[2px] md:w-[25px] md:h-[3px]"
                                style={{ 
                                  backgroundColor: '#cccccc'
                                }}
                              />
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
