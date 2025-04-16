'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, list } = aboutSection;
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Olá! Sou <strong>Victor Gois</strong> 👋<br />
            <span>🇧🇷 Olá | 🇺🇸 Hello | 🇪🇸 Hola</span>
          </p>

          <p>
            <strong>Senior Full Stack Engineer</strong> • Especialista em React, React Native, Vue.js,
            Node.js, TypeScript e Arquiteturas Escaláveis • 8+ anos de experiência.
          </p>

          <p>
            🎓 Graduado em Sistemas da Informação. Tenho mais de 8 anos de experiência em
            desenvolvimento frontend, backend e full stack, entregando soluções robustas,
            escaláveis e de alta performance.
          </p>

          <p>
            Sou apaixonado por tecnologia, arquitetura de software e sistemas complexos —
            movido por desafios e inovação.
          </p>

          <p>
            Já atuei em projetos de destaque nos setores <strong>financeiro, logístico e de seguros</strong>,
            sempre com foco em entregar <strong>código limpo</strong>, <strong>arquiteturas eficientes</strong> e
            atuar em ambientes de alta complexidade com colaboração e foco em resultados.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Imagem de perfil personalizada */}
        <AuthorImage src="/victor.jpeg" alt="Victor Gois" />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;