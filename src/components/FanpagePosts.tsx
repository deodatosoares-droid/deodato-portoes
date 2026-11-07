import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Send, 
  CheckCircle2, 
  Pin, 
  MessageSquare,
  Clock,
  CornerDownRight,
  UserCheck
} from 'lucide-react';
import { FANPAGE_POSTS, COMPANY_INFO } from '../data/content';
import { FanpagePost, PostComment } from '../types';

interface FanpagePostsProps {
  onOpenQuote: () => void;
}

export const FanpagePosts: React.FC<FanpagePostsProps> = ({ onOpenQuote }) => {
  const [posts, setPosts] = useState<FanpagePost[]>(FANPAGE_POSTS);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});
  const [commentNameInputs, setCommentNameInputs] = useState<Record<string, string>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleLike = (postId: string) => {
    const isLiked = !!likedPosts[postId];
    setLikedPosts((prev) => ({ ...prev, [postId]: !isLiked }));
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return { ...p, likes: isLiked ? p.likes - 1 : p.likes + 1 };
        }
        return p;
      })
    );
  };

  const handleShare = (post: FanpagePost) => {
    const shareText = `Veja este trabalho da DEODATO PORTÕES em Praia Grande: ${post.title} - WhatsApp: (13) 99148-4520`;
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: shareText,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${shareText} - Acesse: ${window.location.href}`);
      showToast('Link da publicação copiado para a área de transferência!');
    }
  };

  const handleAddComment = (postId: string) => {
    const text = commentInputs[postId]?.trim();
    const authorName = commentNameInputs[postId]?.trim() || 'Morador de Praia Grande';
    if (!text) return;

    const newComment: PostComment = {
      id: `usr-${Date.now()}`,
      author: authorName,
      location: 'Praia Grande / SP',
      text: text,
      timeAgo: 'Agora mesmo',
      reply: {
        author: 'DEODATO PORTÕES',
        text: 'Olá! Recebemos sua mensagem. Se precisar de atendimento emergencial, nos chame no WhatsApp (13) 99148-4520!',
        timeAgo: 'Agora'
      }
    };

    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            commentsCount: p.commentsCount + 1,
            commentsList: [newComment, ...p.commentsList]
          };
        }
        return p;
      })
    );

    setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
    setCommentNameInputs((prev) => ({ ...prev, [postId]: '' }));
    showToast('Comentário publicado no feed da fanpage!');
  };

  const handleWhatsAppPost = (post: FanpagePost) => {
    const url = `https://wa.me/${COMPANY_INFO.phone1.raw}?text=${encodeURIComponent(post.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="publicacoes" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold rounded-full mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Linha do Tempo Comercial
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 font-display tracking-tight">
            Publicações & Interações da Fanpage
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Acompanhe nossos serviços em tempo real, dicas de segurança contra a maresia e veja as dúvidas e elogios dos clientes de Praia Grande.
          </p>
        </div>

        {/* Toast alert */}
        {toastMessage && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-2">
            {toastMessage}
          </div>
        )}

        {/* Fanpage Posts Feed */}
        <div className="space-y-8">
          {posts.map((post) => {
            const isLiked = !!likedPosts[post.id];

            return (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Pinned Tag if any */}
                {post.pinned && (
                  <div className="px-5 py-1.5 bg-amber-50 border-b border-amber-200/60 flex items-center gap-1.5 text-[11px] font-bold text-amber-900">
                    <Pin className="w-3.5 h-3.5 text-amber-700 rotate-45" />
                    <span>Publicação Fixada em Destaque</span>
                  </div>
                )}

                {/* Post Header */}
                <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-xl bg-[#0a192f] p-1 border border-slate-300 shadow-sm flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-black text-amber-400 font-display text-center leading-tight">
                        DEODATO<br/><span className="text-[8px] text-white">PORTÕES</span>
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-sm text-slate-900 font-display">
                          {post.author}
                        </span>
                        <CheckCircle2 className="w-4 h-4 fill-blue-600 text-white" />
                        <span className="text-[11px] text-slate-400 hidden sm:inline">· Oficial</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span>·</span>
                        <span className="text-blue-700 font-medium">{post.serviceCategory}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleShare(post)}
                    className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                    title="Compartilhar"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Post Content */}
                <div className="p-4 sm:p-5 space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {post.content}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Post Image */}
                <div className="relative w-full bg-slate-950 overflow-hidden max-h-[460px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/hero_gate.jpg';
                    }}
                    className="w-full h-full object-cover object-center hover:scale-101 transition-transform duration-300"
                  />
                </div>

                {/* Metrics Bar */}
                <div className="px-4 sm:px-5 py-2.5 flex items-center justify-between text-xs text-slate-500 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white shadow-xs">
                      <Heart className="w-3 h-3 fill-white" />
                    </span>
                    <span className="font-semibold tabular-nums text-slate-700">{post.likes}</span>
                    <span>curtidas</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="tabular-nums font-semibold text-slate-700">
                      {post.commentsList.length} comentários
                    </span>
                    <span>·</span>
                    <span className="tabular-nums">{post.sharesCount} compartilhamentos</span>
                  </div>
                </div>

                {/* Action Bar (Curtir, Comentar, WhatsApp) */}
                <div className="p-2 sm:p-3 bg-slate-50 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        isLiked
                          ? 'bg-red-50 text-red-600 ring-1 ring-red-200'
                          : 'text-slate-600 hover:bg-slate-200/60'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-600 text-red-600' : ''}`} />
                      <span>{isLiked ? 'Curtido' : 'Curtir'}</span>
                    </button>

                    <button
                      onClick={() => handleShare(post)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200/60 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Compartilhar</span>
                    </button>
                  </div>

                  {/* High conversion WhatsApp CTA */}
                  <button
                    onClick={() => handleWhatsAppPost(post)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all active:scale-95 ml-auto"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp sobre este post</span>
                  </button>
                </div>

                {/* ACTIVE COMMENTS SECTION: Always visible so users can read community discussions */}
                <div className="p-4 sm:p-5 bg-slate-50/70 space-y-3.5 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 text-blue-600" />
                      Comentários e Dúvidas de Clientes ({post.commentsList.length}):
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal">
                      Praia Grande – SP
                    </span>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-3">
                    {post.commentsList.map((comm) => (
                      <div
                        key={comm.id}
                        className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs shadow-xs space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-[10px]">
                              {comm.author.charAt(0)}
                            </div>
                            <div>
                              <span className="font-bold text-slate-900">{comm.author}</span>
                              <span className="text-slate-400 text-[10px] ml-1.5">({comm.location})</span>
                            </div>
                          </div>
                          <span className="text-[10px] text-slate-400">{comm.timeAgo}</span>
                        </div>

                        <p className="text-slate-700 text-xs leading-relaxed pl-8">
                          {comm.text}
                        </p>

                        {/* Official Response from DEODATO PORTÕES */}
                        {comm.reply && (
                          <div className="ml-8 mt-2 p-2.5 bg-blue-50/70 rounded-lg border border-blue-100 space-y-1">
                            <div className="flex items-center gap-1.5">
                              <CornerDownRight className="w-3.5 h-3.5 text-blue-600" />
                              <span className="font-bold text-[11px] text-blue-950 font-display flex items-center gap-1">
                                {comm.reply.author}
                                <CheckCircle2 className="w-3 h-3 fill-blue-600 text-white" />
                              </span>
                              <span className="text-[10px] text-slate-400 ml-auto">{comm.reply.timeAgo}</span>
                            </div>
                            <p className="text-slate-700 text-[11px] pl-5 leading-relaxed">
                              {comm.reply.text}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Input form to write a new comment */}
                  <div className="pt-2 border-t border-slate-200/60 space-y-2">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <input
                        type="text"
                        value={commentNameInputs[post.id] || ''}
                        onChange={(e) =>
                          setCommentNameInputs((prev) => ({ ...prev, [post.id]: e.target.value }))
                        }
                        placeholder="Seu nome (ex: André, Boqueirão)"
                        className="text-xs p-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                      />
                      <input
                        type="text"
                        value={commentInputs[post.id] || ''}
                        onChange={(e) =>
                          setCommentInputs((prev) => ({ ...prev, [post.id]: e.target.value }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleAddComment(post.id);
                        }}
                        placeholder="Escreva sua pergunta ou comentário sobre este serviço..."
                        className="sm:col-span-2 text-xs p-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-800"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-400">
                        * Deixe sua pergunta que nossa equipe responde prontamente.
                      </span>
                      <button
                        onClick={() => handleAddComment(post.id)}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#0a192f] hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors shadow-xs"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Publicar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
