import React, { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-brand-light border-b border-gray-200 py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Phone size={14} /> +971 50 570 6587
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              <Mail size={14} /> smritiagrawal@vastuvidya.com
            </span>
          </div>
          <div className="flex gap-2">
            <a href="https://facebook.com/smriti.astrovastu" target="_blank" rel="noreferrer" className="bg-brand-blue text-white p-1.5 rounded-full hover:opacity-90 transition">
              <Facebook size={14} />
            </a>
            <a href="https://www.instagram.com/p/DUCnTQbEYfe/" target="_blank" rel="noreferrer" className="bg-brand-pink text-white p-1.5 rounded-full hover:opacity-90 transition">
              <Instagram size={14} />
            </a>
            <a href="https://www.youtube.com/@astrovastuvidyaa" target="_blank" rel="noreferrer" className="bg-brand-red text-white p-1.5 rounded-full hover:opacity-90 transition">
              <Youtube size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo Placeholder */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-2xl font-serif font-bold text-gray-800 tracking-wider">
                SMRITI AGRAWAL
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-brand-gold font-medium uppercase text-sm tracking-wide transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-brand-gold focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-gold hover:bg-gray-50 uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;