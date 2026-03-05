import { motion } from 'framer-motion';

const JOBS = [
  {
    title: 'Software Apprentice – Full Stack Developer',
    company: 'Encardio-Rite Pvt Ltd',
    period: 'Jan 2025 – Jan 2026',
    highlights: [
      'Worked as a full stack developer on internal engineering systems.',
      'Contributed to a sensor calibration system built with Python FastAPI, PostgreSQL, React, and Keycloak.',
      'Implemented and maintained backend APIs for the Financial Dashboard platform using Python FastAPI, PostgreSQL, React, and Keycloak.',
      'Collaborated on the Nexawave platform, focusing on backend services and data flows built with Laravel and React.',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Zidio Development',
    period: 'Aug 2024 – Oct 2024',
    highlights: [
      'Worked on full stack web applications using modern web technologies.',
      'Developed backend API endpoints and integrated them with frontend features.',
      'Debugged frontend and backend issues across the stack.',
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
          Professional timeline
        </motion.p>
        <div className="space-y-10 border-l border-slate-800 pl-4 sm:space-y-12 sm:pl-6">
          {JOBS.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative rounded-xl border border-slate-800 bg-slate-800/20 p-5 sm:p-7"
            >
              <span className="absolute -left-2 top-6 h-3 w-3 rounded-full border border-slate-900 bg-teal-500" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-100 sm:text-lg">{job.title}</h3>
                <span className="text-xs text-teal-400 sm:text-sm">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-slate-400 sm:text-base">{job.company}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
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
