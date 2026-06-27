import React from 'react';
import smritiImg from '@/src/assets/images/smriti_actual_photo.png';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Centered Heading */}
        <div className="text-center mb-12" id="about-heading">
          <h4 className="text-brand-gold text-lg font-bold uppercase tracking-widest mb-2">About Me</h4>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">Namaste 🙏</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>

        {/* Centered Photograph of Smriti */}
        <div className="flex justify-center mb-12" id="about-photo">
          <div className="relative group w-full max-w-[320px]">
            {/* Outer decorative gold/amber glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-brand-gold/15 via-amber-100/25 to-brand-gold/25 rounded-2xl blur-md opacity-75"></div>
            {/* Background offset decorative solid frame representing architectural symmetry */}
            <div className="absolute inset-0 border border-brand-gold/30 rounded-2xl -translate-x-2.5 translate-y-2.5 -z-10"></div>
            
            {/* Image Container with golden border */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-gold/20 bg-stone-50 shadow-md">
              <img 
                src={smritiImg} 
                alt="Smriti Agrawal - Astro Vastu Consultant & Astrologer" 
                className="w-full h-auto object-cover object-center max-h-[420px] brightness-[1.03]"
                style={{ aspectRatio: '3/4' }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Narrative Description */}
        <div className="max-w-3xl mx-auto space-y-6 leading-relaxed text-base md:text-lg text-gray-600" id="about-content">
          <p>
            I am Smriti Agrawal, a Dubai-based Astro Vastu Consultant and Astrologer with over 7 years of experience in guiding individuals and families toward greater harmony, clarity, and well-being.
          </p>
          <p>
            I am a Computer Science Engineer by education, but my journey gradually led me toward spirituality, self-discovery, and the deeper understanding of life's energies.
          </p>
          <p>
            From a young age, I felt a strong connection with meditation and a natural faith in the divine. This perspective has shaped the way I understand life, energy, and human behaviour.
          </p>
          <p>
            I believe in the law of karma—that our thoughts, actions, and intentions play an important role in shaping our life experiences. Through my own journey, I have realized that a calm and balanced mind is the foundation for a fulfilling life.
          </p>
          <p>
            This understanding inspired me to explore Vastu and Astrology in depth. Over the years, I have seen how our surroundings and planetary influences can affect our thoughts, emotions, relationships, and overall well-being. When our environment is balanced, the mind naturally becomes more peaceful, focused, and clear.
          </p>
          <p>
            My approach is simple and practical. I do not believe in fear-based predictions or complicated remedies. Instead, I focus on awareness, balance, and meaningful changes that can help bring greater peace, clarity, and stability into life.
          </p>
          <p className="font-bold text-gray-800 text-lg pt-2">
            Dhanyavad 🙏
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;