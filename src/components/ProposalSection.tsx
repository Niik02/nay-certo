import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Utensils, ShoppingBag, Sparkles, Compass, Lightbulb, HeartHandshake } from 'lucide-react';

export const ProposalSection: React.FC = () => {
  const proposalPillars = [
    {
      title: 'Lugares',
      desc: 'Cantinhos charmosos, mirantes, praças e pontos que revelam o charme belo-horizontino.',
      icon: MapPin,
      color: 'bg-[#F2E5D6] text-[#7B4228]',
    },
    {
      title: 'Experiências',
      desc: 'Momentos únicos, gastronomia, lazer e passeios imperdíveis para aproveitar na capital.',
      icon: Compass,
      color: 'bg-[#E3EFE9] text-[#346554]',
    },
    {
      title: 'Empresas & Serviços',
      desc: 'Empreendimentos de confiança, soluções e profissionais dedicados da nossa região.',
      icon: HeartHandshake,
      color: 'bg-[#E8E7F3] text-[#474479]',
    },
    {
      title: 'Produtos & Novidades',
      desc: 'Lançamentos, marcas criativas e achadinhos incríveis que valem a pena conhecer.',
      icon: ShoppingBag,
      color: 'bg-[#F9EDDF] text-[#865123]',
    },
    {
      title: 'Opções Interessantes',
      desc: 'Dicas práticas para facilitar a sua rotina com qualidade e bom gosto em Belo Horizonte.',
      icon: Sparkles,
      color: 'bg-[#F5E7E2] text-[#874533]',
    },
    {
      title: 'Novidades Constantes',
      desc: 'Tudo o que acabou de abrir ou está movimentando o cenário de BH em primeira mão.',
      icon: Lightbulb,
      color: 'bg-[#E6ECE7] text-[#3C6450]',
    },
  ];

  return (
    <section id="proposta" className="w-full max-w-xl mx-auto px-4 sm:px-6 my-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADCCB] text-[#5A4537] text-xs font-semibold uppercase tracking-wider mb-2">
          <span>A Proposta</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#29201A] font-heading leading-tight">
          Seu guia completo: <br />
          <span className="text-[#89462D]">Tudo o que BH tem de melhor.</span>
        </h2>
        <p className="text-[#645347] text-sm sm:text-base mt-2 max-w-md mx-auto">
          Um olhar próximo e acolhedor sobre a capital mineira, conectando pessoas reais a empresas e experiências extraordinárias.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {proposalPillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-[#FAF7F2] border border-[#E9DDD0] rounded-2xl p-4.5 shadow-[0_2px_12px_rgba(75,54,42,0.03)] hover:border-[#D8C2AD] transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2.5 rounded-xl ${item.color} shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-[#2E231C] text-base font-heading mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5C4C41] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
