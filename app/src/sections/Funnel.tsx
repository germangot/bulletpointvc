import { useEffect, useRef, useState } from 'react';
import { Target, MessageSquare, Users, ClipboardCheck, FileCheck } from 'lucide-react';

const Funnel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate through stages
          const interval = setInterval(() => {
            setActiveStage((prev) => {
              if (prev >= 4) {
                clearInterval(interval);
                return 4;
              }
              return prev + 1;
            });
          }, 600);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stages = [
    {
      icon: Target,
      number: '01',
      title: 'Target Identification',
      description: 'Find the right 200-500 investors for your specific niche',
      metric: '500 potential investors identified',
    },
    {
      icon: MessageSquare,
      number: '02',
      title: 'Outreach Optimization',
      description: 'Craft messages that get 25%+ response rates',
      metric: '125 investors respond',
    },
    {
      icon: Users,
      number: '03',
      title: 'Meeting Conversion',
      description: 'Convert conversations into serious interest',
      metric: '50 meetings scheduled',
    },
    {
      icon: ClipboardCheck,
      number: '04',
      title: 'Due Diligence Navigation',
      description: 'Guide investors through validation smoothly',
      metric: '15 enter due diligence',
    },
    {
      icon: FileCheck,
      number: '05',
      title: 'Term Sheet & Close',
      description: 'Negotiate terms and close the round',
      metric: '3-5 term sheets received',
    },
  ];

  return (
    <section
      id="funnel"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span
              className={`section-label transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              THE PROCESS
            </span>
            <h2
              className={`headline-lg mt-4 mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Your Fundraising, Engineered As A Marketing Funnel
            </h2>
            <p
              className={`body-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Most founders approach fundraising blindly. I map it as a systematic funnel with clear 
              metrics at every stage. You'll know exactly where you stand and what needs improvement.
            </p>
          </div>

          {/* Funnel Visualization */}
          <div className="relative">
            {/* Desktop: Horizontal Flow */}
            <div className="hidden lg:block">
              <div className="flex items-start justify-between gap-4">
                {stages.map((stage, index) => (
                  <div
                    key={index}
                    className={`flex-1 flex flex-col items-center transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${500 + index * 150}ms` }}
                  >
                    {/* Stage Node */}
                    <div
                      className={`funnel-node mb-6 cursor-pointer transition-all duration-500 ${
                        activeStage >= index ? 'active' : ''
                      }`}
                      onMouseEnter={() => setActiveStage(index)}
                    >
                      <stage.icon className="w-8 h-8" />
                    </div>

                    {/* Connector Line */}
                    {index < stages.length - 1 && (
                      <div 
                        className="absolute top-10 left-0 right-0 h-0.5 -z-10"
                        style={{
                          background: `linear-gradient(to right, 
                            rgba(255,107,53,${activeStage >= index ? 1 : 0.2}) 0%, 
                            rgba(255,107,53,${activeStage >= index + 1 ? 1 : 0.2}) 100%)`,
                          marginLeft: `${(index + 0.5) * (100 / stages.length)}%`,
                          marginRight: `${(stages.length - index - 0.5) * (100 / stages.length)}%`,
                          transition: 'all 0.5s ease-out',
                        }}
                      />
                    )}

                    {/* Stage Content */}
                    <div className="text-center">
                      <div className="text-[#FF6B35] text-sm font-medium mb-2">
                        {stage.number}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{stage.title}</h3>
                      <p className="text-sm text-white/60 mb-3">{stage.description}</p>
                      <div 
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-all duration-500 ${
                          activeStage >= index 
                            ? 'bg-[#FF6B35]/20 text-[#FF6B35]' 
                            : 'bg-white/5 text-white/40'
                        }`}
                      >
                        {stage.metric}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Vertical Stack */}
            <div className="lg:hidden space-y-8">
              {stages.map((stage, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                >
                  {/* Stage Node */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                        activeStage >= index 
                          ? 'bg-[#FF6B35]/20 border-2 border-[#FF6B35]' 
                          : 'bg-white/5 border-2 border-white/20'
                      }`}
                    >
                      <stage.icon className={`w-6 h-6 ${activeStage >= index ? 'text-[#FF6B35]' : 'text-white/50'}`} />
                    </div>
                    {index < stages.length - 1 && (
                      <div 
                        className="w-0.5 h-12 mt-2"
                        style={{
                          background: activeStage >= index + 1 
                            ? '#FF6B35' 
                            : 'rgba(255,255,255,0.1)',
                          transition: 'all 0.5s ease-out',
                        }}
                      />
                    )}
                  </div>

                  {/* Stage Content */}
                  <div className="flex-1 pt-2">
                    <div className="text-[#FF6B35] text-xs font-medium mb-1">
                      {stage.number}
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{stage.title}</h3>
                    <p className="text-sm text-white/60 mb-2">{stage.description}</p>
                    <div 
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-all duration-500 ${
                        activeStage >= index 
                          ? 'bg-[#FF6B35]/20 text-[#FF6B35]' 
                          : 'bg-white/5 text-white/40'
                      }`}
                    >
                      {stage.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Note */}
          <div
            className={`mt-16 md:mt-20 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
              <span className="text-sm text-white/70">
                Every consultation is tailored to your specific stage and goals
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funnel;
