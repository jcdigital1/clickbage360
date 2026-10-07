import React, { useState, useEffect } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const WHATSAPP_URL = 'https://wa.link/h7lv8m';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Atendimento rápido WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center gap-3 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp da CLICKBAGE 360°"
        className="group relative flex items-center gap-3 pl-3.5 pr-4 py-2.5 rounded-full bg-[#0a0a0a]/95 border border-[#D4AF37]/50 shadow-[0_10px_30px_rgba(0,0,0,0.85),0_0_20px_rgba(37,211,102,0.25)] hover:border-[#FFD966] hover:shadow-[0_12px_35px_rgba(0,0,0,0.95),0_0_28px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
      >
        {/* Subtle continuous micro pulse ring (non-irritating, very discreet) */}
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/30 animate-ping opacity-25 pointer-events-none" />

        {/* 3D WhatsApp Icon */}
        <div className="relative shrink-0">
          <WhatsAppIcon size={34} />
        </div>

        {/* Label */}
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#25D366] leading-none">
            Online Agora
          </span>
          <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FFDF73] transition-colors leading-tight mt-0.5">
            Orçamento 360°
          </span>
        </div>
      </a>
    </aside>
  );
};
