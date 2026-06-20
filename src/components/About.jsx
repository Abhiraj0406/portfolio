import { motion } from 'framer-motion';

const SUMMARY = [
  'Backend Developer with hands-on experience in PHP (Laravel), Python (FastAPI), REST API development, MySQL, PostgreSQL, and Docker.',
  'Worked on internal engineering and financial applications at Encardio-Rite, contributing to backend logic, database design, authentication, and API integration.',
  'Comfortable working with Keycloak-based access control, documentation, testing, and migration of applications from Laravel to FastAPI.',
];

export default function About() {
  return (
    <section id="about" className="border-t border-slate-800 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-10 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Backend-focused, adaptable, and practical
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-5 text-slate-300"
        >
          {SUMMARY.map((para) => (
            <p key={para} className="leading-relaxed">
              {para}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}