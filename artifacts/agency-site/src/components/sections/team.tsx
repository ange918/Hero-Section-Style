import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { LabelPill, GhostWord } from '@/components/section-decor';

import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';

interface Member {
  name: string;
  role: string;
  image: string;
}

// NOTE: photos are placeholders (only 3 stock images available, reused).
// Replace `image` with the real portraits when provided.
const team: Member[] = [
  { name: 'Ange Akonde', role: 'CEO & Stratégie', image: team1 },
  { name: 'Elton Hounnou', role: 'Lead Tech', image: team2 },
  { name: 'Ahouansè Léa', role: 'Design UI/UX', image: team3 },
  { name: 'Sylvason', role: 'Développement Full-Stack', image: team1 },
  { name: 'Alakè Ama', role: 'Gestion de projet', image: team2 },
  { name: 'Honorat Dariel', role: 'Développement Mobile', image: team3 }
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
      transform: `translate(-50%, -50%) translateX(${clamped * 52}%) translateZ(${-abs * 200}px) rotateY(${-clamped * 36}deg) scale(${1 - abs * 0.12})`,
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
            viewport={{ once: false, amount: 0.2 }}
            className="text-4xl md:text-5xl heading-wavy uppercase tracking-tight mb-6"
          >
            Les <span className="text-primary">Esprits</span> Derrière
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Une équipe restreinte d'artisans du digital. Pas de chefs de projet intermédiaires : vous collaborez directement avec les personnes qui réalisent le travail.
          </motion.p>
        </div>

        {/* 3D coverflow carousel */}
        <div
          className="relative h-[500px] sm:h-[540px] [perspective:1500px]"
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
                  className="absolute top-1/2 left-1/2 w-[300px] sm:w-[360px] cursor-pointer transition-all duration-500 ease-out"
                  aria-hidden={!isActive}
                >
                  <div
                    className={`relative rounded-[1.75rem] overflow-hidden h-[440px] sm:h-[480px] border border-white/15 bg-muted ${
                      isActive
                        ? 'shadow-[0_30px_80px_rgba(75,61,133,0.6)] ring-1 ring-primary/40'
                        : 'shadow-[0_18px_45px_rgba(20,10,50,0.5)]'
                    }`}
                  >
                    {/* Fallback initials behind the photo */}
                    <div className="absolute inset-0 -z-0 flex items-center justify-center bg-gradient-to-br from-[#2a2350] to-[#120f2b] text-white/50 font-hero font-semibold text-5xl">
                      {initials(member.name)}
                    </div>

                    {/* Big photo */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        isActive ? 'grayscale-0' : 'grayscale'
                      }`}
                      onError={(e) => {
                        e.currentTarget.style.opacity = '0';
                      }}
                    />

                    {/* Bottom scrim + info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                      <span className="inline-block mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-primary/25 text-white backdrop-blur-md border border-white/15">
                        {member.role}
                      </span>
                      <h3 className="text-2xl sm:text-3xl heading-wavy text-white leading-tight">
                        {member.name}
                      </h3>
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
