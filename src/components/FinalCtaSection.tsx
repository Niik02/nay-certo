import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const FinalCtaSection: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(
    'Olá Nay! Vi o seu site e quero que minha empresa seja a próxima a aparecer por aqui!'
  );

  return (
    <section id="cta-final" className="w-full max-w-xl mx-auto px-4 sm:px-6 my-14">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="bg-gradient-to-b from-[#FAF2E8] via-[#F3E7D8] to-[#EBDCCE] border-2 border-[#DBC6AE] rounded-3xl p-7 sm:p-9 text-center shadow-[0_12px_36px_rgba(75,54,42,0.09)] relative overflow-hidden"
      >
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E1CDB7]/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D1B89F]/30 rounded-full blur-2xl pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5D2BF] text-[#553E31] text-xs font-bold uppercase tracking-wider mb-4 border border-[#D5BEA8]">
          <MapPin className="w-3.5 h-3.5 text-[#86432B]" />
          <span>Belo Horizonte — MG</span>
        </div>

        {/* Título: Sua marca pode ser a próxima a aparecer por aqui. */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#281C15] font-heading leading-snug mb-3">
          Sua marca pode ser a próxima a aparecer por aqui.
        </h2>

        {/* Texto: Quer apresentar seu negócio para o público de Belo Horizonte? */}
        <p className="text-base sm:text-lg text-[#554236] max-w-md mx-auto mb-7 leading-relaxed">
          &ldquo;Quer apresentar seu negócio para o público de Belo Horizonte?&rdquo;
        </p>

        {/* Botão: FALAR COM A NAY */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-2xl bg-[#286048] hover:bg-[#1E4D39] text-[#FAF7F2] font-heading font-extrabold text-lg sm:text-xl tracking-wide shadow-[0_8px_24px_rgba(30,77,57,0.28)] transition-all border border-[#357B5D]"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span>FALAR COM A NAY</span>
          <ArrowRight className="w-5 h-5 ml-0.5" />
        </motion.a>

        <p className="text-xs text-[#7A6658] mt-4 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#8D4B34]" />
          <span>Conectando sua marca com quem valoriza o melhor de BH</span>
        </p>
      </motion.div>
    </section>
  );
};
