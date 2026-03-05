import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'PHP'],
  },
  {
    title: 'Backend',
    skills: ['FastAPI', 'NestJS', 'REST APIs', 'Node.js'],
  },
  {
    title: 'Web Scraping',
    skills: ['Web Data Extraction', 'Data Parsing', 'API Data Collection'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Tools',
    skills: ['Docker', 'Git', 'Postman', 'VS Code'],
  },
];

export default function BackendSkills() {
  return (
    <section id="backend-skills" className="border-t border-slate-800 px-6 py-20 sm:py-24" aria-labelledby="backend-skills-heading">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          id="backend-skills-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          Backend Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-12 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Core expertise
        </motion.p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, gIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: gIdx * 0.06 }}
              className="rounded-xl border border-slate-800 bg-slate-800/20 p-5 transition hover:border-teal-500/30"
            >
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-400">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2" role="list">
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block rounded-lg bg-slate-700/60 px-3 py-1.5 text-sm text-slate-200 transition hover:bg-teal-500/20 hover:text-teal-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
