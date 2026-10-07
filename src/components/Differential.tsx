import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const Differential: React.FC = () => {
  const WHATSAPP_URL = 'https://wa.link/h7lv8m';

  return (
    <section className="relative py-14 sm:py-24 px-4 max-w-4xl mx-auto z-10 text-center">
      {/* Decorative backdrop luxury box */}
      <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-[#D4AF37]/35 bg-gradient-to-b from-[#100e08]/90 via-[#070706]/95 to-[#030303] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_-5px_rgba(212,175,55,0.18)]">
        {/* Subtle top golden light line */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FFD966] to-transparent" />

        {/* Ambient center radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
        />

        {/* Small top brand tag */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-[#FFD966]" />
          <span>Exclusividade & Alto Padrão</span>
          <Sparkles className="w-4 h-4 text-[#FFD966]" />
        </div>

        {/* Key Headline as requested */}
        <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight sm:leading-tight">
          Você vive o momento.{' '}
          <span className="block mt-1 sm:mt-2">
            A gente transforma em{' '}
            <span className="gold-text-shimmer inline-block">
              experiência.
            </span>
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-lg text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
          Leve a <span className="text-[#FFD966] font-medium">CLICKBAGE 360°</span> para o seu próximo evento.
        </p>

        {/* Guarantees / Quality proofs */}
        <div className="mt-7 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-neutral-300">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            <span>Equipe treinada & uniforme</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            <span>Equipamentos de última geração</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            <span>Vídeos entregues na hora</span>
          </div>
        </div>

        {/* CTA Button as requested */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Quero a CLICKBAGE 360 no meu evento - Solicitar via WhatsApp"
            className="btn-whatsapp-gold group relative w-full sm:w-auto min-w-[280px] sm:min-w-[340px] px-8 py-4 sm:py-5 rounded-2xl flex items-center justify-center gap-4 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] cursor-pointer shadow-2xl"
          >
            {/* Top edge glow */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFD966] to-transparent rounded-t-2xl" />

            <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-110">
              <WhatsAppIcon size={32} />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold">
                Agenda Aberta
              </span>
              <span className="text-base sm:text-lg font-bold tracking-wider text-white group-hover:text-[#FFDF73] transition-colors">
                QUERO NO MEU EVENTO
              </span>
            </div>

            <div className="ml-auto text-[#D4AF37] opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
