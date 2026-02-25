import { motion } from 'framer-motion';

const PROJECTS = [
  {
    name: 'Sensor Calibration Software',
    description: 'Internal tool built with FastAPI and PostgreSQL for Encardio-Rite. Automated and standardized calculation workflows for sensor calibration, resulting in ~50% improvement in sensor data accuracy. Backend handles calibration logic, data validation, and persistence with optimized queries and clear API design.',
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
    repo: null,
    live: null,
  },
  {
    name: 'Financial Dashboard',
    description: 'Backend APIs for an internal Financial Dashboard with pagination and structured financial reporting. Enables consistent data handling, filtered views, and export-friendly responses for finance and operations teams.',
    stack: ['FastAPI', 'PostgreSQL', 'REST API'],
    repo: null,
    live: null,
  },
  {
    name: 'ExploreHub',
    description: 'Full-stack application with FastAPI backend, React frontend, and PostgreSQL database. Demonstrates API-driven architecture, auth flows, and modern deployment. Deployed on Vercel (frontend) and Railway (backend).',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'Vercel', 'Railway'],
    repo: 'https://github.com/Abhiraj0406/ExploreHub',
    live: 'https://explore-hub-neon.vercel.app/',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-slate-800 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
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
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
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
                <div className="mt-4 flex gap-4">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-teal-400 hover:text-teal-300"
                    >
                      Repo →
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-teal-400 hover:text-teal-300"
                    >
                      Live site →
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
