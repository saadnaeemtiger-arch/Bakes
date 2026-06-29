export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  category: string;
  tag?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  review: string;
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CustomOrderInquiry {
  eventType: string;
  servingSize: string;
  flavor: string;
  frosting: string;
  filling: string;
  details: string;
  referenceUrl?: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  deliveryMethod: "pickup" | "delivery";
  dateNeeded: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
}
