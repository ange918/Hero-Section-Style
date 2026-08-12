import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function CTA() {
  const scrollTo = (selector: string) =>
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="cta" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] px-6 py-16 md:px-16 md:py-24 text-center"
        >
          {/* Gradient backdrop matching the hero palette */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#a89bd9] via-[#8f81c4] to-[#6f5fa8]" />
          <div className="absolute -top-[20%] -left-[10%] w-[45vw] h-[45vw] bg-white rounded-full blur-[120px] opacity-25 -z-10 pointer-events-none" />
          <div className="absolute bottom-[-25%] right-[5%] w-[40vw] h-[40vw] bg-[#4b3d85] rounded-full blur-[120px] opacity-40 -z-10 pointer-events-none" />

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-md mb-8"
          >
            Passons à l'action
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.15 }}
            className="text-[clamp(2rem,7vw,4.5rem)] font-hero font-semibold text-white uppercase leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto break-words"
          >
            Prêt à concrétiser votre projet ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-medium leading-relaxed"
          >
            Dites-nous où vous voulez aller. Nous construisons la solution digitale qui vous y mènera.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="rounded-full h-14 px-8 text-base bg-white text-[#5b4b96] hover:bg-white/90 hover:scale-105 transition-transform duration-300 font-semibold"
              onClick={() => scrollTo('#contact')}
            >
              Démarrer un projet
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="glass"
              size="lg"
              className="rounded-full h-14 px-8 text-base text-white border-white/40 bg-transparent hover:bg-white/10 hover:scale-105 transition-transform duration-300"
              onClick={() => scrollTo('#work')}
            >
              Voir nos réalisations
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
