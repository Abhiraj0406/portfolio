import { motion } from 'framer-motion';

const PROJECTS = [
  {
    name: 'ExploreHub – Web Data Exploration Platform',
    stack: ['Next.js', 'NestJS', 'Web Scraping', 'REST APIs', 'PostgreSQL'],
    bullets: [
      'Built a full-stack platform for discovering and exploring structured web data.',
      'Implemented backend services using NestJS to handle API requests and data processing.',
      'Developed scraping workflows to extract structured information from web sources.',
      'Integrated Next.js frontend with backend APIs to present dynamic data to users.',
      'Designed scalable API endpoints and database structure for efficient data retrieval.',
    ],
    repo: 'https://github.com/Abhiraj0406/ExploreHub',
    live: 'https://explore-hub-neon.vercel.app/',
  },
  {
    name: 'Sensor Calibration Software',
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
    bullets: [
      'Internal tool for Encardio-Rite: automated calibration workflows.',
      '~50% improvement in sensor data accuracy via consistent calculation logic.',
      'Backend handles calibration logic, validation, and optimized queries.',
    ],
    repo: null,
    live: null,
  },
  {
    name: 'Financial Dashboard',
    stack: ['FastAPI', 'PostgreSQL', 'REST API'],
    bullets: [
      'Backend APIs with pagination and structured financial reporting.',
      'Filtered views and export-friendly responses for finance teams.',
    ],
    repo: null,
    live: null,
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-slate-800 px-6 py-20 sm:py-24" aria-labelledby="projects-heading">
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
          Selected work
        </motion.p>
        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col rounded-xl border border-slate-800 bg-slate-800/20 p-6 transition hover:border-teal-500/30"
            >
              <h3 className="text-lg font-semibold text-slate-100">{project.name}</h3>
              <ul className="mt-3 flex-1 space-y-1.5 text-sm text-slate-400">
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
                    className="rounded bg-slate-700/80 px-2 py-0.5 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.repo || project.live) && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-teal-400 hover:text-teal-300"
                    >
                      View Live Project →
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-teal-400 hover:text-teal-300"
                    >
                      View Source Code →
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
