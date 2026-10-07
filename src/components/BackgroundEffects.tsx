import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Deep luxury ambient radial gold glows */}
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[800px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(212,175,55,0.08) 50%, transparent 75%)',
        }}
      />
      
      <div
        className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[160px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(255,217,102,0.3) 0%, rgba(212,175,55,0.05) 55%, transparent 80%)',
        }}
      />

      <div
        className="absolute bottom-[10%] left-[-10%] w-[550px] h-[550px] rounded-full blur-[160px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, rgba(170,119,28,0.06) 60%, transparent 80%)',
        }}
      />

      {/* Cinematic 360° Orbital Rings - Representing rotating camera platform */}
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[720px] h-[720px] pointer-events-none opacity-20 hidden md:block">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-dashed border-[#D4AF37]/30 animate-orbit-slow" />
        {/* Middle Ring */}
        <div className="absolute inset-[60px] rounded-full border border-[#D4AF37]/20 animate-orbit-reverse">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFD966] shadow-[0_0_8px_#FFD966]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_6px_#D4AF37]" />
        </div>
        {/* Inner Ring */}
        <div className="absolute inset-[130px] rounded-full border border-dotted border-[#D4AF37]/25 animate-orbit-slow" />
      </div>

      {/* Subtle Golden Micro Sparkles */}
      <div className="absolute top-[18%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#FFD966] opacity-40 blur-[0.5px] animate-pulse" />
      <div className="absolute top-[28%] right-[15%] w-2 h-2 rounded-full bg-[#D4AF37] opacity-30 blur-[0.5px] animate-pulse" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-[52%] left-[8%] w-1 h-1 rounded-full bg-[#FFD966] opacity-45 blur-[0.5px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[68%] right-[10%] w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-35 blur-[0.5px] animate-pulse" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-[85%] left-[18%] w-1 h-1 rounded-full bg-[#FFE799] opacity-40 blur-[0.5px] animate-pulse" style={{ animationDelay: '1.8s' }} />

      {/* Subtle Vignette overlay to anchor deep black #030303 edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#030303_100%)] opacity-70" />
    </div>
  );
};
