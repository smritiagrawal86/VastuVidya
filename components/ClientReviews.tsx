import React, { useState, useEffect } from 'react';
import { ClientReview } from '../types';
import { Star, MessageSquare, Plus, CheckCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const DEFAULT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-anita',
    name: 'Anita',
    rating: 5,
    service: 'Astrology and Vastu Consultation',
    content: `Dear Smriti, ❤️
I want to express my heartfelt gratitude for all the guidance and support you have given me over the last few years. When I was going through health challenges, your Vastu and astrology guidance, along with the remedies you suggested, gave me hope and positivity.

I sincerely felt a positive difference in my health and overall well-being after following your advice. Your patience, dedication, and genuine concern for helping others are truly admirable. 🌷

Thank you for always being there, listening, and guiding me with such kindness. I am grateful for your support and wish you continued success in helping many more people through your knowledge and expertise. 🙏✨

With gratitude, Anita 🌹`,
    date: 'June 27, 2026',
    location: 'Verified Client'
  },
  {
    id: 'rev-harshita',
    name: 'Harshita',
    rating: 5,
    service: 'Vastu Consultation',
    content: `I had a wonderful experience consulting with Smriti for Vastu guidance. She patiently analyzed every aspect of our property and provided remedies that were simple, logical, and easy to implement. What impressed me most was her ability to explain how Vastu principles and planetary changes creates impact in our life.

I highly recommend her services to anyone looking for genuine, knowledgeable, and professional Vastu consultation. Thank you for your guidance and support.`,
    date: 'June 27, 2026',
    location: 'Verified Client'
  },
  {
    id: 'rev-shubh',
    name: 'Shubh',
    rating: 5,
    service: 'Astro-Vastu Consultation',
    content: `Amazing experience with Smriti. The guidance was practical, personalized, and easy to follow. The combination of Vastu and astrology provided valuable clarity and positive direction.`,
    date: 'June 27, 2026',
    location: 'Verified Client'
  },
  {
    id: 'rev-anonymous',
    name: 'Anonymous',
    rating: 5,
    service: 'Astrology Consultation',
    content: `My experience with Smriti has been very nice, and your guidance is helpful. I really appreciate the way you explain things with patience and clarity. Thank you for your support and positive approach.`,
    date: 'June 27, 2026',
    location: 'Verified Client'
  }
];

const ClientReviews: React.FC = () => {
  // Initialize reviews to an empty/blank array, optionally checking local storage
  const [reviews, setReviews] = useState<ClientReview[]>(() => {
    const saved = localStorage.getItem('smriti_reviews_list_v7');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved reviews', e);
      }
    }
    return DEFAULT_REVIEWS; // Prepopulate with reviews
  });

  // Form states
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [service, setService] = useState('Vastu Consultation');
  const [content, setContent] = useState('');
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync reviews to localStorage
  useEffect(() => {
    localStorage.setItem('smriti_reviews_list_v7', JSON.stringify(reviews));
  }, [reviews]);

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    const newReview: ClientReview = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      location: location.trim() || undefined,
      rating,
      service,
      content: content.trim(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };

    setReviews([newReview, ...reviews]);
    setSubmitSuccess(true);
    
    // Reset form fields
    setName('');
    setLocation('');
    setRating(5);
    setService('Vastu Consultation');
    setContent('');

    // Hide success message and close form after a delay
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowForm(false);
    }, 2500);
  };

  return (
    <section id="reviews" className="py-20 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Heading & Ornament */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 uppercase tracking-wide">
            Client <span className="text-brand-gold">Reviews</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
            Read high-trust feedback from seekers and homeowners who have invited alignment, clarity, and prosperity into their lives.
          </p>
        </div>

        {/* Outer Layout Div */}
        <div className="max-w-4xl mx-auto">
          
          {/* Main Content Area */}
          <div className="space-y-8">
            
            {/* If Reviews are empty (The Blank Slate Page) */}
            {reviews.length === 0 ? (
              <div className="bg-white p-12 rounded-lg shadow-md border border-gray-100 text-center space-y-5">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 text-brand-gold mb-2">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800">No Reviews Yet</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                  Your feedback is incredibly valuable. Have you recently completed an Astrology or Vastu consultation with Smriti Agrawal? Be the first to share your experience with the world!
                </p>
                
                {!showForm && (
                  <button
                    onClick={() => setShowForm(true)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 border border-brand-gold text-brand-gold font-medium text-sm uppercase hover:bg-brand-gold hover:text-white transition-colors duration-300"
                  >
                    <Plus size={16} /> Share Your Experience
                  </button>
                )}
              </div>
            ) : (
              /* Review Listing (shows submitted reviews) */
              <div className="space-y-6">
                <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <span className="text-sm font-semibold text-gray-700">
                     Latest Verified Reviews ({reviews.length})
                  </span>
                  {!showForm && (
                    <button
                      onClick={() => setShowForm(true)}
                      className="text-xs font-bold text-brand-gold hover:text-brand-gold/80 flex items-center gap-1 uppercase tracking-wider"
                    >
                      <Plus size={14} /> Add Review
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.map((r) => (
                    <div
                      key={r.id}
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative hover:shadow-lg transition-shadow duration-300 group"
                    >
                      {/* Quote Mark Decoration */}
                      <span className="absolute top-4 right-6 font-serif text-gray-100 text-7xl select-none pointer-events-none transition-colors group-hover:text-brand-gold/5">
                        &ldquo;
                      </span>

                      {/* Header details */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-serif font-bold text-gray-800 text-base">
                            {r.name}
                          </h4>
                          
                          {/* Stars */}
                          <div className="flex text-yellow-500 gap-0.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star 
                                key={s} 
                                size={12} 
                                className={s <= r.rating ? "fill-current text-yellow-500" : "text-gray-200"} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content block */}
                      <p className="text-gray-600 text-sm leading-relaxed italic relative z-10 mb-4 whitespace-pre-line">
                        "{r.content}"
                      </p>

                      {/* Location & date info footer - replaced with simple verified client tag */}
                      <div className="flex items-center text-xs border-t border-gray-100 pt-3">
                        <span className="bg-green-50 text-green-700 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded uppercase flex items-center gap-1">
                          <CheckCircle size={10} className="fill-current text-green-700 text-white" /> Verified Client
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submission Form Block */}
            <AnimatePresence>
              {showForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.98 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100 overflow-hidden"
                >
                  <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-3">
                    <h3 className="text-lg font-serif font-bold text-gray-800 flex items-center gap-2">
                       Share Your Experience
                    </h3>
                    <button 
                      onClick={() => setShowForm(false)}
                      className="text-gray-400 hover:text-gray-600 text-xs font-semibold px-2 py-1 rounded hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                  </div>

                  {submitSuccess ? (
                    <div className="text-center py-8 space-y-3">
                      <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-100 text-green-600 mb-2">
                        <CheckCircle size={36} className="animate-bounce" />
                      </div>
                      <h4 className="text-gray-800 font-bold font-serif text-lg">Thank You!</h4>
                      <p className="text-gray-500 text-xs">
                        Your review has been successfully submitted and stored.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      
                      {/* Star rating picker */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                          Your Rating *
                        </label>
                        <div className="flex gap-1.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setRating(s)}
                              onMouseEnter={() => setHoverRating(s)}
                              onMouseLeave={() => setHoverRating(null)}
                              className="focus:outline-none transition-transform active:scale-95"
                            >
                              <Star
                                size={26}
                                className={`transition-colors duration-150 ${
                                  s <= (hoverRating ?? rating)
                                    ? 'fill-current text-yellow-400'
                                    : 'text-gray-200'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name and Location columns */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Shalini G."
                            className="w-full bg-gray-50 border border-gray-200 focus:border-brand-gold focus:bg-white rounded py-2.5 px-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                            City / Country (Optional)
                          </label>
                          <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="e.g. Dubai, UAE"
                            className="w-full bg-gray-50 border border-gray-200 focus:border-brand-gold focus:bg-white rounded py-2.5 px-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Consultation service picker */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Consultation Received *
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full bg-gray-50 border border-gray-200 focus:border-brand-gold focus:bg-white rounded py-2.5 px-4 text-sm text-gray-800 outline-none transition-all"
                        >
                          <option value="Vastu Consultation">Vastu Consultation</option>
                          <option value="Astrology Consultation">Astrology Consultation</option>
                          <option value="General Astro-Vastu Guidance">General Astro-Vastu Guidance</option>
                          <option value="Personal Remedies Advice">Personal Remedies Advice</option>
                        </select>
                      </div>

                      {/* Experience Text Area */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                          Describe Your Experience *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          placeholder="Tell us details about the consultation, the friendly directions Smriti gave, and any constructive changes you felt..."
                          className="w-full bg-gray-50 border border-gray-200 focus:border-brand-gold focus:bg-white rounded py-2.5 px-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all resize-none leading-relaxed"
                        ></textarea>
                      </div>

                      {/* Submit button using brand button style */}
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-gray-800 text-gray-800 font-bold text-xs uppercase hover:bg-gray-800 hover:text-white transition-colors tracking-widest duration-200"
                      >
                        <Send size={14} /> Submit Verified Review
                      </button>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ClientReviews;
