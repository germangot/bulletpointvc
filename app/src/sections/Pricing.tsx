import { useEffect, useRef, useState } from 'react';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';

const Pricing = () => {
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

  const packages = [
    {
      name: 'Single Session',
      price: '$500',
      originalPrice: null,
      save: null,
      description: 'Perfect for specific challenges',
      icon: Star,
      features: [
        '1 unlimited consultation',
        'Pre-session goal alignment',
        'Custom consultation plan',
        'Step-by-step action items',
        '7-day email follow-up',
      ],
      cta: 'Book Single Session',
      popular: false,
    },
    {
      name: 'Transformation Package',
      price: '$1,300',
      originalPrice: '$1,500',
      save: 'Save $200',
      description: 'Comprehensive fundraising transformation',
      icon: Zap,
      features: [
        '3 unlimited consultations',
        'Deep-dive into your fundraising strategy',
        'AI tool training & implementation',
        'Pitch deck optimization',
        'Investor outreach strategy',
        '30-day WhatsApp support',
      ],
      cta: 'Start Your Transformation',
      popular: true,
    },
    {
      name: 'Accelerator Package',
      price: '$2,000',
      originalPrice: '$2,500',
      save: 'Get 1 FREE (Save $500)',
      description: 'End-to-end fundraising partnership',
      icon: Crown,
      features: [
        '5 unlimited consultations',
        'Complete fundraising funnel setup',
        'Financial model creation with AI',
        'Investor list building & outreach',
        'Due diligence preparation',
        'Term sheet negotiation guidance',
        '60-day priority support',
      ],
      cta: 'Accelerate Your Raise',
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className={`section-label transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              INVESTMENT
            </span>
            <h2
              className={`headline-lg mt-4 mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Choose Your Package
            </h2>
            <p
              className={`body-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Every consultation is unlimited in time. Most sessions run 2-3 hours. 
              We don't stop until you have complete clarity.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-end">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`pricing-card relative group transition-all duration-700 ${
                  pkg.popular ? 'popular md:-mt-8' : ''
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${500 + index * 150}ms` }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1.5 bg-[#FF6B35] rounded-full text-sm font-medium flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-current" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Package Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  pkg.popular ? 'bg-[#FF6B35]/20' : 'bg-white/5'
                }`}>
                  <pkg.icon className={`w-6 h-6 ${pkg.popular ? 'text-[#FF6B35]' : 'text-white/60'}`} />
                </div>

                {/* Package Name */}
                <h3 className="font-semibold text-xl mb-2">{pkg.name}</h3>
                <p className="text-sm text-white/50 mb-5">{pkg.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-semibold">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-white/40 line-through">{pkg.originalPrice}</span>
                    )}
                  </div>
                  {pkg.save && (
                    <div className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                      pkg.popular ? 'bg-[#FF6B35]/20 text-[#FF6B35]' : 'bg-white/10 text-white/60'
                    }`}>
                      {pkg.save}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        pkg.popular ? 'text-[#FF6B35]' : 'text-white/40'
                      }`} />
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className={`w-full py-3.5 px-6 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 group/btn ${
                    pkg.popular 
                      ? 'bg-[#FF6B35] text-white hover:scale-105' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  onClick={() => window.open('mailto:vlad@bulletpoint.vc?subject=Consultation Booking', '_blank')}
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          {/* Trust Note */}
          <div
            className={`mt-16 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-full bg-[#FF6B35]/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <div className="text-left">
                <div className="font-medium">100% Satisfaction Guarantee</div>
                <div className="text-sm text-white/50">Not satisfied? Get a full refund after your first session.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
