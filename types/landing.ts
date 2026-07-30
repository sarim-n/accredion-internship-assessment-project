export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface EdgeNode {
  id: string;
  position: 'top' | 'bottom';
  title: string;
  description: string;
  iconName: string;
  circleColor: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
  iconName?: string;
}

export interface ValuePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
}

export interface CATStep {
  id: string;
  phase: 'Concept' | 'Application' | 'Tools';
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tools: string[];
  icon: string;
}

export interface ProgramTrack {
  id: string;
  category: 'all' | 'data-ai' | 'product' | 'leadership' | 'digital';
  title: string;
  partnerInstitute: string;
  badgeText: string;
  duration: string;
  mode: string;
  highlights: string[];
  targetAudience: string;
  icon: string;
  featured?: boolean;
}

export interface PartnerLogo {
  id: string;
  name: string;
  category: 'university' | 'corporate';
  location?: string;
  logoText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  programTaken: string;
  impactMetric: string;
}

export interface FAQItem {
  id: string;
  category: 'general' | 'customization' | 'roi' | 'security';
  question: string;
  answer: string;
}
