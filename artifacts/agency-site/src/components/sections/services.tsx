import { motion } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Brand Identity',
    description: 'We craft iconic brand systems that demand attention and command authority. From logo marks to comprehensive visual languages.',
    tags: ['Logo Design', 'Visual Strategy', 'Typography', 'Brand Guidelines']
  },
  {
    number: '02',
    title: 'Digital Products',
    description: 'Sleek, high-performance web and mobile applications designed with obsessive attention to user experience and interface craft.',
    tags: ['UI/UX Design', 'Web Apps', 'Mobile Apps', 'Design Systems']
  },
  {
    number: '03',
    title: 'Creative Web',
    description: 'Immersive promotional sites and landing pages that use motion, 3D, and scroll storytelling to captivate audiences.',
    tags: ['Framer', 'Three.js', 'Webflow', 'Creative Development']
  },
  {
    number: '04',
    title: 'Social & Content',
    description: 'Fierce, fast-moving social campaigns and digital content that cuts through the noise and builds cult followings.',
    tags: ['Campaign Strategy', 'Motion Graphics', 'Art Direction', 'Copywriting']
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-20">
          <div className="flex-1 md:max-w-md">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl heading-wavy uppercase tracking-tight mb-6"
            >
              Our <span className="text-primary">Capabilities</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              We don't do full-service mediocrity. We do specific things with extraordinary precision and style.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {services.map((service, i) => (
            <motion.div 
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex gap-6"
            >
              <div className="text-sm font-bold text-primary/50 pt-2 shrink-0">{service.number}</div>
              <div>
                <h3 className="text-2xl heading-wavy tracking-tight mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-primary/20 bg-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
