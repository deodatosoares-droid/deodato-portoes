import React, { useState } from 'react';
import { 
  Wrench, 
  Cpu, 
  Radio, 
  Lock, 
  SunMedium, 
  Flame, 
  ArrowRight, 
  Check, 
  MessageSquare,
  ShieldAlert,
  Settings2
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Serviços (10)' },
    { id: 'conserto', label: 'Conserto & Revisão' },
    { id: 'motores', label: 'Motores & Automação' },
    { id: 'eletronica', label: 'Placas & Controles' },
    { id: 'hardware', label: 'Cabos & Roldanas' },
    { id: 'acessorios', label: 'Travas & Sensores' },
    { id: 'serralheria', label: 'Solda & Estrutura' },
  ];

  const filteredServices = activeCategory === 'todos' 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === activeCategory);

  const handleWhatsAppDirect = (service: ServiceItem) => {
    const text = `Olá, DEODATO PORTÕES! Gostaria de um orçamento para o serviço de: *${service.title}* em Praia Grande – SP.`;
    const url = `https://wa.me/${COMPANY_INFO.phone1.raw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="servicos" className="py-12 sm:py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest mb-1.5">
              <span className="w-8 h-0.5 bg-red-600"></span>
              Galeria de Serviços Especializados
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-display tracking-tight">
              Soluções Completas para o Seu Portão
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl">
              Confira os 10 serviços especializados executados pela equipe DEODATO PORTÕES em Praia Grande.
              Atendimento residencial, comercial e para condomínios.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Precisa de ajuda agora?</span>
            <a
              href={COMPANY_INFO.phone1.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-sm transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              WhatsApp Direto
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 10 Services Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Service Card Top Visual with Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                {/* Index & Category Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-amber-400 text-slate-950 text-[11px] font-black rounded-md shadow-sm">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  {service.brands && (
                    <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded-md uppercase tracking-wider">
                      Multimarcas
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-base sm:text-lg font-bold text-white font-display leading-tight drop-shadow-md">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-1 border-t border-slate-100">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Brand chips if available */}
                  {service.brands && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {service.brands.map((b) => (
                        <span
                          key={b}
                          className="px-2 py-0.5 bg-slate-100 text-slate-800 text-[10px] font-bold rounded border border-slate-200"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => handleWhatsAppDirect(service)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="flex items-center justify-center gap-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
                    title="Configurar Orçamento"
                  >
                    <span>Cotar</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
