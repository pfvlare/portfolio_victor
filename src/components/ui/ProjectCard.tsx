'use client';

import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProjectCard = ({
  name,
  url,
  repo,
  year,
  img,
  tags,
  ...rest
}: ProjectType & MotionProps) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return null;

  return (
    <motion.div {...rest} className="w-full max-w-[350px]">
      <button
        onClick={(e) => {
          const isInsideAnchor = (e.target as HTMLElement).closest('a');
          if (isInsideAnchor) return;
          if (url) window.open(url, '_blank');
        }}
        className="block w-full overflow-hidden transition-all duration-200 rounded-md shadow-xl group bg-bg-secondary dark:shadow-2xl"
      >
        {/* Imagem do projeto */}
        <div className="overflow-hidden h-[200px]">
          <Image
            src={img}
            alt={name}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-focus:scale-110"
          />
        </div>

        {/* Detalhes do projeto */}
        <div className="p-4 py-3 space-y-1">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs capitalize text-dark-3">
              {tags.join(' | ')}
            </p>
            <div className="flex items-center space-x-1.5">
              {repo && (
                <a
                  href={repo}
                  className="block duration-200 hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver repositório no GitHub"
                >
                  <Icon icon="tabler:brand-github" width={20} height={20} />
                </a>
              )}
              {url && (
                <a
                  href={url}
                  className="block duration-200 hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir projeto ao vivo"
                >
                  <Icon icon="ci:external-link" width={22} height={22} />
                </a>
              )}
            </div>
          </div>

          <h4 className="flex justify-between font-medium capitalize duration-200 group-hover:text-accent text-dark-1">
            <span>{name}</span>
            <span className="mr-1">{year}</span>
          </h4>
        </div>
      </button>
    </motion.div>
  );
};

export default ProjectCard;