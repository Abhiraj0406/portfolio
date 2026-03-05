import { motion } from 'framer-motion';

const RESUME_URL = `${import.meta.env.BASE_URL}Abhiraj_Vishwakarma_Resume.pdf`;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16"
      aria-label="Introduction"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl md:text-5xl"
        >
          Abhiraj Vishwakarma
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          Full Stack Developer | Python, Laravel, FastAPI, React
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 text-sm text-slate-400 sm:text-base leading-relaxed"
        >
          Full Stack Developer with 1 year of industry experience building backend APIs, internal engineering
          systems, and full‑stack applications. Experienced in Python FastAPI, Laravel, PostgreSQL, and React.
          Passionate about building reliable systems and learning new technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {/* Primary: Download Resume */}
          <a
            href={RESUME_URL}
            download="Abhiraj_Vishwakarma_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-teal-500/90 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/30 transition hover:bg-teal-400 hover:shadow-teal-400/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0-3-3m3 3 3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414A1 1 0 0 1 19 9.414V19a2 2 0 0 1-2 2z"
              />
            </svg>
            Download Resume
          </a>

          {/* Secondary: View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-teal-500/60 bg-teal-500/5 px-6 py-3 text-sm font-medium text-teal-300 shadow-sm shadow-slate-900/40 transition hover:border-teal-400 hover:bg-teal-500/15 hover:text-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            View Projects
          </a>

          {/* Tertiary: GitHub */}
          <a
            href="https://github.com/Abhiraj0406"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/60 px-6 py-3 text-sm font-medium text-slate-200 shadow-sm shadow-slate-900/60 transition hover:border-teal-500 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            aria-label="Open GitHub profile"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
                1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
                0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115
                2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566
                4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
