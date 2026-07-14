import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import work1 from '@/assets/work-1.jpg';
import work2 from '@/assets/work-2.jpg';
import work3 from '@/assets/work-3.jpg';
import work4 from '@/assets/work-4.jpg';
import work5 from '@/assets/work-5.jpg';
import work6 from '@/assets/work-6.jpg';

const projects = [
  {
    id: 1,
    title: 'Nexus Fintech',
    category: 'UI/UX',
    image: work1,
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    id: 2,
    title: 'Aura Fashion',
    category: 'Branding',
    image: work2,
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 3,
    title: 'Volt Energy',
    category: 'Social Media',
    image: work3,
    color: 'from-yellow-500/20 to-red-500/20'
  },
  {
    id: 4,
    title: 'Essence Store',
    category: 'Digital',
    image: work4,
    color: 'from-green-500/20 to-teal-500/20'
  },
  {
    id: 5,
    title: 'Synthetix',
    category: 'Branding',
    image: work5,
    color: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    id: 6,
    title: 'Pulse App',
    category: 'UI/UX',
    image: work6,
    color: 'from-emerald-500/20 to-cyan-500/20'
  }
];

const categories = ['All', 'Branding', 'Digital', 'UI/UX', 'Social Media'];

export function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="work" className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl heading-wavy uppercase tracking-tight mb-4"
            >
              Selected <span className="text-primary">Work</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg max-w-lg"
            >
              A curated selection of our finest digital craft.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer isolate"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${project.color} mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Fallback color block in case image isn't generated yet */}
                <div className="absolute inset-0 bg-muted flex items-center justify-center -z-10">
                  <span className="text-muted-foreground font-medium uppercase tracking-widest">{project.title}</span>
                </div>
                
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Hide broken image so fallback shows
                    e.currentTarget.style.opacity = '0';
                  }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md rounded-full text-white">
                    {project.category}
                  </span>
                  <h3 className="text-3xl heading-wavy text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
