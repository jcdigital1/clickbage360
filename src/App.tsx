import React, { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Hero } from './components/Hero';
import { Carousel360 } from './components/Carousel360';
import { Services } from './components/Services';
import { ExperienceHighlights } from './components/ExperienceHighlights';
import { Differential } from './components/Differential';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { QuoteSimulatorModal } from './components/QuoteSimulatorModal';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030303] text-neutral-100 flex flex-col selection:bg-[#D4AF37]/30 selection:text-white overflow-x-hidden">
      {/* Background Ambience, Orbitals & Particles */}
      <BackgroundEffects />

      {/* Top Luxury Announcement Kicker */}
      <header className="relative z-20 border-b border-[#D4AF37]/15 bg-[#070706]/80 backdrop-blur-md py-2 px-4 text-center">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-[11px] sm:text-xs text-[#D4AF37] font-medium tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#FFD966] shrink-0 animate-pulse" />
          <span>Agenda aberta para eventos em Bagé e Região</span>
          <span className="hidden sm:inline text-neutral-400">· Garanta a sua data com antecedência</span>
          <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 ml-1" />
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="relative z-10 flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuickQuote={() => setIsQuoteModalOpen(true)} />

        {/* Real Event Photos Carousel (5 Real Photos Provided) */}
        <Carousel360 />

        {/* Services Section */}
        <Services />

        {/* How The Experience Works */}
        <ExperienceHighlights />

        {/* Differential & Final Call To Action */}
        <Differential />
      </main>

      {/* Clean Luxury Footer */}
      <Footer />

      {/* Floating 3D WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Quick Quote Simulator Modal */}
      <QuoteSimulatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
