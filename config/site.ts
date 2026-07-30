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
    { label: 'Home',                   href: '#home' },
    { label: 'Track Record',           href: '#stats' },
    { label: 'Partnerships',           href: '#clients' },
    { label: 'Accredian Edge',         href: '#accredianEdge' },
    { label: 'Domain Expertise',       href: '#domain-expertise' },
    { label: 'Who Should Join',        href: '#who-should-join' },
    { label: 'How It Works',           href: '#howItWorks' },
    { label: 'FAQs',                   href: '#faqs' },
    { label: 'Testimonials',           href: '#testimonials' },
    { label: 'Get Proposal',           href: '#lead-capture-section' },
  ] as NavItem[],
};
