export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price?: number | null; // null means 'Consulte o valor'
  priceDisplay?: string;
  duration?: string;
  image: string;
  available: boolean;
  whatsappMessage: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: number | null; // null means 'Consulte o valor'
  priceDisplay?: string;
  image: string;
  available: boolean;
  features?: string[];
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  date?: string;
  comment: string;
  image?: string;
}

export interface BusinessInfo {
  name: string;
  slogan: string;
  description: string;
  phone: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    full: string;
  };
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  googleMapsUrl: string;
}
