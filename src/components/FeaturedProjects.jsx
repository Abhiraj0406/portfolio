import { motion } from 'framer-motion';

const PROJECT_GROUPS = [
  {
    section: 'Enterprise Systems (Encardio-Rite Pvt. Ltd.)',
    projects: [
      {
        name: 'Sensor Data Calibration & Management System',
        bullets: [
          'Contributed to backend API development for an internal enterprise sensor calibration workflow system.',
          'Worked on specific backend modules using Laravel; supported migration of selected parts to FastAPI.',
          'Worked within a team using PostgreSQL, Docker containers, and Keycloak-based authentication.',
        ],
        stack: ['Laravel', 'PHP', 'FastAPI', 'Python', 'PostgreSQL', 'Docker'],
        repo: null,
        live: null,
      },
      {
        name: 'Internal Financial Dashboard System',
        bullets: [
          'Supported FastAPI-based REST API development with filtering, pagination, and structured data handling.',
          'Contributed to backend testing and helped with frontend integration support using React.',
          'Assisted in maintaining internal API documentation for team use.',
        ],
        stack: ['FastAPI', 'Python', 'PostgreSQL', 'React', 'Docker'],
        repo: null,
        live: null,
      },
    ],
  },
  {
    section: 'Assignment / Independent Project',
    projects: [
      {
        name: 'ExploreHub — Web Data Discovery Platform',
        bullets: [
          'Company assignment to explore NestJS and Next.js by building a web data scraping platform.',
          'Accelerated backend prototyping and full-stack integration by leveraging Agentic AI tools (Cursor AI) within standard IDEs.',
          'Implemented backend scraping workflows and connected them to a Next.js frontend.',
          'Deployed backend on Railway using Docker and frontend on Vercel.',
        ],
        stack: ['Next.js', 'NestJS', 'Docker', 'PostgreSQL', 'Railway', 'Vercel'],
        repo: 'https://github.com/Abhiraj0406/ExploreHub',
        live: 'https://explore-hub-neon.vercel.app/',
      },
    ],
  },
  {
    section: 'Personal Project (In Progress)',
    projects: [
      {
        name: 'Inventory & Invoice Management System',
        inProgress: true,
        bullets: [
          'Building a personal project to deepen Laravel knowledge and grow toward full stack development.',
          'Backend: Laravel REST APIs, MySQL, Role-Based Access Control (RBAC), Sanctum authentication.',
          'Planning a React frontend — working toward end-to-end full stack ownership of this project.',
        ],
        stack: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'React (planned)'],
        repo: null,
        live: null,
      },
    ],
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
          Enterprise systems and independent engineering work
        </motion.p>

        <div className="space-y-12">
          {PROJECT_GROUPS.map((group) => (
            <div key={group.section}>
              <h3 className="mb-6 text-sm font-medium text-slate-400 uppercase tracking-widest">
                {group.section}
              </h3>

              <div className="grid gap-6 lg:grid-cols-2">
                {group.projects.map((project, i) => (
                  <motion.article
                    key={project.name}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`flex flex-col rounded-xl border p-6 shadow-sm transition ${project.inProgress
                      ? 'border-teal-500/30 bg-teal-500/5 shadow-teal-500/10 hover:border-teal-400/50'
                      : 'border-slate-800 bg-slate-800/20 shadow-slate-950/40 hover:border-teal-500/40 hover:shadow-teal-500/20'
                      }`}
                  >
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <h4 className="text-lg font-semibold text-slate-100">
                        {project.name}
                      </h4>
                      {project.inProgress && (
                        <span className="shrink-0 rounded-full border border-teal-500/40 bg-teal-500/10 px-2.5 py-0.5 text-xs text-teal-400">
                          In Progress
                        </span>
                      )}
                    </div>

                    <ul className="flex-1 space-y-1.5 text-sm leading-relaxed text-slate-400">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
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
                      <a
                        href={project.live || '#'}
                        target={project.live ? '_blank' : undefined}
                        rel={project.live ? 'noopener noreferrer' : undefined}
                        aria-disabled={!project.live}
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition ${project.live
                          ? 'border-teal-500/60 bg-teal-500/10 text-teal-300 hover:border-teal-400 hover:bg-teal-500/20 hover:text-teal-100'
                          : 'cursor-not-allowed border-slate-700 bg-slate-800/40 text-slate-500'
                          }`}
                      >
                        Live Demo
                        {!project.live && (
                          <span className="text-[10px]">
                            {project.inProgress ? '(building)' : '(internal)'}
                          </span>
                        )}
                      </a>

                      <a
                        href={project.repo || '#'}
                        target={project.repo ? '_blank' : undefined}
                        rel={project.repo ? 'noopener noreferrer' : undefined}
                        aria-disabled={!project.repo}
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition ${project.repo
                          ? 'border-slate-600 bg-slate-900/70 text-slate-200 hover:border-teal-500 hover:text-teal-300'
                          : 'cursor-not-allowed border-slate-700 bg-slate-800/40 text-slate-500'
                          }`}
                      >
                        GitHub
                        {!project.repo && (
                          <span className="text-[10px]">
                            {project.inProgress ? '(soon)' : '(internal)'}
                          </span>
                        )}
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}