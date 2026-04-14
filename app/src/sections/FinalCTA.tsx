import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Mail, AlertCircle } from 'lucide-react';

const FinalCTA = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,107,53,0.15) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-64"
          style={{
            background: 'linear-gradient(to top, rgba(255,107,53,0.05) 0%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2
            className={`headline-lg mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            Stop Guessing.
            <br />
            <span className="gradient-text animate-text-glow">Start Raising.</span>
          </h2>

          {/* Subheadline */}
          <p
            className={`body-lg mb-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Every day without a clear fundraising strategy is a day your competitors get ahead. 
            Book your consultation now and turn fundraising from your biggest stress into your greatest advantage.
          </p>

          {/* Urgency Element */}
          <div
            className={`inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/30 mb-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <AlertCircle className="w-5 h-5 text-[#FF6B35]" />
            <span className="text-sm text-white/80">
              Limited: I only take <span className="text-[#FF6B35] font-semibold">10 consultation clients per month</span> to ensure quality.
            </span>
          </div>

          {/* CTA Button */}
          <div
            className={`mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <button 
              onClick={() => window.open('mailto:vlad@bulletpoint.vc?subject=Consultation Booking', '_blank')}
              className="btn-primary text-lg py-5 px-10 animate-pulse-glow group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Consultation Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Secondary Contact */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1100ms' }}
          >
            <p className="text-white/50 mb-2">Prefer to talk first?</p>
            <a 
              href="mailto:vlad@bulletpoint.vc"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:underline underline-offset-4 transition-all"
            >
              <Mail className="w-4 h-4" />
              vlad@bulletpoint.vc
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
