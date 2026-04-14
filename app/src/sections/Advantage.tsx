import { useEffect, useRef, useState } from 'react';
import { UserCheck, Search, FileCheck, Network } from 'lucide-react';

const Advantage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    {
      icon: UserCheck,
      title: "Founder's Mindset",
      description: "I know the pressure of pitching your life's work. The anxiety. The hope. I've been there.",
    },
    {
      icon: Search,
      title: "Investor's Lens",
      description: "I understand what makes VCs say yes. What red flags make them walk away. The psychology behind every question.",
    },
    {
      icon: FileCheck,
      title: "Deal Mechanics",
      description: "Term sheets, valuations, negotiations — I know how to structure deals that protect founders while satisfying investors.",
    },
    {
      icon: Network,
      title: "Network Access",
      description: "Relationships with 500+ investors. Warm intros that skip the cold-email graveyard.",
    },
  ];

  return (
    <section
      id="advantage"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <div>
              {/* Section Label */}
              <span
                className={`section-label transition-all duration-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                WHY ME
              </span>

              {/* Headline */}
              <h2
                className={`headline-lg mt-4 mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                I've Sat On Both Sides Of The Investment Table
              </h2>

              {/* Description */}
              <p
                className={`body-lg mb-10 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Most consultants only know the founder's perspective. I've also helped investors 
                choose winners, conduct due diligence, and negotiate deals. This dual perspective 
                is your unfair advantage.
              </p>

              {/* Advantage Cards */}
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className={`glass-card flex items-start gap-4 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center">
                      <advantage.icon className="w-5 h-5 text-[#FF6B35]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{advantage.title}</h3>
                      <p className="text-sm text-white/60">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Narrative Blocks */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="space-y-4">
                <div className="glass-card border border-[#FF6B35]/20">
                  <div className="text-[#FF6B35] font-semibold mb-3">What You Actually Get</div>
                  <ul className="space-y-2 text-sm text-white/75">
                    <li>• Sharp messaging that makes investors immediately understand the opportunity.</li>
                    <li>• A clearer fundraising strategy tailored to your stage and category.</li>
                    <li>• Better preparation for hard investor questions and diligence conversations.</li>
                  </ul>
                </div>

                <div className="glass-card">
                  <div className="text-[#FF6B35] font-semibold mb-2">Why Founders Hire Me</div>
                  <p className="text-white/70 text-sm">
                    Founders need more than a polished story. They need someone who can pressure-test
                    the business through an investor lens and turn complexity into conviction.
                  </p>
                </div>
              </div>

              {/* Decorative Element */}
              <div 
                className="mt-8 glass-card relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,107,53,0.1) 0%, rgba(255,107,53,0.05) 100%)',
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="text-[#FF6B35] font-semibold mb-2">The Difference</div>
                  <p className="text-white/70 text-sm">
                    Having represented startups during negotiations and helped investors evaluate deals, 
                    I understand the psychology and mentality of both sides. This unique perspective 
                    helps you position your startup for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
