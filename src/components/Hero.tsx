import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Sparkles, Camera } from 'lucide-react';

interface HeroProps {
  onOpenQuickQuote?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuickQuote }) => {
  const WHATSAPP_URL = 'https://wa.link/h7lv8m';

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 px-4 flex flex-col items-center text-center z-10 max-w-4xl mx-auto">
      {/* Brand Badge / Kicker (Clean unboxed typography) */}
      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm tracking-[0.25em] uppercase text-[#D4AF37]/90 font-medium mb-5 sm:mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
        <span>CLICKBAGE 360°</span>
        <span className="text-[#D4AF37]/40">·</span>
        <span className="text-neutral-400">Experiências para eventos</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
      </div>

      {/* Centered Logo with smooth entrance & subtle golden radial illumination */}
      <div className="relative group my-2 sm:my-4 flex items-center justify-center">
        {/* Soft radial golden backglow strictly behind logo */}
        <div
          className="absolute inset-0 -m-6 sm:-m-10 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.45) 0%, rgba(255,217,102,0.15) 40%, transparent 70%)',
          }}
        />

        {/* Orbit indicator ring subtle around logo */}
        <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-[#D4AF37]/20 border-dashed animate-orbit-slow pointer-events-none" />

        <img
          src="https://i.postimg.cc/PfKNPLML/F2F0E96E-03E1-480B-9B55-9B4B1DCB00E9.png"
          alt="Logomarca oficial CLICKBAGE 360° - Experiências para eventos"
          width={340}
          height={200}
          className="relative z-10 w-56 sm:w-72 md:w-80 h-auto object-contain transition-all duration-700 hover:scale-[1.02] drop-shadow-[0_10px_25px_rgba(212,175,55,0.22)] select-none pointer-events-auto"
          loading="eager"
        />
      </div>

      {/* Main Title & Subtitle */}
      <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 max-w-2xl">
        <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Seu evento em{' '}
          <span className="gold-text-shimmer inline-block">
            todos os ângulos.
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
          Experiências 360° que transformam momentos em lembranças inesquecíveis.
        </p>
      </div>

      {/* Primary Action Button (WhatsApp 3D Luxury) */}
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-2">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar Orçamento via WhatsApp com a equipe da CLICKBAGE 360°"
          className="btn-whatsapp-gold group relative w-full sm:w-auto min-w-[280px] sm:min-w-[320px] px-7 py-4 rounded-xl flex items-center justify-center gap-4 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
        >
          {/* Subtle top edge metallic highlight */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFD966]/60 to-transparent rounded-t-xl" />

          {/* Official WhatsApp 3D Icon */}
          <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-110">
            <WhatsAppIcon size={30} />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[11px] tracking-wider uppercase text-[#D4AF37] font-semibold flex items-center gap-1">
              Atendimento Imediato
              <Sparkles className="w-3 h-3 text-[#FFD966] inline-block opacity-80" />
            </span>
            <span className="text-base sm:text-lg font-bold tracking-wide text-white group-hover:text-[#FFDF73] transition-colors">
              SOLICITAR ORÇAMENTO
            </span>
          </div>

          {/* Arrow subtle pulse */}
          <div className="ml-auto text-[#D4AF37] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>

        {onOpenQuickQuote && (
          <button
            type="button"
            onClick={onOpenQuickQuote}
            className="w-full sm:w-auto px-5 py-4 rounded-xl border border-neutral-800 hover:border-[#D4AF37]/50 bg-neutral-950/60 hover:bg-neutral-900/80 text-neutral-300 hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Camera className="w-4 h-4 text-[#D4AF37]" />
            <span>Simular Orçamento Rápido</span>
          </button>
        )}
      </div>

      {/* Luxury Event Categories Bar (Clean unboxed metadata) */}
      <div className="mt-8 sm:mt-10 pt-6 border-t border-neutral-900/80 w-full flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs text-neutral-400 font-light">
        <span className="hover:text-[#D4AF37] transition-colors">Casamentos</span>
        <span className="text-[#D4AF37]/40">·</span>
        <span className="hover:text-[#D4AF37] transition-colors">15 Anos</span>
        <span className="text-[#D4AF37]/40">·</span>
        <span className="hover:text-[#D4AF37] transition-colors">Formaturas</span>
        <span className="text-[#D4AF37]/40">·</span>
        <span className="hover:text-[#D4AF37] transition-colors">Aniversários</span>
        <span className="text-[#D4AF37]/40">·</span>
        <span className="hover:text-[#D4AF37] transition-colors">Corporativos</span>
        <span className="text-[#D4AF37]/40">·</span>
        <span className="hover:text-[#D4AF37] transition-colors">Confraternizações</span>
      </div>
    </section>
  );
};
