import { motion } from 'framer-motion';
import { LabelPill, GhostWord } from '@/components/section-decor';

import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';

const team = [
  {
    name: 'Marcus Vance',
    role: 'Directeur Créatif',
    image: team1,
  },
  {
    name: 'Elena Rostova',
    role: 'Designer Principale',
    image: team2,
  },
  {
    name: 'David Chen',
    role: 'Directeur Technique',
    image: team3,
  }
];

export function Team() {
  return (
    <section id="agency" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      {/* Decorative noise/grain over solid background */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
      
      <GhostWord className="top-8 left-1/2 -translate-x-1/2 text-[20vw]">Équipe</GhostWord>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <LabelPill>L'équipe</LabelPill>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl heading-wavy uppercase tracking-tight mb-6"
          >
            Les <span className="text-primary">Esprits</span> Derrière
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Une équipe restreinte d'artisans du digital. Pas de chefs de projet intermédiaires : vous collaborez directement avec les personnes qui réalisent le travail.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="relative aspect-[3/4] mb-6 rounded-2xl overflow-hidden bg-muted">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                />
                {/* Fallback */}
                <div className="absolute inset-0 flex items-center justify-center -z-10 text-muted-foreground font-display text-2xl font-bold uppercase">
                  {member.name.split(' ')[0]}
                </div>
              </div>
              <h3 className="text-2xl heading-wavy mb-1">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
