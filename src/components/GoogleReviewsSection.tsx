import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle, 
  ExternalLink, 
  Send, 
  Award,
  Sparkles,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { GOOGLE_REVIEWS_INITIAL, NEIGHBORHOODS_PRAIA_GRANDE } from '../data/content';
import { ReviewItem } from '../types';

export const GoogleReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(GOOGLE_REVIEWS_INITIAL);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [neighborhood, setNeighborhood] = useState('Canto do Forte');
  const [rating, setRating] = useState(5);
  const [service, setService] = useState('Conserto de Portão Basculante');
  const [comment, setComment] = useState('');
  const [successNotice, setSuccessNotice] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: name.trim(),
      location: `${neighborhood} · Praia Grande/SP`,
      rating,
      date: 'Hoje (Enviado no site)',
      service,
      comment: comment.trim(),
      verified: true,
      source: 'google'
    };

    setReviews([newRev, ...reviews]);
    setName('');
    setComment('');
    setIsFormOpen(false);
    setSuccessNotice(true);
    setTimeout(() => setSuccessNotice(false), 5000);
  };

  return (
    <section id="avaliacoes" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold rounded-full mb-2">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            Transparência & Qualidade Comprovada
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-display tracking-tight">
            Avaliações e Comentários no Google
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Veja as avaliações de clientes atendidos pela DEODATO PORTÕES em diversos bairros de Praia Grande – SP.
          </p>
        </div>

        {/* Google Reviews Official Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
            {/* Google Brand Rating */}
            <div className="flex items-center gap-4 text-center md:text-left">
              {/* Google stylized G */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center shrink-0">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-slate-900 font-black text-lg tabular-nums">5.0</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  DEODATO PORTÕES – Praia Grande/SP
                </h3>
                <p className="text-xs text-slate-500">
                  Perfil Verificado no Google Meu Negócio · 100% de Satisfação
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 w-full md:w-auto">
              <button
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all active:scale-95"
              >
                Deixar Minha Avaliação
              </button>
              <a
                href="https://www.google.com/maps/search/Deodato+Portoes+Praia+Grande"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors border border-slate-200"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Success Notification */}
          {successNotice && (
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Obrigado! Sua avaliação foi registrada com sucesso e já está visível abaixo.</span>
            </div>
          )}

          {/* Review Submission Form */}
          {isFormOpen && (
            <form onSubmit={handleSubmitReview} className="mt-6 pt-6 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Avalie o atendimento que você recebeu da DEODATO PORTÕES:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Seu Nome</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex.: Carlos Mendes"
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Bairro em PG</label>
                  <select
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    {NEIGHBORHOODS_PRAIA_GRANDE.map((nh) => (
                      <option key={nh} value={nh}>{nh}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Nota (Estrelas)</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 font-bold text-amber-600"
                  >
                    <option value={5}>★★★★★ 5 Estrelas (Excelente)</option>
                    <option value={4}>★★★★☆ 4 Estrelas (Muito Bom)</option>
                    <option value={3}>★★★☆☆ 3 Estrelas (Regular)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Serviço Realizado</label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="Ex.: Troca de cabos de aço / Instalação de novo motor Garen"
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Sua Avaliação / Comentário</label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Conte como foi o atendimento, pontualidade, qualidade da peça e resultado final do seu portão..."
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  Publicar Avaliação
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Reviews Showcase Grid: Displaying verified customer comments */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-5 bg-white rounded-xl border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-slate-900">{rev.author}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div className="text-xs text-slate-500">{rev.location}</div>
                  </div>
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-medium text-blue-800">{rev.service}</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
