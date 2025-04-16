import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'Contato',
  subtitle: 'Vamos trocar ideias?',
  paragraphs: [
    'Estou sempre aberto a oportunidades de colaboração, projetos paralelos e iniciativas que desafiem minha criatividade e capacidade técnica.',
    'Se você tem uma ideia interessante, precisa de suporte técnico ou quer trocar experiências sobre desenvolvimento e arquitetura de software, fique à vontade para entrar em contato.',
  ],
  link: `mailto:${author.email}`,
};