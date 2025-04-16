import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'Sobre', url: '/#sobre' },
    { name: 'Skills', url: '/#skills' },
    { name: 'Experiência', url: '/#experience' },
    { name: 'Projetos', url: '/#projects' },
    { name: 'Contato', url: '/#contato' },
  ],
  cta: {
    title: 'Currículo',
    url: `/${resumeFileName}`,
  },
};