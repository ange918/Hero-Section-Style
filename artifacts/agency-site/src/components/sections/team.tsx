import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { LabelPill, GhostWord } from '@/components/section-decor';

interface Member {
  name: string;
  role: string;
  bio: string;
  accent: string; // tailwind gradient stops for the card border / avatar
}

const team: Member[] = [
  {
    name: 'Ange Akonde',
    role: 'CEO & Stratégie',
    bio: "Fixe le cap et l'exigence. Chaque projet part d'une vision claire avant la première ligne de code.",
    accent: 'from-[#a89bd9] to-[#6f5fa8]'
  },
  {
    name: 'Elton Hounnou',
    role: 'Lead Tech',
    bio: 'Architecte des solutions : des bases modernes, rapides et sécurisées, pensées pour durer.',
    accent: 'from-[#8f81c4] to-[#4b3d85]'
  },
  {
    name: 'Ahouansè Léa',
    role: 'Design UI/UX',
    bio: 'Transforme la complexité en interfaces élégantes, intuitives et centrées sur l\'utilisateur.',
    accent: 'from-[#c8b6ff] to-[#8f81c4]'
  },
  {
    name: 'Sylvason',
    role: 'Développement Full-Stack',
    bio: 'Du front au back : des produits robustes livrés proprement, sprint après sprint.',
    accent: 'from-[#9d8fd6] to-[#5b4b96]'
  },
  {
    name: 'Alakè Ama',
    role: 'Gestion de projet',
    bio: 'Orchestre les livraisons et garde le lien direct avec vous, sans intermédiaire superflu.',
    accent: 'from-[#b9a9e8] to-[#6f5fa8]'
  },
  {
    name: 'Honorat Dariel',
    role: 'Développement Mobile',
    bio: 'Des applications fluides et accessibles, pensées mobile-first pour le terrain.',
    accent: 'from-[#a89bd9] to-[#4b3d85]'
  }
];

const AUTOPLAY_MS = 4500;

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

export function Team() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = team.length;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setActive((a) => (a + 1) % n), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, n]);

  // Relative offset wrapped to nearest (circular coverflow)
  const relOf = (i: number) => {
    let r = i - active;
    if (r > n / 2) r -= n;
    if (r < -n / 2) r += n;
    return r;
  };

  const cardStyle = (rel: number): React.CSSProperties => {
    const abs = Math.abs(rel);
    const clamped = Math.max(-2, Math.min(2, rel));
    return {
      transform: `translate(-50%, -50%) translateX(${clamped * 56}%) translateZ(${-abs * 180}px) rotateY(${-clamped * 38}deg) scale(${1 - abs * 0.12})`,
      opacity: abs > 2 ? 0 : 1 - abs * 0.25,
      zIndex: 30 - abs,
      pointerEvents: abs > 2 ? 'none' : 'auto'
    };
  };

  return (
    <section id="agency" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      {/* Decorative noise/grain */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
        }}
      />
      <GhostWord className="top-8 left-1/2 -translate-x-1/2 text-[20vw]">Équipe</GhostWord>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
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

        {/* 3D coverflow carousel */}
        <div
          className="relative h-[440px] sm:h-[460px] [perspective:1400px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="absolute inset-0 [transform-style:preserve-3d]">
            {team.map((member, i) => {
              const rel = relOf(i);
              const isActive = rel === 0;
              return (
                <div
                  key={member.name}
                  onClick={() => setActive(i)}
                  style={cardStyle(rel)}
                  className="absolute top-1/2 left-1/2 w-[300px] sm:w-[340px] cursor-pointer transition-all duration-500 ease-out"
                  aria-hidden={!isActive}
                >
                  {/* Gradient border wrapper */}
                  <div className={`rounded-[1.75rem] p-[1.5px] bg-gradient-to-br ${member.accent} ${isActive ? 'shadow-[0_25px_70px_rgba(75,61,133,0.55)]' : 'shadow-[0_15px_40px_rgba(20,10,50,0.45)]'}`}>
                    <div className="relative rounded-[1.7rem] bg-[#120f2b] overflow-hidden p-8 h-[400px] flex flex-col">
                      {/* soft top glow */}
                      <div className={`absolute -top-16 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full bg-gradient-to-br ${member.accent} opacity-25 blur-3xl pointer-events-none`} />

                      <div className="relative">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.accent} flex items-center justify-center text-white font-hero font-semibold text-2xl shadow-lg mb-6`}>
                          {initials(member.name)}
                        </div>
                        <h3 className="text-2xl heading-wavy text-white mb-1">{member.name}</h3>
                        <p className="text-primary font-medium mb-5">{member.role}</p>
                        <p className="text-white/65 leading-relaxed">{member.bio}</p>
                      </div>

                      <div className="mt-auto pt-6 flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-[0.2em]">
                        <span className="w-8 h-px bg-white/25" />
                        JRC Digit
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => setActive((a) => (a - 1 + n) % n)}
            aria-label="Membre précédent"
            className="w-11 h-11 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2.5">
            {team.map((m, i) => (
              <button
                key={m.name}
                onClick={() => setActive(i)}
                aria-label={`Voir ${m.name}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-primary' : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActive((a) => (a + 1) % n)}
            aria-label="Membre suivant"
            className="w-11 h-11 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
