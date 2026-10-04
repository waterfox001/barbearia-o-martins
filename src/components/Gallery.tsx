import React, { useState } from 'react';
import { Camera, Eye, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/barbershopData';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'cortes' | 'barba' | 'ambiente' | 'produtos'>('todos');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'cortes', label: 'Cortes' },
    { id: 'barba', label: 'Barba' },
    { id: 'ambiente', label: 'Ambiente' },
    { id: 'produtos', label: 'Produtos' },
  ];

  const filteredItems =
    activeFilter === 'todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-[#0a0b0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-[#c59a53] block mb-2">
            Portfólio Visual
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-stone-100 uppercase tracking-tight">
            NOSSO <span className="text-[#c59a53]">ESTILO</span>
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base">
            Ambiente pensado para o homem moderno, cortes de precisão e acabamento impecável.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeFilter === cat.id
                    ? 'bg-[#c59a53] text-stone-950 shadow-md'
                    : 'bg-[#15171e] text-stone-400 hover:text-stone-200 border border-[#242834]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-80 rounded-xl overflow-hidden bg-[#13151b] border border-[#20232d] cursor-pointer shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                loading="lazy"
              />
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-[#0c0d10]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#c59a53] mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-stone-100 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-stone-300 line-clamp-2">
                  {item.caption}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs text-[#d4a750] font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ampliar fotografia</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md animate-fadeIn">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#1e212b] text-stone-300 hover:text-white hover:bg-[#2c3140] transition-colors z-50"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#181a22]/80 border border-[#2b2f3d] text-stone-200 hover:text-[#c59a53] transition-colors"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#181a22]/80 border border-[#2b2f3d] text-stone-200 hover:text-[#c59a53] transition-colors"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl border border-[#2a2e3b]"
            />
            <div className="mt-4 text-center max-w-xl">
              <h4 className="font-heading font-bold text-lg text-stone-100 uppercase tracking-wide">
                {filteredItems[selectedImageIndex].title}
              </h4>
              <p className="text-sm text-stone-400 mt-1">
                {filteredItems[selectedImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
