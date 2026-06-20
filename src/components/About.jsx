import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="border-t border-slate-800 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-10 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Full Stack Developer focused on scalable backend systems and APIs
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-6 text-slate-300"
        >
          <p className="leading-relaxed">
            I'm a Full Stack Developer with strong expertise in backend engineering,
            specializing in building scalable APIs and database-driven applications.
            I primarily work with PHP (Laravel) and Python (FastAPI), along with
            PostgreSQL, MySQL, Docker, and authentication systems.
          </p>

          <p className="leading-relaxed">
            At Encardio-Rite Pvt. Ltd., I contributed to enterprise-grade internal
            systems including a Sensor Data Calibration & Management System and an
            Internal Financial Dashboard. My responsibilities included backend
            development, REST API design, database modeling, authentication workflows,
            testing, and technical documentation.
          </p>

          <p className="leading-relaxed">
            I also worked on backend migration tasks, transitioning services from
            Laravel to FastAPI based on evolving requirements. This experience
            strengthened my understanding of scalable backend architecture, clean API
            design, and maintainable system development.
          </p>

          <p className="leading-relaxed">
            I enjoy solving real-world business problems through technology and
            continuously improving my skills in backend engineering, system design,
            and modern web development practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="rounded-xl border border-slate-800 bg-slate-800/30 p-4">
            <h3 className="font-semibold text-slate-100">Backend</h3>
            <p className="mt-2 text-sm text-slate-400">
              Laravel, FastAPI, REST APIs
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-800/30 p-4">
            <h3 className="font-semibold text-slate-100">Databases</h3>
            <p className="mt-2 text-sm text-slate-400">
              MySQL, PostgreSQL
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-800/30 p-4">
            <h3 className="font-semibold text-slate-100">Tools</h3>
            <p className="mt-2 text-sm text-slate-400">
              Docker, Git, Keycloak
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-800/30 p-4">
            <h3 className="font-semibold text-slate-100">Frontend</h3>
            <p className="mt-2 text-sm text-slate-400">
              React, TypeScript, JavaScript
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}