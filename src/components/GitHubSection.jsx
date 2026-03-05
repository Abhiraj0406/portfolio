import { motion } from 'framer-motion';

const HIGHLIGHTED_REPOS = [
  {
    name: 'ExploreHub',
    description: 'Web data exploration platform using NestJS, Next.js, and scraping workflows.',
    link: 'https://github.com/Abhiraj0406/ExploreHub',
  },
  {
    name: 'Portfolio',
    description: 'This backend-focused portfolio built with React, Vite, Tailwind CSS, and Framer Motion.',
    link: 'https://github.com/Abhiraj0406/portfolio',
  },
];

export default function GitHubSection() {
  return (
    <section
      id="github"
      className="border-t border-slate-800 px-6 py-20 sm:py-24"
      aria-labelledby="github-heading"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          id="github-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          GitHub Activity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-10 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Building in public
        </motion.p>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5"
          >
            <p className="mb-3 text-sm font-medium text-slate-300">Contribution graph</p>
            <div className="overflow-hidden rounded-md border border-slate-800 bg-slate-950/60">
              <img
                src="https://ghchart.rshah.org/2dd4bf/Abhiraj0406"
                alt="GitHub contribution graph for Abhiraj0406"
                className="h-auto w-full"
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Snapshot of recent GitHub activity (approximate). Visit the profile for live details.
            </p>
          </motion.div>

          {/* Top repositories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5"
          >
            <div>
              <p className="mb-3 text-sm font-medium text-slate-300">Repository highlights</p>
              <ul className="space-y-3 text-sm text-slate-300">
                {HIGHLIGHTED_REPOS.map((repo) => (
                  <li
                    key={repo.name}
                    className="rounded-lg border border-slate-800 bg-slate-900/60 p-3 transition hover:border-teal-500/40"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-slate-100">{repo.name}</span>
                      <a
                        href={repo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-teal-400 hover:text-teal-300"
                      >
                        View repo →
                      </a>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{repo.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 flex">
              <a
                href="https://github.com/Abhiraj0406"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-teal-500/70 bg-teal-500/10 px-5 py-2.5 text-xs font-medium text-teal-300 transition hover:border-teal-400 hover:bg-teal-500/20 hover:text-teal-100"
              >
                View GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

