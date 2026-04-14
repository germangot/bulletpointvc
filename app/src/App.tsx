import { useEffect, useRef, useState } from 'react';
import Hero from './sections/Hero';
import Advantage from './sections/Advantage';
import Funnel from './sections/Funnel';
import WhatYouGet from './sections/WhatYouGet';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';
import Navigation from './sections/Navigation';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      ref={mainRef}
      className={`min-h-screen bg-black text-white transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      <Navigation />
      <main>
        <Hero />
        <Advantage />
        <Funnel />
        <WhatYouGet />
        <Pricing />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
