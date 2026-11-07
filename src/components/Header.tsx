import React, { useState } from 'react';
import { Phone, MessageSquare, Code, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeaderProps {
  onOpenGoogleSites: () => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGoogleSites, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#060e1d] text-slate-300 text-xs py-1.5 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              Atendimento Técnico em Praia Grande e Região
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-400">
              {COMPANY_INFO.hours}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href={COMPANY_INFO.phone1.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageSquare className="w-3 h-3" />
              <span>(13) 99148-4520</span>
            </a>
            <a
              href={COMPANY_INFO.phone2.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageSquare className="w-3 h-3" />
              <span>(11) 98109-2963</span>
            </a>
            <button
              onClick={onOpenGoogleSites}
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors ml-2 underline decoration-amber-400/40 underline-offset-2"
              title="Código para incorporar no Google Sites"
            >
              <Code className="w-3 h-3" />
              <span className="hidden sm:inline">Google Sites Embed</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar following Top Bar Contract: 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-40 bg-[#0a192f] text-white shadow-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#topo"
            className="text-lg sm:text-xl font-black tracking-tight text-white font-display whitespace-nowrap shrink-0 flex items-center gap-2 group"
          >
            <span className="text-white group-hover:text-amber-400 transition-colors">DEODATO</span>
            <span className="text-red-500">PORTÕES</span>
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-200">
            <a href="#sobre" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Sobre a Empresa
            </a>
            <a href="#servicos" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Nossos Serviços
            </a>
            <a href="#publicacoes" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Publicações Fanpage
            </a>
            <a href="#avaliacoes" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Avaliações Google
            </a>
            <a href="#galeria" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Galeria de Fotos
            </a>
            <a href="#contato" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              Contato & Plantão
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-all active:scale-95 whitespace-nowrap shrink-0"
            >
              Orçamento Rápido
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#060e1d] border-t border-slate-800 px-4 py-3 space-y-2 text-xs font-medium">
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400 border-b border-slate-800/60"
            >
              Sobre a Empresa
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400 border-b border-slate-800/60"
            >
              Nossos Serviços (10 Especialidades)
            </a>
            <a
              href="#publicacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400 border-b border-slate-800/60"
            >
              Feed de Publicações Fanpage
            </a>
            <a
              href="#avaliacoes"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400 border-b border-slate-800/60"
            >
              Avaliações Google
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400 border-b border-slate-800/60"
            >
              Galeria de Fotos
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-200 hover:text-amber-400"
            >
              Contato & WhatsApp
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={COMPANY_INFO.phone1.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 bg-emerald-600 text-white rounded-lg font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp (13) 99148-4520
              </a>
              <a
                href={COMPANY_INFO.phone2.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 bg-slate-800 text-white rounded-lg font-bold"
              >
                <Phone className="w-4 h-4" />
                WhatsApp (11) 98109-2963
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
