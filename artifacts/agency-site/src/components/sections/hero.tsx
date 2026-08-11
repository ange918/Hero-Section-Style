import { useLayoutEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Minus, Plus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import founder from '@/assets/founder.png';

gsap.registerPlugin(ScrollTrigger);

const expertise = ['Web', 'Mobile', 'UI/UX', 'Audit', 'Automatisation'];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.gsap-bg-text', { scale: 0.9, opacity: 0, duration: 1.4, ease: 'power2.out' })
        .from('.gsap-main-img', { yPercent: 12, opacity: 0, duration: 1.4 }, '-=1.1')
        .from('.gsap-hero', { x: -30, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=1');

      // Continuous organic floating (portrait + widget)
      gsap.to('.float-anim', {
        y: '-=10',
        rotation: 0.6,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to('.float-anim-slow', {
        y: '-=16',
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Scroll parallax
      gsap.to('.gsap-bg-text', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 1 }
      });
      gsap.to('.gsap-main-img', {
        yPercent: 10,
        scale: 0.96,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#8b7ec0] pt-20"
    >
      {/* Lavender gradient base */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#a89bd9] via-[#8f81c4] to-[#6f5fa8]" />
      <div className="absolute -top-[10%] -left-[10%] w-[45vw] h-[45vw] bg-white rounded-full blur-[140px] opacity-30 z-0 pointer-events-none" />

      {/* Giant ghost brand text */}
      <div
        className="gsap-bg-text pointer-events-none absolute bottom-[14vh] left-1/2 -translate-x-1/2 z-[1] whitespace-nowrap font-hero font-semibold leading-[0.8] text-[26vw] tracking-tighter select-none bg-gradient-to-b from-white/45 to-white/0 bg-clip-text text-transparent"
      >
        JRC DIGIT
      </div>

      {/* Floating central portrait (desktop centerpiece) */}
      <div className="gsap-main-img pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-[5] hidden lg:block lg:h-[72vh] w-auto max-w-[46vw]">
        <div className="float-anim-slow h-full w-full">
          <img
            src={founder}
            alt=""
            aria-hidden="true"
            className="h-full w-auto mx-auto rounded-t-[2.5rem] object-cover object-top border border-white/10 drop-shadow-[0_30px_60px_rgba(25,12,50,0.55)]"
          />
          {/* legibility scrim behind the left/right copy */}
          <div className="absolute inset-0 rounded-t-[2.5rem] bg-gradient-to-r from-[#6f5fa8]/50 via-transparent to-[#6f5fa8]/40" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left column */}
          <div className="max-w-xl">
            <span className="gsap-hero label block text-xs font-semibold uppercase tracking-[0.25em] text-white/80 mb-6">
              | Agence digitale
            </span>
            <h1 className="gsap-hero text-[clamp(2rem,6vw,4.5rem)] font-hero font-semibold text-white uppercase leading-[1.02] tracking-tight mb-6 break-words">
              Nous construisons <br className="hidden sm:block" />
              <span className="text-white/60">l'inoubliable</span>
            </h1>

            <div className="gsap-hero flex items-center gap-3 text-sm font-medium text-white/85 mb-10">
              <span className="tracking-[0.15em] text-[#f5d98b]">★★★★★</span>
              +40 clients accompagnés
            </div>

            <div className="gsap-hero flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                size="lg"
                className="rounded-full h-14 px-8 text-base bg-white text-[#5b4b96] hover:bg-white/90 hover:scale-105 transition-transform duration-300 font-semibold"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Démarrer un projet
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="glass"
                size="lg"
                className="rounded-full h-14 px-8 text-base text-white border-white/40 bg-transparent hover:bg-white/10 hover:scale-105 transition-transform duration-300"
                onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Voir nos réalisations
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col items-start lg:items-end gap-8 lg:gap-14">
            {/* Glass "clay" widget */}
            <div className="gsap-hero float-anim w-[320px] max-w-full flex items-center gap-5 rounded-3xl border border-white/25 bg-white/10 p-4 backdrop-blur-xl shadow-[0_8px_32px_rgba(20,10,40,0.25)]">
              <div className="w-[88px] h-[88px] shrink-0 rounded-2xl bg-[#1a1430] flex items-center justify-center shadow-lg">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                  <div className="w-3.5 h-3.5 bg-[#1a1430] rounded-sm rotate-45" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between h-[88px] py-1">
                <div className="flex items-start justify-between">
                  <span className="text-[15px] font-semibold leading-tight text-white">
                    Le sur-mesure,
                    <br />
                    par principe.
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full border border-white/60 mt-1" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="relative h-[3px] w-12 rounded bg-white/20">
                    <div className="absolute inset-y-0 left-0 w-1/2 rounded bg-white" />
                  </div>
                  <div className="flex gap-1.5">
                    <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-white">
                      <Minus className="w-3 h-3" />
                    </span>
                    <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-white">
                      <Plus className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise chips */}
            <div className="gsap-hero text-left lg:text-right max-w-xs">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">
                Nos expertises
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 lg:justify-end text-sm font-medium text-white/80">
                {expertise.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero footer bar */}
      <div className="absolute bottom-0 left-0 right-0 z-[15] h-16 flex items-center justify-between px-4 md:px-8 text-xs font-medium text-white/70 bg-gradient-to-t from-[#4b3d85]/80 to-transparent">
        <span className="hidden sm:inline">• Développement Web &amp; Mobile</span>
        <span>• Design &amp; UX</span>
        <span>• Défiler ↓</span>
      </div>
    </section>
  );
}
