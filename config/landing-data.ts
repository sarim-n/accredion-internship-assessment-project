export interface StatRecord {
  number: string;
  label: string;
  description: string;
}

export interface EdgeNode {
  id: string;
  position: 'top' | 'bottom';
  title: string;
  description: string;
  iconName: string;
  circleColor: string;
}

export interface DomainCategory {
  id: string;
  title: string;
  description: string;
  programs: string[];
  icon: string;
}

export interface SegmentationCard {
  category: string;
  items: string[];
}

export interface TargetAudienceRole {
  title: string;
  description: string;
  icon: string;
}

export interface StepApproach {
  step: string;
  title: string;
  description: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  items: { question: string; answer: string }[];
}

export interface ClientTestimonial {
  quote: string;
  author?: string;
  company?: string;
}

export const HERO_DATA = {
  titleStart: 'Next-Gen',
  titleHighlight1: 'Expertise',
  titleMiddle: 'For Your',
  titleHighlight2: 'Enterprise',
  subtitle: 'Cultivate high-performance teams through expert learning.',
  checklist: ['Tailored Solutions', 'Industry Insights', 'Expert Guidance'],
  ctaText: 'Enquire Now',
};

export const TRACK_RECORD_STATS: StatRecord[] = [
  {
    number: '10K+',
    label: 'Professionals Trained',
    description: 'Professionals trained for exceptional career success',
  },
  {
    number: '200+',
    label: 'Sessions Delivered',
    description: 'Sessions delivered with unmatched learning excellence',
  },
  {
    number: '5K+',
    label: 'Active Learners',
    description: 'Active learners engaged in dynamic courses',
  },
];

export const ACCREDIAN_EDGE_NODES: EdgeNode[] = [
  {
    id: '1',
    position: 'top',
    title: 'Tailored Solutions',
    description: "Programs customized to your organization's goals and challenges.",
    iconName: 'Lightbulb',
    circleColor: 'from-[#38BDF8] to-[#0284C7]',
  },
  {
    id: '2',
    position: 'bottom',
    title: 'Expert Guidance',
    description: 'Learn from industry leaders with real-world success.',
    iconName: 'UserCheck',
    circleColor: 'from-[#3B82F6] to-[#1D4ED8]',
  },
  {
    id: '3',
    position: 'top',
    title: 'Innovative Framework',
    description: 'Proprietary methods for impactful, application-driven results.',
    iconName: 'RefreshCw',
    circleColor: 'from-[#2563EB] to-[#1E40AF]',
  },
  {
    id: '4',
    position: 'bottom',
    title: 'Advanced Technology',
    description: 'State-of-the-art LMS for seamless learning experiences.',
    iconName: 'Cpu',
    circleColor: 'from-[#1D61E7] to-[#1E3A8A]',
  },
  {
    id: '5',
    position: 'top',
    title: 'Diverse Offerings',
    description: 'Courses across industries, skill levels, and emerging fields.',
    iconName: 'Maximize2',
    circleColor: 'from-[#3B82F6] to-[#1D61E7]',
  },
  {
    id: '6',
    position: 'bottom',
    title: 'Proven Impact',
    description: 'Trusted by leading organizations for measurable ROI.',
    iconName: 'Target',
    circleColor: 'from-[#1E3A8A] to-[#0F172A]',
  },
  {
    id: '7',
    position: 'top',
    title: 'Flexible Delivery',
    description: 'Online and offline options tailored to your needs.',
    iconName: 'Package',
    circleColor: 'from-[#2563EB] to-[#1D61E7]',
  },
];

export interface DomainCard {
  id: string;
  title: string;
  iconName: string;
}

export const DOMAIN_EXPERTISE_CARDS: DomainCard[] = [
  {
    id: 'product',
    title: 'Product & Innovation Hub',
    iconName: 'Lightbulb',
  },
  {
    id: 'gen-ai',
    title: 'Gen-AI Mastery',
    iconName: 'Brain',
  },
  {
    id: 'leadership',
    title: 'Leadership Elevation',
    iconName: 'Users',
  },
  {
    id: 'tech-data',
    title: 'Tech & Data Insights',
    iconName: 'BarChart3',
  },
  {
    id: 'operations',
    title: 'Operations Excellence',
    iconName: 'Cog',
  },
  {
    id: 'digital',
    title: 'Digital Enterprise',
    iconName: 'Globe',
  },
  {
    id: 'fintech',
    title: 'Fintech Innovation Lab',
    iconName: 'CreditCard',
  },
];

export const SEGMENTATION_DATA: SegmentationCard[] = [
  {
    category: 'Program Specific',
    items: ['Certificate Programs', 'Executive Development', 'Post Graduate Certificates'],
  },
  {
    category: 'Industry Specific',
    items: ['IT & Software', 'Healthcare & Biotech', 'Retail & E-commerce', 'BFSI & Finance', 'Education', 'Manufacturing'],
  },
  {
    category: 'Topic Specific',
    items: ['Machine Learning', 'UX & Design', 'Data Analytics', 'Cybersecurity', 'Cloud Infrastructure'],
  },
  {
    category: 'Level Specific',
    items: ['Senior Leadership', 'Mid-Career Professionals', 'Freshers & Entry Level'],
  },
];

export const WHO_SHOULD_JOIN: TargetAudienceRole[] = [
  {
    title: 'Tech Professionals',
    description: 'Enhance expertise, embrace tech, drive innovation.',
    icon: 'Code2',
  },
  {
    title: 'Non-Tech Professionals',
    description: 'Adapt digitally, collaborate in tech environments.',
    icon: 'Users',
  },
  {
    title: 'Emerging Professionals',
    description: 'Develop powerful skills for rapid career growth.',
    icon: 'TrendingUp',
  },
  {
    title: 'Senior Professionals',
    description: 'Strengthen leadership, enhance strategic decisions.',
    icon: 'Award',
  },
];

export const CAT_FRAMEWORK_PHASES = [
  {
    phase: 'Concept',
    title: 'Foundational & Core Principles',
    description: 'Deep theoretical and analytical understanding taught by veteran educators.',
  },
  {
    phase: 'Application',
    title: 'Real-World Business Execution',
    description: 'Applying knowledge to simulated enterprise business cases and company datasets.',
  },
  {
    phase: 'Tools',
    title: 'Hands-on Tool Mastery',
    description: 'Practical training on industry-standard tools (Python, PyTorch, Tableau, Snowflake, AWS).',
  },
];

export const HOW_IT_WORKS_STEPS: StepApproach[] = [
  {
    step: '1',
    title: 'Skill Gap Analysis',
    description: 'Assess team skill gaps and developmental needs.',
  },
  {
    step: '2',
    title: 'Customized Training Plan',
    description: 'Create a tailored roadmap addressing organizational goals.',
  },
  {
    step: '3',
    title: 'Flexible Program Delivery',
    description: 'Deliver adaptable programs aligned with industry and organizational needs.',
  },
];

export const FAQ_DATA: FAQCategory[] = [
  {
    id: 'course',
    label: 'About the Course',
    items: [
      {
        question: 'What types of corporate training programs does Accredian offer?',
        answer:
          "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
      },
      {
        question: 'What domain specializations are available?',
        answer:
          'We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.',
      },
    ],
  },
  {
    id: 'delivery',
    label: 'About the Delivery',
    items: [
      {
        question: 'Can the courses be customized for specific industries or teams?',
        answer:
          'Absolute! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.',
      },
      {
        question: 'Who are the instructors for these programs?',
        answer:
          'Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.',
      },
      {
        question: 'What formats are the programs delivered in?',
        answer:
          "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
      },
    ],
  },
  {
    id: 'misc',
    label: 'Miscellaneous',
    items: [
      {
        question: 'What is the ideal team size for corporate training?',
        answer:
          'Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.',
      },
      {
        question: 'How do we get started with Accredian?',
        answer:
          'Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.',
      },
    ],
  },
];

export const TESTIMONIALS_DATA: ClientTestimonial[] = [
  {
    quote:
      'We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.',
  },
  {
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    quote:
      'Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.',
  },
];
