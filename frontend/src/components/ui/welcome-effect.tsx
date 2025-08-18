'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface WelcomeProps {
  text?: string;
  speed?: number; // higher = faster
  className?: string;
}

// Apple-like friendly staggered reveal for a heading
export function WelcomeIETiensEffect({
  text = "Welcome IET'iens",
  speed = 1,
  className,
}: WelcomeProps) {
  const letters = React.useMemo(() => Array.from(text), [text]);

  const duration = 0.6 / speed;
  const stagger = 0.055 / speed;

  // Respect reduced motion
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    return (
      <div className={cn('select-none text-3xl md:text-4xl display-title text-cyan-300', className)} aria-label={text}>
        {text}
      </div>
    );
  }

  return (
    <motion.div
      className={cn('select-none display-title text-3xl md:text-4xl', className)}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      aria-label={text}
      role="img"
    >
      {letters.map((ch, i) => (
        <motion.span
          key={`wfx-${i}-${ch}`}
          className={cn(
            'inline-block leading-none text-transparent bg-clip-text',
            // cyan -> white gradient for a friendly techy feel
            'bg-gradient-to-b from-cyan-300 via-cyan-200 to-white'
          )}
          style={{ WebkitTextStroke: '1px rgba(203,213,225,0.5)' }}
          variants={{
            hidden: { opacity: 0, y: '0.4em', filter: 'blur(4px)' },
            show: {
              opacity: 1,
              y: '0em',
              filter: 'blur(0px)',
              transition: { duration, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default WelcomeIETiensEffect;