'use client';

import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, Wrapper } from '@/components';

import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } = heroSection;

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  return (
    <Wrapper
      id="hero"
      className="flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0"
    >
      {/* Subtítulo */}
      <motion.p
        variants={slideUp({ delay: getAnimationDelay(0) })}
        initial="hidden"
        animate="show"
        className="font-mono text-sm md:text-base text-accent"
      >
        {subtitle}
      </motion.p>

      {/* Nome e cargo/tagline */}
      <div className="max-w-4xl text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug tracking-tight">
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(1) })}
          initial="hidden"
          animate="show"
          className="text-slate-900 dark:text-slate-200 capitalize mb-2"
        >
          {title}
        </motion.h1>

        <motion.h2
          variants={slideUp({ delay: getAnimationDelay(2) })}
          initial="hidden"
          animate="show"
          className="text-slate-800 dark:text-slate-300 max-w-3xl leading-relaxed text-balance"
        >
          {tagline}
        </motion.h2>
      </div>

      {/* Descrição */}
      <motion.p
        variants={slideUp({ delay: getAnimationDelay(3) })}
        initial="hidden"
        animate="show"
        className="max-w-xl text-base sm:text-lg text-dark-2 leading-relaxed"
      >
        {description}
      </motion.p>

      {/* Texto especial (disponibilidade, motivação etc) */}
      {specialText && (
        <motion.p
          variants={slideUp({ delay: getAnimationDelay(4) })}
          initial="hidden"
          animate="show"
          className="font-mono text-xs md:text-sm text-accent mt-2"
        >
          {specialText}
        </motion.p>
      )}

      {/* Botão CTA (currículo/link) */}
      {cta && (
        <Button
          size="lg"
          type="link"
          variants={slideUp({ delay: getAnimationDelay(5) })}
          initial="hidden"
          animate="show"
          href={cta?.url ?? '#'}
          className={`mt-6 xs:mt-8 md:mt-10 ${cta.hideInDesktop ? 'md:hidden' : ''}`}
          sameTab={cta?.sameTab}
        >
          {cta.title}
        </Button>
      )}
    </Wrapper>
  );
};

export default Hero;