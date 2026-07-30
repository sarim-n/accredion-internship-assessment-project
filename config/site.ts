import { NavItem } from '@/types/landing';

export const siteConfig = {
  name: 'Accredian Enterprise',
  title: 'Accredian Enterprise | Next-Gen Expertise For Your Enterprise',
  description:
    'Cultivate high-performance teams through expert learning. Tailored solutions, industry insights, and expert guidance for corporate workforce training.',
  url: 'https://enterprise.accredian.com',
  contactEmail: 'enterprise@accredian.com',
  contactAddress: '4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana',
  navLinks: [
    { label: 'Home',         href: '#home' },
    { label: 'Stats',        href: '#stats' },
    { label: 'Partners',     href: '#clients' },
    { label: 'The Edge',     href: '#accredianEdge' },
    { label: 'Domains',      href: '#domain-expertise' },
    { label: 'How It Works', href: '#howItWorks' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQs',         href: '#faqs' },
  ] as NavItem[],
};
