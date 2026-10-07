import React, { useState } from 'react';
import { X, Sparkles, Calendar, Clock, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface QuoteSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EVENT_TYPES = [
  'Casamento',
  '15 Anos',
  'Formatura',
  'Aniversário',
  'Evento Corporativo',
  'Confraternização / Festa',
];

const DURATIONS = ['2 Horas', '3 Horas', '4 Horas', 'Mais tempo'];

export const QuoteSimulatorModal: React.FC<QuoteSimulatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [eventType, setEventType] = useState('Casamento');
  const [duration, setDuration] = useState('3 Horas');
  const [eventDate, setEventDate] = useState('');
  const [city, setCity] = useState('Bagé - RS');
  const [guestCount, setGuestCount] = useState('Até 100');

  if (!isOpen) return null;

  const handleSendToWhatsApp = () => {
    const textMessage = `Olá CLICKBAGE 360°! Gostaria de consultar disponibilidade e orçamento:
• Tipo de Evento: ${eventType}
• Duração estimada: ${duration}
• Data aproximada: ${eventDate || 'A definir'}
• Local: ${city}
• Convidados aprox.: ${guestCount}

Poderiam me passar mais informações e valores?`;

    const encoded = encodeURIComponent(textMessage);
    // Directly open the WhatsApp link with prefilled message
    window.open(`https://wa.link/h7lv8m?text=${encoded}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-quote-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0d0c0a] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.2)] overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top metallic bar */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD966] to-transparent rounded-t-3xl" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar simulador"
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#D4AF37] transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-left mb-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD966]" />
            <span>Simulador Rápido</span>
          </div>
          <h3 id="modal-quote-title" className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
            Personalize seu Evento
          </h3>
          <p className="text-neutral-400 text-xs mt-1">
            Selecione as características para receber uma proposta personalizada no WhatsApp.
          </p>
        </div>

        {/* Form Body */}
        <div className="space-y-4">
          {/* Event Type */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
              Tipo de Comemoração
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {EVENT_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setEventType(type)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all text-left cursor-pointer ${
                    eventType === type
                      ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#FFD966] shadow-[0_0_10px_rgba(212,175,55,0.2)]'
                      : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
              Tempo de Ativação
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {DURATIONS.map((dur) => (
                <button
                  key={dur}
                  type="button"
                  onClick={() => setDuration(dur)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all text-center cursor-pointer ${
                    duration === dur
                      ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#FFD966] shadow-[0_0_10px_rgba(212,175,55,0.2)]'
                      : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
                  }`}
                >
                  {dur}
                </button>
              ))}
            </div>
          </div>

          {/* Date & Location Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                Data / Mês Previsto
              </label>
              <input
                type="text"
                placeholder="Ex: 15 de Novembro / 2026"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 focus:border-[#D4AF37] text-xs text-white placeholder-neutral-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                Cidade do Evento
              </label>
              <input
                type="text"
                placeholder="Ex: Bagé - RS"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800 focus:border-[#D4AF37] text-xs text-white placeholder-neutral-500 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
              Estimativa de Convidados
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Até 100', '100 a 250', 'Mais de 250'].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGuestCount(g)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all text-center cursor-pointer ${
                    guestCount === g
                      ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#FFD966]'
                      : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Submit to WhatsApp Button */}
        <div className="mt-7">
          <button
            type="button"
            onClick={handleSendToWhatsApp}
            className="btn-whatsapp-gold w-full py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
          >
            <WhatsAppIcon size={26} />
            <span className="font-bold text-sm sm:text-base text-white hover:text-[#FFDF73] tracking-wide">
              SOLICITAR DISPONIBILIDADE NO WHATSAPP
            </span>
          </button>

          <p className="text-[11px] text-neutral-400 text-center mt-2.5">
            Você será direcionado diretamente para nossa conversa oficial no WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};
