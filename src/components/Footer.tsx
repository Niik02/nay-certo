import React from 'react';
import { MapPin, Heart, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#E7DAC9] bg-[#F5EEE4] pt-10 pb-24 sm:pb-14 px-4 text-center text-[#69584C]">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Brand Name */}
        <div className="font-heading font-extrabold text-xl text-[#2B2019] mb-1">
          Nay em Ação
        </div>

        {/* Location & Slogan */}
        <div className="inline-flex items-center gap-1.5 text-xs text-[#7B6658] mb-3">
          <MapPin className="w-3.5 h-3.5 text-[#A05338]" />
          <span>Belo Horizonte — MG • 19°55'S 43°56'W</span>
        </div>

        <p className="text-sm italic font-heading text-[#834934] mb-4">
          &ldquo;Seu guia completo: Tudo o que BH tem de melhor.&rdquo;
        </p>

        <div className="text-xs text-[#877467] space-y-1 mb-6 max-w-xs">
          <p>
            Informação sobre o alcance mensal do perfil <strong>@floramar.bh</strong> no Instagram.
          </p>
          <p>
            Desenvolvido para conectar marcas, empresas e experiências a quem ama BH.
          </p>
        </div>

        <div className="pt-4 border-t border-[#E3D4C2] w-full text-[11px] text-[#9A877A] flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} Nay em Ação. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};
