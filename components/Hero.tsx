import React from 'react';
import bgImage from '@/src/assets/images/spiritual_vastu_red_yellow_bg_1779443451589.png';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[680px] bg-gradient-to-br from-[#4a0202] via-[#8a0a0a] to-[#d4991c] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-70 mix-blend-overlay"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      
      {/* Mystical Moving Light Effects in Saffron/Gold/Red */}
      <div className="absolute inset-0 z-0 bg-radial-at-c from-[#ffda73]/20 via-transparent to-red-950/70 pointer-events-none"></div>

      {/* Rotating Celestial Mandala Overlay */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] opacity-[0.12] pointer-events-none select-none z-0 animate-[spin_120s_linear_infinite]">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="text-[#ffe082] w-full h-full">
          {/* Compass / Zodiac outer circle */}
          <circle cx="100" cy="100" r="95" strokeWidth="1.5" strokeDasharray="3,3" />
          <circle cx="100" cy="100" r="90" strokeWidth="1" />
          <circle cx="100" cy="100" r="75" strokeWidth="0.5" />
          
          {/* Cardinal Directions / Vastu lines */}
          <line x1="100" y1="5" x2="100" y2="195" strokeWidth="1" />
          <line x1="5" y1="100" x2="195" y2="100" strokeWidth="1" />
          <line x1="33" y1="33" x2="167" y2="167" strokeWidth="0.5" />
          <line x1="33" y1="167" x2="167" y2="33" strokeWidth="0.5" />
          
          {/* Intricate Vastu/Astrology stars */}
          <polygon points="100,25 105,95 175,100 105,105 100,175 95,105 25,100 95,95" strokeWidth="0.5" />
          
          {/* Concentric rings */}
          <circle cx="100" cy="100" r="45" strokeWidth="0.5" strokeDasharray="1,2" />
          <circle cx="100" cy="100" r="30" strokeWidth="1" />
          <circle cx="100" cy="100" r="10" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Elegant Spiritual Auras (Warm saffron yellow and divine vermillion) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ffc107]/20 rounded-full filter blur-[125px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff3d00]/15 rounded-full filter blur-[125px] pointer-events-none"></div>

      {/* Warm Gradient Overlay for optimal readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-[#3d0101]/30 to-black/70"></div>
      
      {/* Content Card with Glassmorphism and Elegant Borders */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="bg-[#2a0101]/85 backdrop-blur-md border border-[#ffca28]/40 rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden group">
          {/* Elegant corner decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#ffca28]/70"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#ffca28]/70"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#ffca28]/70"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#ffca28]/70"></div>

          {/* Celestial Header Emblem */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-full border border-[#ffca28]/50 flex items-center justify-center text-[#ffca28] animate-pulse bg-[#ffca28]/10 text-xl font-semibold">
              ॐ
            </div>
          </div>

          <h1 className="text-4xl md:text-6.5xl font-serif font-bold text-white mb-4 tracking-wider drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
            Smriti Agrawal
          </h1>
          
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#ffca28] to-transparent mx-auto mb-6"></div>

          <p className="text-xl md:text-2xl text-amber-50 mb-4 font-serif tracking-wide leading-relaxed">
            <span className="text-[#ffca28] font-semibold uppercase tracking-widest text-sm block mb-1">Divine Alignment &amp; Harmony</span>
            Certified Astrologer <span className="text-[#ffca28]/90 mx-2">&amp;</span> Vastu Consultant
          </p>

          <p className="text-sm md:text-base text-amber-100 max-w-xl mx-auto mb-8 font-light italic leading-relaxed">
            “Align Your Space. Elevate Your Life.”
          </p>

          <a 
            href="#contact"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-[#e65100] via-[#ff8f00] to-[#e65100] text-white font-serif font-bold uppercase tracking-wider rounded-lg shadow-lg shadow-red-950/50 hover:shadow-[#ffc107]/20 hover:scale-[1.03] transform transition-all duration-300 hover:bg-none hover:bg-white hover:text-[#4a0202]"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;