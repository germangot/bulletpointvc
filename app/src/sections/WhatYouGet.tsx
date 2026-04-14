import { useEffect, useRef, useState } from 'react';
import { ClipboardList, Clock, Cpu, ListChecks, Brain, Target } from 'lucide-react';
import { openConsultationModal } from '../lib/consultationModal';

const WhatYouGet = () => {
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

  const benefits = [
    {
      icon: ClipboardList,
      title: 'Pre-Session Strategy',
      description: 'We align on your specific goals and questions before we meet. I research your situation and prepare a customized consultation plan.',
    },
    {
      icon: Clock,
      title: 'Unlimited Time',
      description: "No 60-minute cutoff. Our sessions last 2-3 hours on average, sometimes longer. We continue until all your questions are answered.",
    },
    {
      icon: Cpu,
      title: 'AI-Powered Tools',
      description: 'Learn how to use cutting-edge AI to create pitch decks, financial models, and investor materials in hours, not weeks.',
    },
    {
      icon: ListChecks,
      title: 'Step-by-Step Playbooks',
      description: 'Leave with specific, actionable instructions. Not generic advice — exact scripts, templates, and processes tailored to your situation.',
    },
    {
      icon: Brain,
      title: 'Investor Psychology',
      description: "Understand what investors really think when they read your pitch. Learn to address objections before they're raised.",
    },
    {
      icon: Target,
      title: 'Reality Check',
      description: 'Get honest feedback on your fundraising goals. I\'ll help you align expectations with the current VC climate.',
    },
  ];

  return (
    <section
      id="what-you-get"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className={`section-label transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              WHAT YOU GET
            </span>
            <h2
              className={`headline-lg mt-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Every Consultation Includes
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`glass-card group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 100}ms`,
                  transform: isVisible ? `translateY(${index % 2 === 0 ? 0 : 10}px)` : undefined,
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center mb-5 group-hover:bg-[#FF6B35]/20 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-[#FF6B35] group-hover:rotate-[360deg] transition-transform duration-500" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{benefit.description}</p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(255,107,53,0.1) 0%, transparent 70%)',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`mt-16 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <p className="text-white/50 mb-4">
              Not sure which package is right for you?
            </p>
            <button 
              onClick={openConsultationModal}
              className="text-[#FF6B35] font-medium hover:underline underline-offset-4 transition-all"
            >
              View pricing and book your consultation →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
