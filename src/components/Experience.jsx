import { motion } from 'framer-motion';

const JOBS = [
  {
    title: 'Software Apprentice — Backend Developer',
    company: 'Encardio-Rite Pvt. Ltd.',
    period: 'Jan 2025 – Jan 2026',
    tag: 'NATS Apprenticeship',
    highlights: [
      'Contributed to backend API development for an internal Sensor Calibration & Management system built with Laravel.',
      'Supported the migration of selected backend modules from Laravel to FastAPI as per evolving project requirements.',
      'Built and tested REST APIs with PostgreSQL database; worked within a Docker-based development environment.',
      'Used Keycloak-based authentication system and Azure DevOps for task tracking and team collaboration.',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Zidio Development',
    period: 'Aug 2024 – Oct 2024',
    tag: 'Internship',
    highlights: [
      'Worked on a full-stack web application as part of a MERN stack team.',
      'Developed and integrated REST APIs with frontend components.',
      'Contributed to bug fixes and performance improvements across the application.',
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
          Professional journey
        </motion.p>

        <div className="space-y-10 border-l border-slate-800 pl-4 sm:pl-6">
          {JOBS.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-xl border border-slate-800 bg-slate-800/20 p-5 sm:p-7"
            >
              <span className="absolute -left-2 top-6 h-3 w-3 rounded-full bg-teal-500" />

              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-slate-100 sm:text-lg">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{job.company}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="text-sm text-teal-400">{job.period}</span>
                  <span className="rounded-full border border-slate-700 bg-slate-800/60 px-2 py-0.5 text-xs text-slate-500">
                    {job.tag}
                  </span>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
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
