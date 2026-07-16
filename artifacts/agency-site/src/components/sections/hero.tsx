import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#8b7ec0] pt-20">
      {/* Soft pastel lavender/purple blurred blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#a89bd9] via-[#8f81c4] to-[#6f5fa8]" />
        <div className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] bg-[#4b3d85] rounded-full blur-[110px] opacity-60" />
        <div className="absolute top-[10%] right-[5%] w-[60vw] h-[60vw] bg-white rounded-full blur-[140px] opacity-40" />
        <div className="absolute bottom-[-15%] left-[20%] w-[50vw] h-[50vw] bg-[#e9e4ff] rounded-full blur-[130px] opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        {/* Tracked-out label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-md">
            Creative Agency
          </span>
        </motion.div>

        {/* Rounded wavy display headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(1.75rem,8vw,7rem)] font-hero font-semibold text-white uppercase leading-[1.05] tracking-tight mb-8 max-w-full md:max-w-[1200px] break-words"
        >
          Designing the <br className="hidden md:block" />
          Unforgettable
        </motion.h1>

        {/* Centered subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
        >
          We are a fiercely modern creative agency building premium digital experiences for brands that refuse to blend in.
        </motion.p>

        {/* Two pill-shaped buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="rounded-full h-14 px-8 text-base bg-white text-[#5b4b96] hover:bg-white/90 hover:scale-105 transition-transform duration-300 font-semibold"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="glass" 
            size="lg" 
            className="rounded-full h-14 px-8 text-base text-white border-white/40 bg-transparent hover:bg-white/10 hover:scale-105 transition-transform duration-300"
            onClick={() => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Work
          </Button>
        </motion.div>
      </div>

      {/* Decorative gradient floor fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#6f5fa8] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
