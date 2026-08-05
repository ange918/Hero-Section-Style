import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

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

const AUTOPLAY_MS = 6000;

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 })
};

export function Testimonials() {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = (dir: number) => {
    setState(([prev]) => [(prev + dir + testimonials.length) % testimonials.length, dir]);
  };

  const goTo = (i: number) => {
    setState(([prev]) => [i, i > prev ? 1 : -1]);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, index]);

  const active = testimonials[index];

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
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

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slider viewport */}
          <div className="relative min-h-[340px] sm:min-h-[300px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-3xl p-8 md:p-12 w-full flex flex-col"
              >
                <Quote className="w-10 h-10 text-primary/40 mb-6" />
                <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 flex-1">
                  "{active.quote}"
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold font-display shrink-0">
                    {active.initials}
                  </div>
                  <div>
                    <div className="font-bold">{active.name}</div>
                    <div className="text-sm text-muted-foreground">{active.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-primary' : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
