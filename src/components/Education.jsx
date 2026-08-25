import { motion } from 'framer-motion';

const COURSEWORK = [
  'Data Structures & Algorithms',
  'Database Management Systems (DBMS)',
  'Object-Oriented Programming (OOP)',
  'Computer Networks',
  'Operating Systems',
];

export default function Education() {
  return (
    <section id="education" className="border-t border-slate-800/60 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          Education & Academic Background
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-3 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Engineering Foundation
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mb-12 text-sm text-slate-500"
        >
          Formal Bachelor of Technology education covering foundational computer science, software architecture, and core computing principles.
        </motion.p>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-slate-700/50 glass-card p-6 sm:p-8 transition-all duration-300 hover:border-teal-500/40 hover:shadow-[0_8px_32px_rgba(20,184,166,0.12)]"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              {/* Engineering Emblem Icon */}
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-500/40 bg-teal-500/10 text-teal-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>

              <div>
                <span className="rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-0.5 text-xs font-semibold text-teal-300">
                  Bachelor of Technology (B.Tech)
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-100 sm:text-2xl">
                  Computer Science & Engineering
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  Dr. A.P.J. Abdul Kalam Technical University (AKTU)
                </p>
                <p className="text-xs text-slate-500">
                  Lucknow, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Performance Stats Pill Box */}
            <div className="flex flex-row flex-wrap gap-2.5 sm:flex-col sm:items-end">
              <div className="rounded-lg border border-slate-700/80 bg-slate-800/80 px-3.5 py-1.5 text-center sm:text-right">
                <span className="block text-[11px] uppercase tracking-wider text-slate-400">Duration</span>
                <span className="font-semibold text-slate-200 text-sm">2020 – 2024</span>
              </div>
              <div className="rounded-lg border border-teal-500/40 bg-teal-500/10 px-3.5 py-1.5 text-center sm:text-right">
                <span className="block text-[11px] uppercase tracking-wider text-teal-400">Academic Score</span>
                <span className="font-bold text-teal-300 text-sm">CGPA: 7.66 / 10</span>
              </div>
            </div>
          </div>

          {/* Key Coursework Section */}
          <div className="mt-6 border-t border-slate-800/80 pt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Core Academic Coursework & Concepts
            </h4>
            <div className="flex flex-wrap gap-2">
              {COURSEWORK.map((course) => (
                <span
                  key={course}
                  className="rounded-md border border-slate-700/60 bg-slate-800/50 px-2.5 py-1 text-xs text-slate-300 transition-colors hover:border-teal-500/40 hover:text-teal-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
