import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'O que eu faço',
  skills: [
    {
      id: getId(),
      title: 'Engenharia de Software e Desenvolvimento Full Stack',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Desenvolvimento de aplicações completas (frontend e backend) com React, Next.js, NestJS e AdonisJS',
        'Criação de aplicações mobile com React Native',
        'Implementação de APIs RESTful e GraphQL com Node.js e Express',
        'Trabalho com banco de dados relacionais e não relacionais, utilizando ORMs como Prisma',
        'Experiência com testes automatizados utilizando Jest e Cypress',
        'Utilização de TailwindCSS para estilização moderna e responsiva',
      ],
      softwareSkills: [
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'typeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'vuejs', icon: 'logos:vue' },
        { name: 'angular', icon: 'logos:angular-icon' },
        { name: 'nestjs', icon: 'logos:nestjs' },
        { name: 'adonisjs', icon: 'logos:adonisjs-icon' }, // verifique se o ícone existe
        { name: 'prisma', icon: 'vscode-icons:file-type-prisma' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'jest', icon: 'vscode-icons:file-type-jest' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
  ],
};