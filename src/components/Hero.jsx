import { motion } from 'framer-motion';

const RESUME_URL = `${import.meta.env.BASE_URL}laravel_backend_abhiraj_resume.pdf`;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center relative">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-3xl font-semibold text-slate-100 sm:text-4xl md:text-5xl"
        >
          Abhiraj Vishwakarma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-2 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          Backend Developer · Laravel · PHP · REST APIs
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mb-6 text-xs text-slate-500 tracking-wide"
        >
          Working toward Full Stack · Laravel + React
        </motion.p>

        {/* badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-3"
        >
          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm text-green-400">
            Open to Work · Immediate Joiner
          </span>
          <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1 text-sm text-teal-300">
            🎯 Goal: Full Stack Developer
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="mx-auto mb-10 max-w-2xl text-sm text-slate-400 sm:text-base leading-relaxed"
        >
          Backend developer with 1 year of experience at Encardio-Rite Pvt. Ltd.
          Built REST APIs and internal systems primarily using Laravel and PHP.
          Comfortable with MySQL, PostgreSQL, Docker, and Git.
          Currently focused on backend — building toward full stack with React.
        </motion.p>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <a
            href={RESUME_URL}
            download
            className="rounded-full bg-teal-500 px-7 py-3 text-sm font-semibold text-black transition hover:bg-teal-400"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="rounded-full border border-teal-500 px-6 py-3 text-sm text-teal-300 transition hover:bg-teal-500/10"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Abhiraj0406"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-600 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-400"
          >
            GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
}