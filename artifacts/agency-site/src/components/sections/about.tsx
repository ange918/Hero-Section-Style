import { motion } from 'framer-motion';
import { Sparkles, Target, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Strategy First',
    description: 'Every pixel serves a purpose. We start with sharp positioning before a single frame is designed.'
  },
  {
    icon: Sparkles,
    title: 'Craft Obsessed',
    description: 'We sweat the details others skip — the micro-interactions, the kerning, the load times.'
  },
  {
    icon: Zap,
    title: 'Built to Move',
    description: 'Fast teams, faster iterations. We ship work that performs the day it goes live.'
  }
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: narrative */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-6"
            >
              About the Agency
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl heading-wavy uppercase tracking-tight mb-6"
            >
              We Build Brands <br className="hidden md:block" />
              That <span className="text-primary">Refuse to Blend In</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              Founded on a simple belief — that mediocrity is invisible — JRC Digit is a
              boutique creative studio pairing strategic rigor with fearless design. We
              partner with ambitious teams to turn bold ideas into unforgettable digital
              experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              No bloated retainers, no account-manager telephone game. You work directly
              with the people doing the work — and it shows in everything we ship.
            </motion.p>
          </div>

          {/* Right: pillars */}
          <div className="flex flex-col gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="glass rounded-2xl p-6 flex gap-5 items-start hover:border-primary/40 transition-colors duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl heading-wavy mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
