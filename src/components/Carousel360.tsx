import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from 'lucide-react';

export interface CarouselImageItem {
  id: number;
  url: string;
  title: string;
  tag: string;
}

const CAROUSEL_IMAGES: CarouselImageItem[] = [
  {
    id: 1,
    url: 'https://i.postimg.cc/4NN75vdg/IMG-7290.jpg',
    title: 'Experiência 360° com Iluminação Profissional',
    tag: 'Estrutura Premium',
  },
  {
    id: 2,
    url: 'https://i.postimg.cc/FsWfnfdr/IMG-7292.jpg',
    title: 'Celebrações & Casamentos Inesquecíveis',
    tag: 'Casamentos & 15 Anos',
  },
  {
    id: 3,
    url: 'https://i.postimg.cc/SNTXtX2Q/IMG-7294.jpg',
    title: 'Momentos Compartilháveis em Alta Resolução',
    tag: 'Diversão Garantida',
  },
  {
    id: 4,
    url: 'https://i.postimg.cc/VLGSHSrm/IMG-7293.jpg',
    title: 'Design Moderno e Plataforma de Alto Padrão',
    tag: 'Tecnologia 360°',
  },
  {
    id: 5,
    url: 'https://i.postimg.cc/sD6B0BQz/IMG-7291.jpg',
    title: 'Energia Única e Vídeos com Efeitos Especiais',
    tag: 'Eventos & Festas',
  },
];

export const Carousel360: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const total = CAROUSEL_IMAGES.length;
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoPlayTimer = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay ~3.5 seconds
  useEffect(() => {
    if (isPaused || lightboxIndex !== null) {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
      return;
    }

    autoPlayTimer.current = window.setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isPaused, lightboxIndex, nextSlide]);

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      const isSwipe = Math.abs(distance) > 45;
      if (isSwipe) {
        if (distance > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    // Resume autoplay shortly after touch release
    setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  // Calculate position offset for 3D stack perspective
  const getSlidePositionClass = (idx: number) => {
    const diff = (idx - currentIndex + total) % total;

    if (diff === 0) {
      return {
        zIndex: 30,
        transform: 'translateX(0%) scale(1)',
        opacity: 1,
        pointerEvents: 'auto' as const,
        filter: 'brightness(1)',
      };
    } else if (diff === 1 || diff === -(total - 1)) {
      // Right neighbor
      return {
        zIndex: 20,
        transform: 'translateX(65%) scale(0.88)',
        opacity: 0.6,
        pointerEvents: 'auto' as const,
        filter: 'brightness(0.65)',
      };
    } else if (diff === total - 1 || diff === -1) {
      // Left neighbor
      return {
        zIndex: 20,
        transform: 'translateX(-65%) scale(0.88)',
        opacity: 0.6,
        pointerEvents: 'auto' as const,
        filter: 'brightness(0.65)',
      };
    } else {
      // Background hidden slides
      return {
        zIndex: 10,
        transform: 'translateX(0%) scale(0.75)',
        opacity: 0,
        pointerEvents: 'none' as const,
        filter: 'brightness(0.4)',
      };
    }
  };

  return (
    <section className="relative py-12 sm:py-20 px-4 max-w-6xl mx-auto z-10 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#FFD966]" />
          <span>Galeria de Eventos Reais</span>
        </div>
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Viva a experiência <span className="gold-text-gradient">360°</span>
        </h2>
        <p className="text-neutral-400 text-xs sm:text-sm mt-2 max-w-md mx-auto">
          Veja a estrutura real da CLICKBAGE 360° encantando convidados em festas e comemorações.
        </p>
      </div>

      {/* Main Carousel Viewport */}
      <div
        className="relative w-full max-w-3xl mx-auto h-[380px] sm:h-[460px] md:h-[520px] flex items-center justify-center select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {CAROUSEL_IMAGES.map((item, idx) => {
          const style = getSlidePositionClass(idx);
          const isCurrent = idx === currentIndex;

          return (
            <div
              key={item.id}
              onClick={() => {
                if (isCurrent) {
                  setLightboxIndex(idx);
                } else {
                  goToSlide(idx);
                }
              }}
              style={style}
              className={`absolute top-0 bottom-0 w-[78%] sm:w-[72%] md:w-[68%] transition-all duration-700 ease-out cursor-pointer rounded-2xl overflow-hidden shadow-2xl ${
                isCurrent
                  ? 'gold-border-glow shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_35px_rgba(212,175,55,0.22)]'
                  : 'border border-neutral-800'
              }`}
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />

              {/* Gradient overlay for readability and cinematic depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Top subtle shine bar on active card */}
              {isCurrent && (
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD966]/80 to-transparent pointer-events-none" />
              )}

              {/* Card Footer Tag & Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex items-end justify-between pointer-events-none">
                <div>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#FFD966] drop-shadow-md">
                    {item.tag}
                  </span>
                  <h3 className="text-white text-xs sm:text-base font-medium line-clamp-1 mt-0.5 drop-shadow-md">
                    {item.title}
                  </h3>
                </div>

                {isCurrent && (
                  <div className="p-2 rounded-full bg-black/60 border border-[#D4AF37]/40 text-[#FFD966] opacity-90 backdrop-blur-sm pointer-events-auto hover:bg-[#D4AF37] hover:text-black transition-all">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Carousel Arrow Navigation Buttons */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Foto anterior"
          className="absolute left-2 sm:left-4 z-40 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-black text-[#D4AF37] hover:text-[#FFD966] border border-[#D4AF37]/30 hover:border-[#D4AF37] backdrop-blur-md transition-all shadow-lg cursor-pointer transform hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Próxima foto"
          className="absolute right-2 sm:right-4 z-40 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-black text-[#D4AF37] hover:text-[#FFD966] border border-[#D4AF37]/30 hover:border-[#D4AF37] backdrop-blur-md transition-all shadow-lg cursor-pointer transform hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Carousel Indicators & Status */}
      <div className="mt-6 flex flex-col items-center gap-3">
        {/* Indicators Dots */}
        <div className="flex items-center gap-2">
          {CAROUSEL_IMAGES.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-label={`Ir para foto ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-7 bg-gradient-to-r from-[#D4AF37] to-[#FFD966] shadow-[0_0_8px_#D4AF37]'
                  : 'w-2 bg-neutral-800 hover:bg-neutral-600'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter / Status info */}
        <div className="text-[11px] text-neutral-400 font-mono flex items-center gap-2">
          <span>{currentIndex + 1}</span>
          <span className="text-[#D4AF37]/50">/</span>
          <span>{total}</span>
          <span className="text-neutral-500">·</span>
          <span className="text-[10px] text-neutral-400">Arraste para navegar</span>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Fechar visualização"
            className="absolute top-5 right-5 p-3 rounded-full bg-neutral-900 border border-[#D4AF37]/40 text-[#FFD966] hover:bg-[#D4AF37] hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[82vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden gold-border-glow shadow-[0_0_50px_rgba(212,175,55,0.25)]">
              <img
                src={CAROUSEL_IMAGES[lightboxIndex].url}
                alt={CAROUSEL_IMAGES[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain mx-auto rounded-xl"
              />
            </div>

            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                {CAROUSEL_IMAGES[lightboxIndex].tag}
              </span>
              <p className="text-white text-sm sm:text-base font-medium mt-1">
                {CAROUSEL_IMAGES[lightboxIndex].title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
