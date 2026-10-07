import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  size?: number;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className = 'w-6 h-6', size }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-hidden="true"
    >
      <defs>
        {/* Subtle 3D radial depth gradient for WhatsApp green */}
        <radialGradient
          id="waGreenGrad"
          cx="30%"
          cy="25%"
          r="80%"
          fx="25%"
          fy="20%"
        >
          <stop offset="0%" stopColor="#4AE87E" />
          <stop offset="45%" stopColor="#25D366" />
          <stop offset="90%" stopColor="#128C7E" />
          <stop offset="100%" stopColor="#0B5C52" />
        </radialGradient>
        {/* Top glossy shine reflection */}
        <linearGradient id="waShineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        {/* Drop shadow filter */}
        <filter id="waShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Main 3D embossed circle */}
      <circle
        cx="16"
        cy="16"
        r="15"
        fill="url(#waGreenGrad)"
        filter="url(#waShadow)"
      />

      {/* Subtle outer metallic ring */}
      <circle
        cx="16"
        cy="16"
        r="14.5"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
        fill="none"
      />

      {/* Top highlight ellipse */}
      <ellipse
        cx="16"
        cy="9"
        rx="10"
        ry="4.5"
        fill="url(#waShineGrad)"
      />

      {/* WhatsApp Official Phone & Speech Silhouette */}
      <path
        d="M24.8 7.2C22.5 4.9 19.4 3.6 16 3.6C9.2 3.6 3.6 9.2 3.6 16C3.6 18.2 4.2 20.3 5.3 22.1L3.5 28.5L10.1 26.8C11.9 27.8 13.9 28.4 16 28.4C22.8 28.4 28.4 22.8 28.4 16C28.4 12.6 27.1 9.5 24.8 7.2ZM16 26.3C14.1 26.3 12.3 25.8 10.7 24.8L10.3 24.6L6.4 25.6L7.5 21.8L7.2 21.4C6.1 19.7 5.6 17.9 5.6 16C5.6 10.3 10.3 5.6 16 5.6C18.8 5.6 21.4 6.7 23.3 8.7C25.3 10.6 26.4 13.2 26.4 16C26.4 21.7 21.7 26.3 16 26.3ZM21.7 18.6C21.4 18.4 19.9 17.7 19.6 17.6C19.3 17.5 19.1 17.4 18.9 17.7C18.7 18 18.1 18.7 17.9 18.9C17.7 19.1 17.5 19.2 17.2 19C16.9 18.9 15.9 18.5 14.8 17.5C13.9 16.7 13.3 15.7 13.1 15.4C12.9 15.1 13.1 14.9 13.2 14.8C13.4 14.6 13.6 14.4 13.7 14.2C13.9 14 13.9 13.9 14 13.7C14.1 13.5 14 13.3 13.9 13.2C13.8 13.1 13.3 11.7 13.1 11.1C12.8 10.5 12.6 10.6 12.4 10.6H11.8C11.6 10.6 11.3 10.7 11 11C10.7 11.3 10 12 10 13.4C10 14.8 11 16.1 11.2 16.3C11.3 16.5 13.3 19.5 16.3 20.8C17 21.1 17.6 21.3 18 21.4C18.7 21.7 19.4 21.6 19.9 21.5C20.5 21.4 21.7 20.8 21.9 20.1C22.2 19.4 22.2 18.8 22.1 18.7C22 18.8 21.9 18.7 21.7 18.6Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};
