
import { Service, Project, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'We create visually stunning and highly functional websites that convert visitors into customers.',
    icon: 'Layout'
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Boost your visibility on search engines and drive organic traffic with our proven SEO strategies.',
    icon: 'Search'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic online marketing campaigns designed to reach your target audience and grow your brand.',
    icon: 'Megaphone'
  },
  {
    id: 'mobile-apps',
    title: 'App Development',
    description: 'Custom mobile and web applications tailored to your specific business needs and goals.',
    icon: 'Smartphone'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/shop/600/400'
  },
  {
    id: '2',
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    image: 'https://picsum.photos/seed/dash/600/400'
  },
  {
    id: '3',
    title: 'FinTech App',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/fin/600/400'
  },
  {
    id: '4',
    title: 'Real Estate Portal',
    category: 'Web Development',
    image: 'https://picsum.photos/seed/estate/600/400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO, TechVentures',
    content: 'WebSolutions transformed our online presence. Their attention to detail and technical expertise is unmatched.',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Marketing Director',
    content: 'The ROI we saw after their SEO campaign was incredible. Highly professional team.',
    avatar: 'https://picsum.photos/seed/michael/100/100'
  }
];
