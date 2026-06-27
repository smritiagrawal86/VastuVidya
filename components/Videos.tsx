import React from 'react';
import { FEATURED_VIDEOS } from '../constants';
import { Youtube, Instagram } from 'lucide-react';

const Videos: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 uppercase">
            Featured <span className="text-brand-gold">Videos & Posts</span>
          </h2>
        </div>

        {FEATURED_VIDEOS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {FEATURED_VIDEOS.map((item, index) => (
              <div 
                key={`${item.type}-${item.id}-${index}`} 
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                {item.type === 'youtube' ? (
                  <div className="aspect-video bg-black w-full relative">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${item.id}`} 
                      title="YouTube video player" 
                      frameBorder="0" 
                      className="absolute inset-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-video sm:aspect-square bg-gray-50 w-full relative flex items-center justify-center p-1">
                    <iframe 
                      src={`https://www.instagram.com/p/${item.id}/embed`} 
                      title="Instagram post" 
                      frameBorder="0" 
                      scrolling="no"
                      allowtransparency="true"
                      className="w-full h-full rounded-xl"
                      style={{ minHeight: '380px' }}
                    ></iframe>
                  </div>
                )}
                
                <div className="p-4 bg-white flex items-center justify-between border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    {item.type === 'youtube' ? (
                      <>
                        <Youtube size={18} className="text-red-600" />
                        <span className="text-sm font-semibold text-gray-700">YouTube Video</span>
                      </>
                    ) : (
                      <>
                        <Instagram size={18} className="text-pink-600" />
                        <span className="text-sm font-semibold text-gray-700">Instagram Post</span>
                      </>
                    )}
                  </div>
                  <a 
                    href={item.type === 'youtube' ? `https://www.youtube.com/watch?v=${item.id}` : `https://www.instagram.com/p/${item.id}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-brand-gold hover:text-brand-dark transition-colors"
                  >
                    View Original
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white border border-dashed border-brand-gold/40 p-8 rounded-xl shadow-sm text-center">
            <span className="text-4xl mb-4 block">📺</span>
            <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">Configure Your Featured Media</h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
              No featured videos or posts have been configured yet. You can easily add your own media by editing the <code className="bg-gray-100 text-brand-gold px-2 py-1 rounded font-mono text-sm font-semibold">constants.ts</code> file.
            </p>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <a 
            href="https://www.youtube.com/@astrovastuvidyaa" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark text-brand-gold hover:text-white border border-brand-dark hover:bg-black transition-colors rounded uppercase font-bold tracking-wider text-sm"
          >
            <Youtube size={18} />
            YouTube Channel
          </a>
          <a 
            href="https://www.instagram.com/p/DUCnTQbEYfe/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-pink hover:text-white border border-brand-pink hover:bg-brand-pink transition-colors rounded uppercase font-bold tracking-wider text-sm shadow-sm"
          >
            <Instagram size={18} />
            Instagram Feed
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;