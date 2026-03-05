import { motion } from 'framer-motion';

const PROJECTS = [
  {
    name: 'ExploreHub – Web Data Discovery Platform',
    bullets: [
      'Full-stack platform that discovers and presents structured web data.',
      'Built backend APIs with NestJS and integrated them with a Next.js frontend.',
      'Implemented web scraping workflows to collect and normalise data from multiple sources.',
    ],
    stack: ['Next.js', 'NestJS', 'Web Scraping'],
    repo: 'https://github.com/Abhiraj0406/ExploreHub',
    live: 'https://explore-hub-neon.vercel.app/',
  },
  {
    name: 'Sensor Calibration System',
    bullets: [
      'Internal engineering system for sensor calibration used in production workflows.',
      'Developed Python FastAPI backend with PostgreSQL for storing and processing calibration datasets.',
      'Built React-based UI and integrated Keycloak for authentication and role-based access.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Keycloak'],
    repo: null,
    live: null,
  },
  {
    name: 'Financial Dashboard',
    bullets: [
      'APIs and frontend for exploring internal financial metrics and reports.',
      'Implemented FastAPI endpoints backed by PostgreSQL with pagination and filters.',
      'Connected React UI components to backend APIs for structured data views.',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React'],
    repo: null,
    live: null,
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="border-t border-slate-800 px-6 py-20 sm:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          id="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-12 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Full stack & backend work
        </motion.p>
        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col rounded-xl border border-slate-800 bg-slate-800/20 p-6 shadow-sm shadow-slate-950/40 transition hover:border-teal-500/40 hover:shadow-teal-500/20"
            >
              <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
              <ul className="mt-3 flex-1 space-y-1.5 text-sm leading-relaxed text-slate-400">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-700/80 px-3 py-1 text-xs text-slate-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {/* Live demo button */}
                <a
                  href={project.live || '#'}
                  target={project.live ? '_blank' : undefined}
                  rel={project.live ? 'noopener noreferrer' : undefined}
                  aria-disabled={!project.live}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition ${
                    project.live
                      ? 'border-teal-500/60 bg-teal-500/10 text-teal-300 hover:border-teal-400 hover:bg-teal-500/20 hover:text-teal-100'
                      : 'cursor-not-allowed border-slate-700 bg-slate-800/40 text-slate-500'
                  }`}
                >
                  Live Demo
                  {!project.live && <span className="text-[10px]">(internal)</span>}
                </a>
                {/* GitHub button */}
                <a
                  href={project.repo || '#'}
                  target={project.repo ? '_blank' : undefined}
                  rel={project.repo ? 'noopener noreferrer' : undefined}
                  aria-disabled={!project.repo}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition ${
                    project.repo
                      ? 'border-slate-600 bg-slate-900/70 text-slate-200 hover:border-teal-500 hover:text-teal-300'
                      : 'cursor-not-allowed border-slate-700 bg-slate-800/40 text-slate-500'
                  }`}
                >
                  GitHub
                  {!project.repo && <span className="text-[10px]">(internal)</span>}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
