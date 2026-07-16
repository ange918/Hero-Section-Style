import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "JRC Digit didn't just redesign our brand — they gave us a point of view. Our conversion rate nearly doubled within the first quarter.",
    name: 'Sarah Lindqvist',
    role: 'CMO, Nexus Fintech',
    initials: 'SL'
  },
  {
    quote:
      "Working directly with the designers changed everything. No middlemen, no diluted vision. Just sharp, fearless work delivered fast.",
    name: 'Tomás Herrera',
    role: 'Founder, Aura Fashion',
    initials: 'TH'
  },
  {
    quote:
      "They treat craft like a competitive advantage. Every detail was obsessed over, and it shows in how customers respond to the product.",
    name: 'Priya Raman',
    role: 'Head of Product, Volt Energy',
    initials: 'PR'
  },
  {
    quote:
      "The most switched-on creative team we've partnered with. Strategy, design, and execution all under one very talented roof.",
    name: 'Marcus Bennett',
    role: 'CEO, Synthetix',
    initials: 'MB'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl heading-wavy uppercase tracking-tight mb-6"
          >
            What Our <span className="text-primary">Clients</span> Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            We measure success by the results we create — and the partners who keep coming back.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.6 }}
              className="glass rounded-3xl p-8 md:p-10 flex flex-col hover:border-primary/40 transition-colors duration-300"
            >
              <Quote className="w-9 h-9 text-primary/40 mb-6" />
              <blockquote className="text-lg md:text-xl leading-relaxed mb-8 flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold font-display shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
