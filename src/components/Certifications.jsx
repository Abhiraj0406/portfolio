import { motion } from 'framer-motion';

const CERTS = [
  {
    icon: '🏆',
    name: 'NATS Software Apprentice',
    issuer: 'Encardio-Rite Pvt. Ltd.',
    desc: 'National Apprenticeship Training Scheme — Software Apprentice in the Edge of Technology (EOT) department.',
  },
  {
    icon: '💼',
    name: 'Web Development Internship',
    issuer: 'Zidio Development',
    desc: 'Full-stack internship certificate for frontend-backend integration and feature development.',
  },
  {
    icon: '📜',
    name: 'Web Development & Job Preparation',
    issuer: 'Internshala',
    desc: 'Certified training program in web development and career readiness.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-slate-800/60 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          Certifications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-12 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Training & achievements
        </motion.p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((cert, i) => (
            <motion.article
              key={cert.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-slate-700/50 glass-card p-5 transition-all duration-300 hover:border-teal-500/40 hover:shadow-[0_8px_32px_rgba(20,184,166,0.1)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-teal-500/20 bg-teal-500/8 text-xl">
                {cert.icon}
              </div>
              <h3 className="font-semibold text-slate-100">{cert.name}</h3>
              <p className="mt-1 text-sm text-teal-400">{cert.issuer}</p>
              <p className="mt-2 text-sm text-slate-400">{cert.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
