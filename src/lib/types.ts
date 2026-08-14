export interface Product {
  id: string;
  name: string;
  category: 'Textile' | 'Technology' | 'Education' | 'Insurance' | 'Consulting';
  price: string;
  moq?: string; // Minimum Order Quantity
  description: string;
  features: string[];
  image: string;
  badge?: string;
  isAvailable: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  bullets: string[];
  seoKeywords: string[];
  iconName: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  highlights: string[];
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  phoneDisplay: string;
  phoneClean: string;
  whatsappDisplay: string;
  whatsappClean: string;
  email: string;
  guestEmail: string;
  advertiseEmail: string;
  addressNotice: string;
  googleMapEmbedUrl: string;
  copyrightText: string;
  heroHeadline: string;
  heroSubheading: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceOrProduct: string;
  message: string;
}
