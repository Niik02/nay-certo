import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const IntermediateCtaSection: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(
    'Olá Nay! Vi as categorias de divulgação e quero apresentar meu negócio para o público de Belo Horizonte.'
  );

  return (
    <section id="cta-intermediario" className="w-full max-w-xl mx-auto px-4 sm:px-6 my-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="bg-[#F6EFE5] border border-[#DFCFC0] rounded-3xl p-6 sm:p-7 text-center shadow-[0_6px_24px_rgba(75,54,42,0.06)] relative overflow-hidden"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8D9C6] text-[#553E31] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#88452E]" />
          <span>Destaque na Cidade</span>
        </div>

        {/* Título: Sua marca merece ser vista. */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#281D17] font-heading mb-2">
          Sua marca merece ser vista.
        </h3>

        {/* Texto: Quer apresentar seu negócio para o público de Belo Horizonte? */}
        <p className="text-base sm:text-lg text-[#554337] mb-6">
          Quer apresentar seu negócio para o público de Belo Horizonte?
        </p>

        {/* Botão: FALAR COM A NAY */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#286048] hover:bg-[#1E4D39] text-[#FAF7F2] font-heading font-extrabold text-lg tracking-wide shadow-md transition-all border border-[#357B5D]"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>FALAR COM A NAY</span>
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
};
