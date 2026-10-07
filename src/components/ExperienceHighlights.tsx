import React from 'react';
import { PlayCircle, QrCode, Music, Sparkles } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Posicionamento no Palco',
    desc: 'Seus convidados sobem na plataforma de vidro/LED com até 4 pessoas e escolhem adereços divertidos.',
    icon: PlayCircle,
  },
  {
    step: '02',
    title: 'Giro 360° Cinematográfico',
    desc: 'O braço motorizado gira suavemente registrando poses, danças e sorrisos em alta definição.',
    icon: Sparkles,
  },
  {
    step: '03',
    title: 'Edição com Trilha & Moldura',
    desc: 'Vídeo processado instantaneamente com efeitos de slow motion, aceleração, áudio empolgante e logo do evento.',
    icon: Music,
  },
  {
    step: '04',
    title: 'Download Imediato via QR Code',
    desc: 'Basta apontar a câmera do celular para a nossa tela e salvar o vídeo em segundos para postar nas redes.',
    icon: QrCode,
  },
];

export const ExperienceHighlights: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 px-4 max-w-5xl mx-auto z-10">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden border border-[#D4AF37]/25">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#D4AF37]">
            Como Funciona
          </span>
          <h3 className="font-cinzel text-xl sm:text-3xl font-bold text-white mt-1">
            Da plataforma direto para o celular
          </h3>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2">
            Processo 100% dinâmico, sem filas e com a maior taxa de compartilhamento do seu evento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#090909]/80 border border-neutral-800/80 rounded-xl p-5 hover:border-[#D4AF37]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#D4AF37] tracking-wider">
                      PASSO {item.step}
                    </span>
                    <Icon className="w-5 h-5 text-[#FFD966]" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2">
                    {item.title}
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
