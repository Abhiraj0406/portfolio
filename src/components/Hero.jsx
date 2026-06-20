import { motion } from 'framer-motion';

const RESUME_URL = `${import.meta.env.BASE_URL}Abhiraj_resume.pdf`;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 text-3xl font-semibold text-slate-100 sm:text-4xl md:text-5xl"
        >
          Abhiraj Vishwakarma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          Full Stack Developer | Laravel (PHP) | FastAPI | React | REST APIs
        </motion.p>

        <motion.div className="mb-8 flex justify-center">
          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm text-green-400">
            Open to Work • Immediate Joiner
          </span>
        </motion.div>

        <motion.p className="mx-auto mb-10 max-w-3xl text-sm text-slate-400 sm:text-base leading-relaxed">
          Full Stack Developer with 1 year of experience building backend-heavy
          enterprise applications and internal business systems. Experienced in
          Laravel, PHP, FastAPI, PostgreSQL, MySQL, Docker, and authentication systems.
          Strong focus on backend architecture, APIs, and scalable web applications.
        </motion.p>

        {/* buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">

          <a
            href={RESUME_URL}
            download
            className="rounded-full bg-teal-500 px-7 py-3 text-sm font-semibold text-black"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="rounded-full border border-teal-500 px-6 py-3 text-sm text-teal-300"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Abhiraj0406"
            target="_blank"
            className="rounded-full border border-slate-600 px-6 py-3 text-sm text-slate-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}