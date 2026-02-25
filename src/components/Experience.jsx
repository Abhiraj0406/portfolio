import { motion } from 'framer-motion';

const JOBS = [
  {
    title: 'Software Apprentice (Backend Developer)',
    company: 'Encardio-Rite Pvt. Ltd., Lucknow',
    department: 'Edge of Technology (EOT Dept)',
    period: 'Jan 2025 – Jan 2026',
    highlights: [
      'Developed and maintained FastAPI-based REST APIs for internal tooling and data services.',
      'Designed PostgreSQL schemas and optimized queries for performance and reliability.',
      'Implemented authentication using Keycloak and containerized services with Docker for consistent development and deployment.',
      'Developed backend for an internal Sensor Calibration Software using Python and FastAPI; the calibration software enabled ~50% improvement in sensor data accuracy through automated and consistent calculation workflows.',
      'Built backend APIs for an internal Financial Dashboard, including pagination, data handling, and structured financial reporting.',
      'Contributed to backend logic for calibration and financial systems across the product suite.',
      'Supported database design, backend testing, and technical documentation.',
    ],
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'Zidio Development (Remote)',
    department: null,
    period: 'Aug 2024 – Oct 2024',
    highlights: [
      'Supported frontend-backend integration and feature debugging using React and REST APIs.',
      'Worked on basic feature development, debugging, and testing tasks in real project workflows.',
      'Gained hands-on exposure to how frontend, backend, and database layers integrate in production applications.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-slate-800 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-12 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Where I've worked
        </motion.p>
        <div className="space-y-12">
          {JOBS.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-slate-800 bg-slate-800/20 p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-100">{job.title}</h3>
                <span className="text-sm text-teal-400">{job.period}</span>
              </div>
              <p className="mt-1 text-slate-400">{job.company}</p>
              {job.department && (
                <p className="mt-0.5 text-sm text-slate-500">{job.department}</p>
              )}
              <ul className="mt-5 space-y-2">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
