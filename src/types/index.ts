export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  challenge: string;
  solution: string;
  results: string;
  image: string;
  client: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

export interface Resource {
  id: number;
  title: string;
  type: 'whitepaper' | 'ebook' | 'video' | 'webinar';
  description: string;
  link: string;
  image: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  slug: string;
}