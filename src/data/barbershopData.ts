import { BusinessInfo, ProductItem, ServiceItem, TestimonialItem } from '../types';

import heroImg from '../assets/images/barbershop_hero_1791077676422.jpg';
import corteImg from '../assets/images/corte_masculino_1791077696954.jpg';
import barbaImg from '../assets/images/barba_service_1791077708008.jpg';
import toolsImg from '../assets/images/barber_tools_1791077721490.jpg';
import ceraImg from '../assets/images/cera_capilar_product_1791077686231.jpg';

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Barbearia O Martins',
  slogan: 'Seu estilo. Nossa tradição.',
  description: 'Corte, barba e cuidado masculino no Centro de Fortaleza.',
  phone: '(85) 99235-3320',
  whatsapp: '5585992998774',
  whatsappFormatted: '(85) 99299-8774',
  email: 'barbeariaomartins@gmail.com',
  instagram: 'https://www.instagram.com/barbearia.omartins/',
  instagramHandle: '@barbearia.omartins',
  address: {
    street: 'Av. Heráclito Graça',
    number: '710',
    neighborhood: 'Centro',
    city: 'Fortaleza',
    state: 'CE',
    country: 'Brasil',
    full: 'Av. Heráclito Graça, 710 – Centro, Fortaleza – CE',
  },
  openingHours: {
    weekdays: '09:00 às 19:00',
    saturday: '09:00 às 18:00',
    sunday: 'Fechado',
  },
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Her%C3%A1clito+Gra%C3%A7a%2C+710+-+Centro%2C+Fortaleza+-+CE',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'corte-cabelo',
    name: 'Corte de Cabelo',
    description: 'Cortes masculinos pensados para valorizar o estilo e a personalidade de cada cliente.',
    price: null, // Sob consulta
    priceDisplay: 'Consulte o valor',
    duration: '45 min',
    image: corteImg,
    available: true,
    whatsappMessage: 'Olá! Gostaria de agendar um corte na Barbearia O Martins.',
  },
  {
    id: 'barba',
    name: 'Barba',
    description: 'Cuidado e acabamento para deixar a barba alinhada, definida e bem cuidada.',
    price: null, // Sob consulta
    priceDisplay: 'Consulte o valor',
    duration: '35 min',
    image: barbaImg,
    available: true,
    whatsappMessage: 'Olá! Gostaria de agendar uma barba na Barbearia O Martins.',
  },
  {
    id: 'corte-barba',
    name: 'Corte + Barba',
    description: 'O combo completo de cuidado masculino: cabelo alinhado e barba impecável no mesmo atendimento.',
    price: null, // Sob consulta
    priceDisplay: 'Consulte o valor',
    duration: '1h 15min',
    image: toolsImg,
    available: true,
    whatsappMessage: 'Olá! Gostaria de agendar corte e barba na Barbearia O Martins.',
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'cera-capilar',
    name: 'Cera Capilar',
    category: 'Cabelo',
    description: 'Fixação duradoura e acabamento fosco/natural para modelar com precisão e manter o penteado no lugar ao longo do dia.',
    price: null, // Sob consulta (preço não fornecido, sem inventar)
    priceDisplay: 'Consulte o valor',
    image: ceraImg,
    available: true,
    features: ['Acabamento natural', 'Alta fixação sem brilho excessivo', 'Fácil remoção na lavagem'],
  },
];

// Estrutura pronta para receber avaliações reais dos clientes
// Seguindo a diretriz estrita: Não exibir depoimentos falsos ou inventados
export const TESTIMONIALS_DATA: TestimonialItem[] = [];

// Galeria de imagens
export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Ambiente Sofisticado',
    category: 'ambiente',
    image: heroImg,
    caption: 'Espaço climatizado, confortável e com iluminação planejada no Centro de Fortaleza.',
  },
  {
    id: 'gal-2',
    title: 'Precisão no Corte',
    category: 'cortes',
    image: corteImg,
    caption: 'Degradê e acabamento milimétrico para valorizar sua fisionomia.',
  },
  {
    id: 'gal-3',
    title: 'Barboterapia & Alinhamento',
    category: 'barba',
    image: barbaImg,
    caption: 'Toalha quente e lâmina tradicional com precisão e conforto.',
  },
  {
    id: 'gal-4',
    title: 'Ferramentas de Precisão',
    category: 'detalhes',
    image: toolsImg,
    caption: 'Instrumentos higienizados e esterilizados a cada atendimento.',
  },
  {
    id: 'gal-5',
    title: 'Linha de Cera Capilar',
    category: 'produtos',
    image: ceraImg,
    caption: 'Produtos selecionados para o seu cuidado diário.',
  },
];

// Grade visual do Instagram @barbearia.omartins
export const INSTAGRAM_POSTS = [
  {
    id: 'insta-1',
    imageUrl: corteImg,
    caption: 'O visual que fala por você. Corte alinhado com técnica e personalidade.',
    likes: 'Curtido por dezenas de clientes',
    tag: '#BarbeariaOMartins',
  },
  {
    id: 'insta-2',
    imageUrl: barbaImg,
    caption: 'Barba definida, contornos nítidos e hidratação. Cuidado clássico para o homem moderno.',
    likes: 'Destaque no feed',
    tag: '#BarbaFortaleza',
  },
  {
    id: 'insta-3',
    imageUrl: heroImg,
    caption: 'Seu ponto de parada no Centro de Fortaleza. Conforto, tradição e atendimento direto.',
    likes: 'Ambiente O Martins',
    tag: '#CentroDeFortaleza',
  },
  {
    id: 'insta-4',
    imageUrl: ceraImg,
    caption: 'Leve a finalização da barbearia para o seu dia a dia. Cera capilar disponível na loja.',
    likes: 'Cuidados Masculinos',
    tag: '#EstiloOMartins',
  },
];
