import React from 'react';
import { Video, Camera, Sparkles, PartyPopper, ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'plataforma-360',
    title: 'PLATAFORMA 360°',
    subtitle: 'Tecnologia & Dinamismo',
    description: 'Vídeos envolventes e cheios de personalidade para seus convidados compartilharem.',
    icon: Video,
    features: ['Efeitos Slow-motion & Boomerang', 'Moldura e logo personalizadas', 'QR Code para download instantâneo'],
  },
  {
    id: 'experiencias-fotograficas',
    title: 'EXPERIÊNCIAS FOTOGRÁFICAS',
    subtitle: 'Registros Criativos',
    description: 'Registros criativos para transformar cada momento do seu evento em uma lembrança especial.',
    icon: Camera,
    features: ['Iluminação profissional de palco', 'Acessórios e adereços divertidos', 'Ângulos cinematográficos'],
  },
  {
    id: 'locacao-eventos',
    title: 'LOCAÇÃO PARA EVENTOS',
    subtitle: 'Estrutura Completa',
    description: 'Estrutura e equipamentos para levar uma experiência diferenciada à sua comemoração.',
    icon: Sparkles,
    features: ['Equipe técnica especializada no local', 'Montagem pontual e organizada', 'Equipamentos seguros e testados'],
  },
  {
    id: 'eventos-especiais',
    title: 'EVENTOS ESPECIAIS',
    subtitle: 'Para Todo Tipo de Festa',
    description: 'Casamentos, aniversários, formaturas, eventos corporativos e muito mais.',
    icon: PartyPopper,
    features: ['Casamentos e 15 anos', 'Formaturas e Confraternizações', 'Feiras, Lançamentos e Ações de Marca'],
  },
];

export const Services: React.FC = () => {
  const WHATSAPP_URL = 'https://wa.link/h7lv8m';

  return (
    <section className="relative py-12 sm:py-20 px-4 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span>Soluções Sob Medida</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
        </div>

        <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Mais que um vídeo.{' '}
          <span className="block mt-1 gold-text-shimmer">
            Uma experiência.
          </span>
        </h2>

        <p className="text-neutral-400 text-xs sm:text-base mt-3 max-w-lg mx-auto">
          Cada detalhe pensado para encantar seus convidados e gerar conteúdo que marca época nas redes sociais.
        </p>
      </div>

      {/* Services Grid (4 Premium Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Subtle top metallic reflex */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFD966]/40 to-transparent group-hover:via-[#FFD966]/80 transition-all duration-500" />
              
              {/* Background ambient radial glow on hover */}
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-[#D4AF37]/10 rounded-full blur-2xl group-hover:bg-[#D4AF37]/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header with Minimalist Luxury Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1a1710] to-[#0c0c0a] border border-[#D4AF37]/30 flex items-center justify-center text-[#FFD966] shadow-[0_4px_16px_rgba(0,0,0,0.6)] group-hover:border-[#D4AF37]/60 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#D4AF37]/70">
                    0{index + 1}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                  {service.subtitle}
                </div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold tracking-wide text-white mt-1 mb-3 group-hover:text-[#FFDF73] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Micro Features / Highlights */}
                <div className="space-y-2 pt-4 border-t border-neutral-900/90 mb-6">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-400">
                      <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Link */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-[#FFD966] transition-colors self-start group/link cursor-pointer pt-2"
                aria-label={`Solicitar informações sobre ${service.title}`}
              >
                <span>Consultar disponibilidade</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
