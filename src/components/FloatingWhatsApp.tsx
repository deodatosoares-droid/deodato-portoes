import React, { useState } from 'react';
import { MessageSquare, Phone, X, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end">
      {/* Popover Menu with both phone options */}
      {isOpen && (
        <div className="mb-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-900">DEODATO PORTÕES Online</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-600 leading-snug">
            Olá! Em que podemos ajudar com o seu portão hoje em Praia Grande?
          </p>

          <div className="space-y-2">
            <a
              href={COMPANY_INFO.phone1.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 bg-emerald-50 hover:bg-emerald-100 rounded-xl text-emerald-950 text-xs font-bold border border-emerald-200 transition-colors"
            >
              <div>
                <div className="text-[10px] text-emerald-700">Praia Grande / Principal</div>
                <div>(13) 99148-4520</div>
              </div>
              <MessageSquare className="w-4 h-4 text-emerald-600" />
            </a>

            <a
              href={COMPANY_INFO.phone2.waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl text-blue-950 text-xs font-bold border border-blue-200 transition-colors"
            >
              <div>
                <div className="text-[10px] text-blue-700">Plantão / Suporte</div>
                <div>(11) 98109-2963</div>
              </div>
              <MessageSquare className="w-4 h-4 text-blue-600" />
            </a>
          </div>

          <div className="pt-1 text-[10px] text-slate-400 text-center">
            Atendimento residencial e comercial em Praia Grande
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all active:scale-95 group border-2 border-white ring-4 ring-emerald-500/20"
        aria-label="Abrir WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-black tracking-wide pr-1">
          WhatsApp Online
        </span>
      </button>
    </div>
  );
};
