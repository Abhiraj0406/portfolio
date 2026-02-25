import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="border-t border-slate-800 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-12 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Academic background
        </motion.p>
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="rounded-xl border border-slate-800 bg-slate-800/20 p-6 sm:p-8"
        >
          <h3 className="text-lg font-semibold text-slate-100">
            B.Tech in Computer Science & Engineering
          </h3>
          <p className="mt-1 text-slate-400">
            Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <span className="text-teal-400">Graduated: July 2024</span>
            <span className="text-slate-500">CGPA: 7.66 / 10</span>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
