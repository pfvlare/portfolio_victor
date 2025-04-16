import { useState, useEffect } from 'react';

// Hook customizado para capturar a largura da janela do navegador
const useWindowWidth = () => {
  // Inicializa o estado com 0 (valor seguro no SSR)
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // Garante que só execute no client
    if (typeof window !== 'undefined') {
      // Função que define a largura atual
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      // Define a largura na primeira renderização
      handleResize();

      // Adiciona o event listener pra escutar mudanças
      window.addEventListener('resize', handleResize);

      // Remove o listener quando o componente desmontar
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // Retorna a largura atual
  return width;
};

export default useWindowWidth;