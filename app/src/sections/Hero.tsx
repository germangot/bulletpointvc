import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Users, TrendingUp, Award } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, value: '300+', label: 'Startups Guided' },
    { icon: TrendingUp, value: '$150M+', label: 'Total Raised' },
    { icon: Award, value: '10+', label: 'Years Experience' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Floating Accent Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'float 15s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-72 md:h-72 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'float 12s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Eyebrow */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <span className="section-label text-[#FF6B35]">Fundraising Consultations</span>
          </div>

          {/* Headline */}
          <h1 className="mt-4 mb-8">
            {['Turn Your', 'Fundraising', 'Into An', 'Art Form'].map((line, index) => (
              <span
                key={index}
                className={`block headline-xl transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${400 + index * 100}ms`,
                  textShadow: index === 3 ? '0 0 40px rgba(255,107,53,0.3)' : 'none',
                }}
              >
                {index === 3 ? (
                  <span className="gradient-text animate-text-glow">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p
            className={`body-lg max-w-2xl mb-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            Unlimited-time consultations with a strategist who's been on both sides of the table. 
            300+ startups guided. $150M+ raised. Zero templates. 100% results.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            <button onClick={scrollToPricing} className="btn-primary group">
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Consultation — $500
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={scrollToPricing} className="btn-secondary">
              View Package Deals
            </button>
          </div>

          {/* Stats Bar */}
          <div
            className={`grid grid-cols-3 gap-6 md:gap-12 max-w-3xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1300ms' }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-[#FF6B35]" />
                  <span className="text-2xl md:text-3xl lg:text-4xl font-semibold">{stat.value}</span>
                </div>
                <span className="text-xs md:text-sm text-white/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;
