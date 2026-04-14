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
import ConsultationModal from './components/ConsultationModal';
import { OPEN_CONSULTATION_MODAL_EVENT } from './lib/consultationModal';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const openModal = () => setIsConsultationModalOpen(true);
    window.addEventListener(OPEN_CONSULTATION_MODAL_EVENT, openModal);

    return () => {
      window.removeEventListener(OPEN_CONSULTATION_MODAL_EVENT, openModal);
    };
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
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </div>
  );
}

export default App;
