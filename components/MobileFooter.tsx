import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const MobileFooter: React.FC = () => {
  return (
    <>
      {/* Spacer to prevent content from being hidden behind fixed footer */}
      <div className="h-[60px] md:hidden"></div>
      
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white shadow-[0_-5px_10px_rgba(0,0,0,0.1)] border-t border-gray-200 flex">
        <a 
          href="tel:+971505706587" 
          className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-800 font-bold text-sm border-r border-gray-200 hover:bg-gray-50"
        >
          <Phone size={18} className="text-brand-gold" />
          Contact Me
        </a>
        <a 
          href="https://wa.me/971505706587?text=Hi!%20I%20require%20a%20consultation" 
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-gray-800 font-bold text-sm hover:bg-gray-50"
        >
          <MessageCircle size={18} className="text-green-500" />
          WhatsApp
        </a>
      </div>
    </>
  );
};

export default MobileFooter;