import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Send, Check } from 'lucide-react';
import { getWhatsAppUrl } from '../types';

export const QuickMessageWidget: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState('Anunciar meu negócio');
  const [businessName, setBusinessName] = useState('');

  const topics = [
    'Anunciar meu negócio',
    'Convidar para conhecer meu espaço',
    'Enviar produto / novidade',
    'Parceria de divulgação',
  ];

  const generateLink = () => {
    let text = `Olá Nay! Vi o seu site de BH.`;
    if (businessName.trim()) {
      text += ` Meu negócio se chama "${businessName.trim()}".`;
    }
    text += ` Tenho interesse em: ${selectedTopic}. Como podemos conversar?`;
    return getWhatsAppUrl(text);
  };

  return (
    <section className="w-full max-w-xl mx-auto px-4 sm:px-6 my-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#FAF7F2] border border-[#E5D7C5] rounded-3xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(75,54,42,0.05)]"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-[#EBDCCB] text-[#78442D]">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#796457]">
            Contato Rápido e Direto
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#2C211B] font-heading mb-1.5">
          Fale com a Nay pelo WhatsApp
        </h3>
        <p className="text-xs sm:text-sm text-[#665447] mb-4">
          Personalize sua mensagem em segundos para agilizar seu atendimento:
        </p>

        {/* Business Name (Optional) */}
        <div className="mb-4">
          <label htmlFor="businessNameInput" className="block text-xs font-semibold text-[#544337] mb-1.5">
            Nome da sua empresa ou marca (opcional):
          </label>
          <input
            id="businessNameInput"
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Ex: Minha Loja, Meu Café..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4EDE3] border border-[#DECDB8] text-[#2C211B] text-sm focus:outline-none focus:ring-2 focus:ring-[#4A7875]/40 transition-all placeholder:text-[#9A897D]"
          />
        </div>

        {/* Select Topic */}
        <div className="mb-5">
          <span className="block text-xs font-semibold text-[#544337] mb-2">
            Qual é o seu objetivo principal?
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {topics.map((t) => {
              const isSelected = selectedTopic === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedTopic(t)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium text-left transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#EBDCCB] border-[#9A6048] text-[#362217] font-semibold'
                      : 'bg-[#F8F2E9] border-[#E6D9C8] text-[#635144] hover:bg-[#F0E4D5]'
                  }`}
                >
                  <span className="truncate">{t}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#88432C] shrink-0 ml-1.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Send Button */}
        <motion.a
          href={generateLink()}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-[#286048] hover:bg-[#1E4D39] text-[#FAF7F2] font-heading font-bold text-base shadow-sm transition-all border border-[#357B5D]"
        >
          <Send className="w-4 h-4" />
          <span>Iniciar conversa no WhatsApp</span>
        </motion.a>
      </motion.div>
    </section>
  );
};
