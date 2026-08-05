import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'What kinds of projects do you take on?',
    answer:
      'We focus on brand identity, digital products (web & mobile apps), creative marketing sites, and social content. If it needs strategy and craft in equal measure, it\'s our kind of project.'
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Engagements typically start around $10k for focused work and scale to $100k+ for comprehensive brand and product builds. We scope every project individually — build a brief in our project generator and we\'ll send a tailored proposal.'
  },
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Most projects run between 1 and 4 months depending on scope. We work in fast, iterative sprints so you see real progress every week rather than a big reveal at the end.'
  },
  {
    question: 'Do we work directly with the designers?',
    answer:
      'Always. We don\'t hire account managers — you collaborate directly with the strategists and designers doing the work. Fewer layers, sharper output.'
  },
  {
    question: 'What happens after launch?',
    answer:
      'We can hand off clean, documented deliverables to your team or stay on for ongoing iteration and support. Whatever keeps the work performing at its best.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl heading-wavy uppercase tracking-tight mb-6"
          >
            Frequently <span className="text-primary">Asked</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Everything you need to know before we start building together.
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
