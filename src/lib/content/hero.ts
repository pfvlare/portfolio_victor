import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi there! I m',
  title: 'Victor Gois.',
  tagline: 'Senior Full Stack Engineer, Especialista em React, React Native, Vue.js, Node.js, TypeScript e Arquiteturas Escaláveis',
  description:
    'Engenheiro de software sênior com mais de 8 anos de experiência no desenvolvimento de aplicações frontend e backend, utilizando tecnologias como React, React Native, Vue, Node.js, Next.js, NestJS e TypeScript.',
  specialText: 'Comprometido em transformar desafios técnicos em soluções escaláveis e de alto impacto.',
  cta: {
    title: 'ver meu currículo',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};