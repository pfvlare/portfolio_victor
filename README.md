# Portfolio de Victor Gois

Uma landing page/portfólio pessoal construída com Next.js e Tailwind CSS que apresenta as experiências profissionais, projetos, habilidades e detalhes de contato do Victor Gois – Senior Full Stack Software Engineer.

---

## Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Recursos e Funcionalidades](#recursos-e-funcionalidades)
- [Instalação e Configuração](#instalação-e-configuração)
- [Uso e Desenvolvimento](#uso-e-desenvolvimento)
- [Deploy](#deploy)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

---

## Visão Geral

Este projeto é o portfólio pessoal de Victor Gois, um engenheiro de software sênior especializado em tecnologias como React, React Native, Vue, Node.js, Next.js, NestJS e TypeScript.  
O objetivo deste portfólio é apresentar de forma organizada e visualmente atraente:

- **Experiência profissional**  
- **Projetos desenvolvidos**  
- **Habilidades técnicas**  
- **Informações de contato**

O design é responsivo, utilizando animações sutis com Framer Motion e com temas Light/Dark configuráveis via ThemeProvider.

---

## Tecnologias Utilizadas

- **Next.js 13+** – Framework React para SSR e SSG avançados.
- **React 18** – Biblioteca para construção de interfaces.
- **Tailwind CSS** – Framework CSS utilitário para estilização rápida.
- **TypeScript** – Tipagem estática para maior robustez no desenvolvimento.
- **Framer Motion** – Animações e transições fluidas.
- **ESLint & Prettier** – Padronização e formatação de código.
- **Husky & lint-staged** – Hooks de commit para qualidade do código.

---

## Recursos e Funcionalidades

- **Tema Dark/Light:** Alternância de tema com armazenamento da preferência no `localStorage`.
- **Animações e Transições:** Elementos com animações de fadeIn, slideIn, etc., para uma experiência dinâmica.
- **Navegação Responsiva:** Navbar com comportamento inteligente, que oculta durante o scroll e adapta seu layout conforme a largura da tela.
- **Experiência Profissional:** Seção interativa listando cargos, empresas e responsabilidades.
- **Galeria de Projetos:** Cards com imagens, tags e links para repositórios e versões ao vivo dos projetos.
- **Cursor Personalizado:** Um cursor customizado renderizado somente no client.
- **SEO Otimizado:** Metadados configurados para Open Graph, Twitter e ícones da aplicação.

---

## Instalação e Configuração

### Requisitos

- Node.js (versão LTS recomendada, ex: 18.x)
- Yarn (ou npm, mas o projeto utiliza Yarn nos scripts)

### Passo a Passo

1. **Clone o repositório**

   ```bash
   git clone https://github.com/pfvlare/portfolio_victor.git
   cd portfolio_victor
