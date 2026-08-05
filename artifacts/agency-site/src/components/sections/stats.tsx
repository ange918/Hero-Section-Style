import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 12, label: 'Years of Craft' },
  { value: 40, suffix: '+', label: 'Global Brands' },
  { value: 98, suffix: '%', label: 'Client Retention' }
];

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}

function StatItem({ stat, active, delay }: { stat: Stat; active: boolean; delay: number }) {
  const value = useCountUp(stat.value, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-hero font-semibold text-primary mb-3 tabular-nums">
        {stat.prefix}
        {value}
        {stat.suffix}
      </div>
      <div className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="py-16 sm:py-20 md:py-28 relative overflow-hidden border-y border-border">
      <div className="absolute inset-0 bg-primary/[0.03] pointer-events-none" />
      <div ref={ref} className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={inView} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
