import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Users, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const ReachSection: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl(
    'Olá Nay! Vi o alcance do perfil e quero divulgar minha marca para esse público em BH.'
  );

  return (
    <section id="alcance-detalhado" className="w-full max-w-xl mx-auto px-4 sm:px-6 my-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#F8F1E7] border border-[#DECDB8] rounded-3xl p-6 sm:p-8 text-center shadow-[0_8px_24px_rgba(75,54,42,0.06)] relative overflow-hidden"
      >
        {/* Subtle decorative ring */}
        <div className="w-14 h-14 mx-auto rounded-2xl bg-[#ECDBC8] border border-[#DAC6B1] flex items-center justify-center text-[#7E452F] mb-3 shadow-inner">
          <Users className="w-7 h-7" />
        </div>

        {/* Alcance da comunidade */}
        <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#7D6455] mb-2">
          Alcance da comunidade
        </div>

        {/* Mais de 100 mil pessoas (destaque visual no número +100 mil) */}
        <div className="my-2">
          <div className="text-4xl sm:text-5xl font-black text-[#261B15] tracking-tight font-heading">
            +100 mil
          </div>
          <div className="text-xl sm:text-2xl font-bold text-[#7E3D25] font-heading mt-1">
            pessoas
          </div>
        </div>

        {/* alcançadas mensalmente no Instagram */}
        <p className="text-base sm:text-lg font-medium text-[#534135] mt-1 mb-4">
          alcançadas mensalmente no Instagram
        </p>

        {/* Informação sobre o alcance mensal do perfil @floramar.bh no Instagram. */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EDE0D0] text-xs text-[#6B5547] mb-6 border border-[#DFCFC0]">
          <Instagram className="w-4 h-4 text-[#8C523B]" />
          <span>
            Informação sobre o alcance mensal do perfil <strong className="text-[#32241D]">@floramar.bh</strong> no Instagram.
          </span>
        </div>

        {/* Quer aparecer para esse público? */}
        <div className="pt-5 border-t border-[#DECDB8]">
          <h3 className="text-lg sm:text-xl font-bold text-[#2A2019] font-heading mb-4">
            Quer aparecer para esse público?
          </h3>

          {/* Botão: QUERO DIVULGAR MINHA MARCA */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#286048] hover:bg-[#1E4D39] text-[#FAF7F2] font-heading font-bold text-base sm:text-lg shadow-md transition-all border border-[#357B5D]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>QUERO DIVULGAR MINHA MARCA</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
