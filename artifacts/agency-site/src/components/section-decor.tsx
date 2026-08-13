import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

/**
 * Shared section-header decorations that echo the hero:
 * - LabelPill: the small uppercase tracked pill used above section titles.
 * - GhostWord: a giant, faint gradient-clipped brand-style word sitting
 *   behind the section header (like the hero's oversized "JRC DIGIT").
 */

export function LabelPill({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      className={`inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-6 ${className}`}
    >
      {children}
    </motion.span>
  );
}

export function GhostWord({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 select-none whitespace-nowrap font-hero font-semibold uppercase leading-none tracking-tighter bg-gradient-to-b from-primary/10 to-transparent bg-clip-text text-transparent ${className}`}
    >
      {children}
    </div>
  );
}
