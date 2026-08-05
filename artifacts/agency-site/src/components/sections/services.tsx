import { motion } from 'framer-motion';
import founder from '@/assets/founder.png';

const services = [
  {
    number: '01',
    title: 'Développement Web & Mobile',
    description: 'Applications SaaS, plateformes métier et outils de gestion internes, portés par des architectures modernes, rapides et ultra-sécurisées. Une conduite de projet axée sur la fluidité et l\'accessibilité mobile.',
    tags: ['Applications SaaS', 'Plateformes métier', 'Outils internes', 'Mobile-first']
  },
  {
    number: '02',
    title: 'UI/UX Design & Expérience',
    description: 'Des interfaces élégantes, intuitives et centrées sur l\'utilisateur. Maquettage, prototypage et identité visuelle forte, avec une optimisation des parcours pour maximiser la conversion et l\'engagement.',
    tags: ['UI/UX Design', 'Maquettage', 'Prototypage', 'Identité visuelle']
  },
  {
    number: '03',
    title: 'Audit, Conseil & Digitalisation',
    description: 'Analyse de vos processus actuels pour identifier les goulots d\'étranglement, puis automatisation et création d\'outils spécifiques pour faire gagner du temps et de la fiabilité à vos équipes.',
    tags: ['Audit de processus', 'Conseil', 'Automatisation', 'Digitalisation']
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-32 relative overflow-hidden">
      {/* Portrait background with darkening overlay for legibility */}
      <div className="absolute inset-0 z-0">
        <img
          src={founder}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center md:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/55" />
        <div className="absolute inset-0 bg-black/40 md:bg-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 mb-12 md:mb-20">
          <div className="flex-1 md:max-w-md">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl heading-wavy uppercase tracking-tight mb-6 text-white"
            >
              Nos <span className="text-primary">Pôles d'Expertise</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 text-lg"
            >
              Nous vous accompagnons sur l'ensemble du cycle de vie de vos projets numériques, avec une seule exigence : la précision.
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
              <div className="text-sm font-bold text-primary pt-2 shrink-0">{service.number}</div>
              <div>
                <h3 className="text-2xl heading-wavy tracking-tight mb-4 text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white/90"
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
