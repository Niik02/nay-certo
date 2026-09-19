export interface CategoryItem {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export const WHATSAPP_PHONE = '5531981107577';
export const WHATSAPP_BASE_URL = 'https://wa.me/5531981107577';

export function getWhatsAppUrl(customMessage?: string): string {
  if (!customMessage) return WHATSAPP_BASE_URL;
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(customMessage)}`;
}

export const LOGO_URL = 'https://i.postimg.cc/brth3vtq/Design-sem-nome.png';
export const LOCAL_IMAGE_FALLBACK = '/nay-oficial.png';

export const BUSINESS_CATEGORIES: CategoryItem[] = [
  {
    id: 'roupas',
    name: 'Lojas de Roupas',
    iconName: 'Shirt',
    description: 'Moda feminina, masculina, infantil e multimarcas em BH.',
  },
  {
    id: 'restaurantes',
    name: 'Restaurantes',
    iconName: 'UtensilsCrossed',
    description: 'Gastronomia mineira, contemporânea, bistrôs e alta culinária.',
  },
  {
    id: 'cafeterias',
    name: 'Cafeterias & Docerias',
    iconName: 'Coffee',
    description: 'Cafés especiais, confeitarias, pães artesanais e quitandas.',
  },
  {
    id: 'beleza',
    name: 'Beleza & Estética',
    iconName: 'Sparkles',
    description: 'Salões de beleza, clínicas, spas, skincare e autocuidado.',
  },
  {
    id: 'academias',
    name: 'Academias & Bem-Estar',
    iconName: 'Dumbbell',
    description: 'Fitness, estúdios de pilates, yoga e estilo de vida saudável.',
  },
  {
    id: 'turismo',
    name: 'Turismo & Passeios',
    iconName: 'Compass',
    description: 'Hospedagens, pousadas na região metropolitana e roteiros.',
  },
  {
    id: 'eventos',
    name: 'Eventos & Festivais',
    iconName: 'CalendarCheck',
    description: 'Feiras, shows, encontros gastronômicos e culturais da capital.',
  },
  {
    id: 'servicos',
    name: 'Serviços Especializados',
    iconName: 'Briefcase',
    description: 'Profissionais autônomos, consultorias e soluções para BH.',
  },
  {
    id: 'experiencias',
    name: 'Experiências Únicas',
    iconName: 'Flame',
    description: 'Momentos diferenciados, lazer e entretenimento na cidade.',
  },
  {
    id: 'comercio',
    name: 'Comércios Locais',
    iconName: 'Store',
    description: 'Negócios de bairro, empórios e lojas que movimentam BH.',
  },
  {
    id: 'marcas',
    name: 'Marcas & Produtos',
    iconName: 'Tag',
    description: 'Lançamentos, coleções e novidades no mercado mineiro.',
  },
  {
    id: 'empreendedores',
    name: 'Empreendedores',
    iconName: 'TrendingUp',
    description: 'Iniciativas inovadoras prontas para ganhar destaque e audiência.',
  },
];
