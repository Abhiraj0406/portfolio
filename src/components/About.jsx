import { motion } from 'framer-motion';

const SUMMARY = [
  'Backend Developer with 1 year of experience building production-ready REST APIs and internal tools using Python (FastAPI) and PostgreSQL.',
  'Strong in backend architecture, database design, authentication, and Docker-based development. Worked on sensor calibration software and internal financial dashboards at Encardio-Rite, developing REST APIs and backend logic that improved workflow accuracy by ~50%.',
  'Experienced with Docker-based development setups and authentication using Keycloak (RBAC). Solid understanding of system workflows, documentation, and problem-solving. NATS Software Apprentice and actively seeking opportunities as a backend developer with exposure to full-stack development.',
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
          Backend-focused, detail-oriented
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-5 text-slate-300"
        >
          {SUMMARY.map((para, i) => (
            <p key={i} className="leading-relaxed">
              {para}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
