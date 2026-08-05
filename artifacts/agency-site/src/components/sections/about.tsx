import { motion } from 'framer-motion';
import { Sparkles, Target, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Le sur-mesure d\'abord',
    description: 'Pas de modèles préconçus ni de solutions génériques. Nous concevons des solutions taillées pour votre réalité et vos objectifs.'
  },
  {
    icon: Sparkles,
    title: 'Une valeur mesurable',
    description: 'Chaque interface dessinée et chaque ligne de code écrite visent un seul but : résoudre un problème précis et apporter un résultat concret.'
  },
  {
    icon: Zap,
    title: 'Sur tout le cycle',
    description: 'Du MVP au déploiement : développement web & mobile, design UI/UX, audit, conseil et digitalisation de vos processus.'
  }
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
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
              À propos de JRC DIGIT
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl heading-wavy uppercase tracking-tight mb-6"
            >
              L'ingénierie digitale <br className="hidden md:block" />
              au service de vos <span className="text-primary">ambitions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              Dans un monde où tout se digitalise à grande vitesse, une simple présence en
              ligne ne suffit plus. Le vrai défi : transformer une idée ou un problème
              complexe en une solution digitale fluide, performante et réellement adaptée
              aux réalités du terrain.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              C'est pour répondre à cette problématique que JRC DIGIT voit le jour. Nous ne
              croyons pas aux solutions génériques, mais à la puissance du sur-mesure :
              chaque ligne de code et chaque interface ont un seul objectif — apporter une
              valeur mesurable à votre activité.
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
