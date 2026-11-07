import React, { useState } from 'react';
import { Camera, X, MessageSquare, ZoomIn, Eye } from 'lucide-react';
import { GALLERY_PHOTOS, COMPANY_INFO } from '../data/content';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  onOpenQuote: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filters = [
    { id: 'todos', label: 'Todas as Fotos' },
    { id: 'motores', label: 'Motores & Automação' },
    { id: 'portoes', label: 'Portões Instalados' },
    { id: 'centrais', label: 'Centrais & Placas' },
    { id: 'hardware', label: 'Cabos & Roldanas' },
    { id: 'acessorios', label: 'Controles & Travas' },
  ];

  const filteredPhotos = activeFilter === 'todos'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeFilter);

  return (
    <section id="galeria" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest mb-1.5">
            <span className="w-8 h-0.5 bg-red-600"></span>
            Registros Visuais
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-display tracking-tight">
            Galeria de Fotos dos Serviços
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Veja detalhes de instalações, motores, placas de comando, cabos de aço e acabamentos realizados pela equipe DEODATO PORTÕES.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeFilter === f.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-slate-200"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#0a192f]/90 backdrop-blur-md text-amber-400 text-[11px] font-bold rounded-md border border-amber-400/30">
                    {photo.tag}
                  </span>
                </div>

                {/* Hover Zoom icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Description Bottom */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-sm font-bold font-display leading-tight">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto object-contain"
                />
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-red-600 transition-colors shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {selectedPhoto.tag}
                  </span>
                  <h3 className="text-lg font-bold font-display text-white mt-0.5">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-xl">
                    {selectedPhoto.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phone1.raw}?text=${encodeURIComponent(
                      `Olá! Vi a foto de "${selectedPhoto.title}" na galeria e gostaria de saber o valor para fazer no meu portão.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Cotar no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
