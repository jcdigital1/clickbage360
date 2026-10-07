import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { MapPin, Phone, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const WHATSAPP_URL = 'https://wa.link/h7lv8m';

  return (
    <footer className="relative border-t border-neutral-900 bg-[#050505] pt-12 pb-24 sm:pb-14 px-4 z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Small brand logo without background box */}
        <div className="relative mb-5 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full blur-xl bg-[#D4AF37]/15 pointer-events-none" />
          <img
            src="https://i.postimg.cc/PfKNPLML/F2F0E96E-03E1-480B-9B55-9B4B1DCB00E9.png"
            alt="CLICKBAGE 360°"
            className="w-36 sm:w-44 h-auto object-contain relative z-10 opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </div>

        {/* Tagline as specified */}
        <p className="text-sm sm:text-base text-neutral-300 font-light tracking-wide max-w-md">
          “Transformando momentos em experiências 360°.”
        </p>

        {/* Contact & Location Details */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Bagé e Região · RS</span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Atendimento via WhatsApp</span>
          </a>
        </div>

        {/* Quick WhatsApp Action pill */}
        <div className="mt-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900/90 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-xs font-semibold text-neutral-200 hover:text-white transition-all shadow-md group cursor-pointer"
          >
            <WhatsAppIcon size={18} />
            <span>Falar com a equipe no WhatsApp</span>
          </a>
        </div>

        {/* Clean Copyright without any AI mentions */}
        <div className="mt-8 pt-6 border-t border-neutral-900/70 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 gap-2">
          <div>
            © {new Date().getFullYear()} CLICKBAGE 360°. Todos os direitos reservados.
          </div>
          <div className="text-[10px] tracking-wider uppercase text-neutral-400">
            Plataforma 360° · Locação para Eventos
          </div>
        </div>
      </div>
    </footer>
  );
};
