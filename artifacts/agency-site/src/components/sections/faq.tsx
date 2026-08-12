import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { LabelPill, GhostWord } from '@/components/section-decor';

const faqs = [
  {
    question: 'Quels types de projets prenez-vous en charge ?',
    answer:
      'Nous intervenons sur le développement web & mobile sur-mesure (SaaS, plateformes métier, outils internes), le design UI/UX, ainsi que l\'audit, le conseil et la digitalisation de processus. Si un projet demande à la fois de la stratégie et de la rigueur technique, c\'est le nôtre.'
  },
  {
    question: 'Combien coûte un projet ?',
    answer:
      'Les engagements démarrent généralement autour de 10 k€ pour un périmètre ciblé et vont au-delà de 100 k€ pour des plateformes complètes. Chaque projet est chiffré individuellement — construisez votre brief dans notre générateur et nous vous enverrons une proposition sur-mesure.'
  },
  {
    question: 'Combien de temps dure un projet type ?',
    answer:
      'La plupart des projets s\'étalent sur 1 à 4 mois selon le périmètre. Nous travaillons en sprints rapides et itératifs : vous constatez de réels progrès chaque semaine plutôt qu\'une grande révélation à la fin.'
  },
  {
    question: 'Travaille-t-on directement avec les développeurs ?',
    answer:
      'Toujours. Nous ne recrutons pas de chefs de projet intermédiaires — vous collaborez directement avec les personnes qui conçoivent et réalisent votre solution. Moins d\'intermédiaires, un résultat plus net.'
  },
  {
    question: 'Que se passe-t-il après le lancement ?',
    answer:
      'Nous pouvons livrer à votre équipe des livrables propres et documentés, ou rester à vos côtés pour l\'itération et le support continus. L\'important : que votre solution reste performante dans le temps.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <GhostWord className="top-8 left-1/2 -translate-x-1/2 text-[22vw]">FAQ</GhostWord>
      <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <LabelPill>Questions</LabelPill>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl heading-wavy uppercase tracking-tight mb-6"
          >
            Questions <span className="text-primary">Fréquentes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Tout ce qu'il faut savoir avant de construire ensemble.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className={`glass rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'border-primary/40' : ''
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left p-6 md:p-7"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg md:text-xl font-semibold">{faq.question}</span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full bg-primary/15 text-primary flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <p className="px-6 md:px-7 pb-6 md:pb-7 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
