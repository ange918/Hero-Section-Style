import { motion } from 'framer-motion';
import { LabelPill, GhostWord } from '@/components/section-decor';

interface Partner {
  name: string;
  monogram: string;
  description: string;
  accent: string;
}

// NOTE: monograms are placeholders — replace with the real partner logos when provided.
const partners: Partner[] = [
  {
    name: 'Susuni Lab',
    monogram: 'SL',
    description: "Laboratoire d'innovation avec qui nous concevons et prototypons des produits digitaux ambitieux.",
    accent: 'from-[#a89bd9] to-[#6f5fa8]'
  },
  {
    name: "MODEL'S ACADEMY MANAGEMENT",
    monogram: 'MA',
    description: 'Partenaire dans la gestion et la digitalisation des parcours de formation et de talents.',
    accent: 'from-[#8f81c4] to-[#4b3d85]'
  }
];

export function Partners() {
  return (
    <section id="partners" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <GhostWord className="top-8 left-1/2 -translate-x-1/2 text-[20vw]">Confiance</GhostWord>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <LabelPill>Partenaires</LabelPill>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl heading-wavy uppercase tracking-tight mb-6"
          >
            Ils nous font <span className="text-primary">confiance</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Nous avançons aux côtés de structures qui partagent notre exigence de qualité et de sur-mesure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="glass rounded-3xl p-8 flex flex-col items-start gap-5 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Dark clay monogram tile (echoes the hero widget) */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${partner.accent} flex items-center justify-center text-white font-hero font-semibold text-xl shadow-lg`}>
                {partner.monogram}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl heading-wavy tracking-tight mb-2">{partner.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
