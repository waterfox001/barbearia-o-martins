import React from 'react';
import { Instagram, ExternalLink, Heart } from 'lucide-react';
import { BUSINESS_INFO, INSTAGRAM_POSTS } from '../data/barbershopData';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0c0d10] border-t border-[#1d2029] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181a20] border border-[#c59a53]/30 text-[#d4a750] text-xs font-semibold uppercase tracking-widest mb-3">
              <Instagram className="w-3.5 h-3.5 text-pink-500" />
              Redes Sociais
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-stone-100 uppercase tracking-tight">
              SIGA NOSSO <span className="text-[#c59a53]">ESTILO</span>
            </h2>
            <p className="mt-2 text-stone-400 text-sm sm:text-base">
              Acompanhe novidades, cortes do dia a dia e bastidores em <strong>{BUSINESS_INFO.instagramHandle}</strong>
            </p>
          </div>

          <a
            href={BUSINESS_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#181a22] hover:bg-[#222530] border border-[#2d313f] text-stone-200 hover:text-white font-semibold text-sm uppercase tracking-wider transition-all self-start md:self-auto group"
          >
            <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
            <span>VER INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
          </a>
        </div>

        {/* Visual Instagram Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden aspect-square bg-[#15171e] border border-[#21242e] shadow-md block"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-[#0d0e12]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 sm:p-5">
                <div className="flex justify-end">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-stone-200 text-xs line-clamp-3 leading-snug">
                    {post.caption}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-[#c59a53] font-mono">
                    <span>{post.tag}</span>
                    <Heart className="w-3.5 h-3.5 fill-[#c59a53]" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
