import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const testimonials = [
    {
      quote: "Vlad and his team create outstanding presentations and really help you get to the core of what you're trying to convey. Working with BulletPoint was a great experience. Their deck helped Refocus to secure a funding round of $4M. I'd highly recommend BulletPoint. I've collaborated with a lot of people in this space, and they're among the best out there.",
      name: 'Roman Kumar Vyas',
      role: 'CEO & Founder',
      company: 'Refocus',
      result: '$4M raised',
      image: '/founder-1.jpg',
    },
    {
      quote: "Working with Vlad and his team was helpful for EBAC Online. They condensed all our data and ideas into a well-structured 25-page pitch deck. Their research and analytics were thorough. With the current pitch deck, we're even more confident in pitching EBAC Online to investors.",
      name: 'Andrey Anishchenko',
      role: 'Co-Founder',
      company: 'EBAC Online',
      result: 'Series B raised',
      image: '/founder-2.jpg',
    },
    {
      quote: "Vlad is a sharp expert who understands investor's 'psychology' really well. We got very useful and applicable advice on fundraising, pitch preparation and storytelling. It is especially valuable that Vlad is very supportive and actively shares contacts from his wide networking.",
      name: 'Elena Dobrohotova',
      role: 'ex-CMO',
      company: 'NotYet',
      result: 'Active fundraising',
      image: '/founder-3.jpg',
    },
    {
      quote: "It's not easy to create a Pitch Deck for a smart city, especially when there is a huge complex vision distributed among several teams. Working with Vlad felt less like outsourcing a Pitch Deck, and more like finding a fellow visionary. Vlad is a great storyteller: he had crystallized vision of Nuanu City in a captivating and engaging way, reducing complexity without sacrificing depth. After working with Vlad, we've presented this deck to numerous stakeholders and potential investors, and received tons of positive feedback. If you need a Pitch Deck that has both high clarity and powerful storytelling, Vlad's team offers something quite rare in this domain.",
      name: 'Nuanu City Team',
      role: 'Leadership',
      company: 'Nuanu City',
      result: 'Multiple stakeholders engaged',
      image: '/founder-4.jpg',
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full opacity-10 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 70%)',
            filter: 'blur(100px)',
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
              PROOF
            </span>
            <h2
              className={`headline-lg mt-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Founders Who Transformed Their Fundraising
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial-card relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-[#FF6B35]/30 mb-4" />

                  {/* Quote Text */}
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>

                  {/* Result Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-medium mb-6">
                    <TrendingUp className="w-4 h-4" />
                    {testimonial.result}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#FF6B35]/30"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/50">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden">
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2"
                    >
                      <div className="testimonial-card">
                        {/* Quote Icon */}
                        <Quote className="w-8 h-8 text-[#FF6B35]/30 mb-4" />

                        {/* Quote Text */}
                        <p className="text-white/80 text-base leading-relaxed mb-6">
                          "{testimonial.quote}"
                        </p>

                        {/* Result Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-sm font-medium mb-6">
                          <TrendingUp className="w-4 h-4" />
                          {testimonial.result}
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-[#FF6B35]/30"
                          />
                          <div>
                            <div className="font-semibold text-sm">{testimonial.name}</div>
                            <div className="text-xs text-white/50">
                              {testimonial.role} at {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'w-6 bg-[#FF6B35]' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Success Stats */}
          <div
            className={`mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            {[
              { value: '$150M+', label: 'Total Raised by Clients' },
              { value: '300+', label: 'Startups Consulted' },
              { value: '85%', label: 'Success Rate' },
              { value: '4.9/5', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
