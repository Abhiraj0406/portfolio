import { motion } from 'framer-motion';

const CERTS = [
  {
    name: 'NATS Software Apprentice',
    issuer: 'Encardio-Rite Pvt. Ltd.',
    desc: 'National Apprenticeship Training Scheme — Software Apprentice in the Edge of Technology (EOT) department.',
  },
  {
    name: 'Web Development Internship',
    issuer: 'Zidio Development',
    desc: 'Full-stack internship certificate for frontend-backend integration and feature development.',
  },
  {
    name: 'Web Development & Job Preparation',
    issuer: 'Internshala',
    desc: 'Certified training program in web development and career readiness.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-slate-800 px-6 py-20 sm:py-24">
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
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-slate-800 bg-slate-800/20 p-5 transition hover:border-teal-500/30"
            >
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
