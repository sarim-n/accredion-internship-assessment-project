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
    { label: 'Home', href: '#home' },
    { label: 'Stats', href: '#stats' },
    { label: 'Clients', href: '#clients' },
    { label: 'Our Edge', href: '#accredianEdge' },
    { label: 'CAT', href: '#cat' },
    { label: 'How It Works', href: '#howItWorks' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Get Proposal', href: '#lead-capture-section' },
    { label: 'FAQs', href: '#faqs' },
  ] as NavItem[],
};
