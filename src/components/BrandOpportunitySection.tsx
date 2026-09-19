import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const BrandOpportunitySection: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(
    'Olá Nay! Tenho uma empresa/marca em BH e quero saber mais sobre como anunciar no seu perfil.'
  );

  return (
    <section id="oportunidades-marcas" className="w-full max-w-xl mx-auto px-4 sm:px-6 my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-[#F6EDE2] via-[#F2E5D6] to-[#EBDCCE] border-2 border-[#DEC9B3] rounded-3xl p-6 sm:p-8 text-center shadow-[0_12px_32px_rgba(75,54,42,0.08)] relative overflow-hidden"
      >
        {/* Glow corner accents */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#DFC6AE]/40 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-[#C99C7F]/20 rounded-full blur-2xl pointer-events-none" />

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E4D1BF] text-[#553E31] text-xs font-bold uppercase tracking-wider mb-4 border border-[#D5BEA8]">
          <TrendingUp className="w-3.5 h-3.5 text-[#86432B]" />
          <span>Oportunidade Comercial</span>
        </div>

        {/* Título exato solicitado */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#281D17] font-heading leading-snug mb-4">
          Quer colocar sua marca em evidência em BH?
        </h2>

        {/* Texto exato solicitado */}
        <p className="text-base sm:text-lg text-[#513E33] leading-relaxed max-w-md mx-auto mb-7">
          &ldquo;Se você tem uma loja, restaurante, serviço, negócio ou marca e quer apresentar sua empresa para uma
          audiência de Belo Horizonte, fale com a Nay.&rdquo;
        </p>

        {/* Botão grande e extremamente visível: QUERO ANUNCIAR */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl bg-[#286048] hover:bg-[#1E4D39] text-[#FAF7F2] font-heading font-extrabold text-lg sm:text-xl tracking-wide shadow-[0_8px_24px_rgba(30,77,57,0.28)] transition-all duration-200 border border-[#357B5D]"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span>QUERO ANUNCIAR</span>
          <ArrowRight className="w-5 h-5 ml-0.5" />
        </motion.a>

        {/* Micro-assurances */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#6F5B4F]">
          <Sparkles className="w-3.5 h-3.5 text-[#8C4F37]" />
          <span>Atendimento direto pelo WhatsApp comercial</span>
        </div>
      </motion.div>
    </section>
  );
};
