'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface WelcomeProps {
  text?: string;
  speed?: number; // higher = faster
  className?: string;
}

export function WelcomeIETiensEffect({
  text = "Welcome Sukhad'iens",
  speed = 1,
  className,
}: WelcomeProps) {
  const letters = React.useMemo(() => Array.from(text), [text]);

  const duration = 0.7 / speed;
  const stagger = 0.06 / speed;

  // Accessibility: respect reduced motion
  const prefersReduced = typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    return (
      <div
        className={cn(
          'select-none text-3xl md:text-5xl font-extrabold text-cyan-300',
          className
        )}
        aria-label={text}
      >
        {text}
      </div>
    );
  }

  return (
    <motion.div
      className={cn(
        'select-none display-title text-3xl md:text-5xl font-extrabold tracking-wide',
        className
      )}
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
            'inline-block leading-none text-transparent bg-clip-text cursor-default',
            // Rich gradient without glow
            'bg-gradient-to-b from-cyan-300 via-sky-400 to-purple-400'
          )}
          style={{
            WebkitTextStroke: '1px rgba(203,213,225,0.25)',
          }}
          variants={{
            hidden: { opacity: 0, y: '0.5em', scale: 0.9, filter: 'blur(6px)' },
            show: {
              opacity: 1,
              y: '0em',
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                duration,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.25 },
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default WelcomeIETiensEffect;
