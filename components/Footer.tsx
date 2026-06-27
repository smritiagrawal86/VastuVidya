import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { NAV_LINKS, SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6 text-white">SMRITI AGRAWAL</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              My purpose is to guide people toward harmony—within themselves and in the spaces they live in—so they can move forward in life with confidence and inner stability.
            </p>
            <div className="flex gap-2">
              <a href="https://facebook.com/smriti.astrovastu" className="bg-brand-blue p-2 rounded hover:opacity-80"><Facebook size={16} /></a>
              <a href="https://www.instagram.com/p/DUCnTQbEYfe/" className="bg-brand-pink p-2 rounded hover:opacity-80"><Instagram size={16} /></a>
              <a href="https://www.youtube.com/@astrovastuvidyaa" className="bg-brand-red p-2 rounded hover:opacity-80"><Youtube size={16} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 border-l-4 border-brand-gold pl-3">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <a 
                    href={s.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-gray-400 hover:text-brand-gold text-sm transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={12} /> {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 border-l-4 border-brand-gold pl-3">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-400 hover:text-brand-gold text-sm transition-colors flex items-center gap-2">
                    <ExternalLink size={12} /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold uppercase mb-6 border-l-4 border-brand-gold pl-3">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="flex-shrink-0 text-brand-gold" size={18} />
                <span>Dubai, UAE</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="flex-shrink-0 text-brand-gold" size={18} />
                <a href="mailto:smritiagrawal@vastuvidya.com" className="hover:text-white">smritiagrawal@vastuvidya.com</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="flex-shrink-0 text-brand-gold" size={18} />
                <div className="flex flex-col">
                  <span>+971 50 570 6587</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Smriti Agrawal. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;