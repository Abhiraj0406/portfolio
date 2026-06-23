import { motion } from 'framer-motion';

const JOURNEY = [
  {
    step: 'Now',
    label: 'Backend Developer',
    desc: 'Laravel · PHP · REST APIs · MySQL',
    color: 'border-teal-500 bg-teal-500/10 text-teal-300',
    dot: 'bg-teal-500',
  },
  {
    step: 'Building',
    label: 'Full Stack Skills',
    desc: 'Adding React frontend to backend expertise',
    color: 'border-blue-500/50 bg-blue-500/10 text-blue-300',
    dot: 'bg-blue-400',
  },
  {
    step: 'Goal',
    label: 'Full Stack Developer',
    desc: 'Laravel / PHP backend + React frontend',
    color: 'border-purple-500/50 bg-purple-500/10 text-purple-300',
    dot: 'bg-purple-400',
  },
];

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
          Backend developer building real-world APIs and systems
        </motion.p>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-5 text-slate-300"
        >
          <p className="leading-relaxed">
            Backend developer with 1 year of real-world experience at{' '}
            <span className="text-slate-100 font-medium">Encardio-Rite Pvt. Ltd.</span>, where I
            worked as a Software Apprentice. I build REST APIs and backend systems —
            primarily with <span className="text-teal-400 font-medium">Laravel (PHP)</span> as my
            core framework. I have used it extensively in a real production environment.
          </p>

          <p className="leading-relaxed">
            At Encardio-Rite, I contributed to internal enterprise systems — a Sensor Data
            development, database interaction, and system integrations,
            giving me hands-on experience building reliable architectures in production.
          </p>

          <p className="leading-relaxed">
            I work with MySQL and PostgreSQL for databases, Docker for containerised
            environments, Git for version control, and Postman for API testing. I understand
            REST API design and database modeling from actual project work — not just tutorials.
            I also leverage Agentic AI tools (like Cursor AI and Antigravity) to accelerate
            standard workflows, allowing me to build, debug, and ship code faster while
            maintaining deep technical understanding of the underlying architecture.
          </p>

          <p className="leading-relaxed font-medium text-teal-300/90">
            🎯 My goal is to become a Full Stack Developer. I have a strong backend foundation
            in Laravel and PHP. I am now adding React to own the frontend side as well.
            Looking for a backend role where I can contribute from day one and grow into full stack.
          </p>
        </motion.div>

        {/* Full Stack Journey Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="mt-12 rounded-2xl border border-slate-700/60 bg-slate-800/20 p-6 sm:p-8"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-500">
            My Full Stack Journey
          </p>

          <div className="flex flex-col gap-0 sm:flex-row sm:items-stretch sm:gap-0">
            {JOURNEY.map((item, i) => (
              <div key={item.step} className="flex sm:flex-1 sm:flex-col">
                {/* card */}
                <div className="flex sm:flex-col flex-1 gap-4 sm:gap-3">
                  <div className={`mt-1 sm:mt-0 flex h-8 w-8 sm:h-auto sm:w-auto shrink-0 sm:mb-3 items-center justify-center rounded-full sm:rounded-lg border px-0 sm:px-4 sm:py-2 ${item.color} sm:text-center`}>
                    <span className="hidden sm:block text-xs font-bold uppercase tracking-widest">
                      {item.step}
                    </span>
                    <span className={`sm:hidden h-3 w-3 rounded-full ${item.dot}`} />
                  </div>
                  <div className="flex-1">
                    <span className={`sm:hidden mr-2 text-xs font-bold uppercase tracking-widest ${item.color.split(' ').pop()}`}>
                      {item.step} —{' '}
                    </span>
                    <p className="inline sm:block font-semibold text-slate-100 sm:mb-1">{item.label}</p>
                    <p className="text-sm text-slate-400 sm:mt-1">{item.desc}</p>
                  </div>
                </div>

                {/* connector arrow */}
                {i < JOURNEY.length - 1 && (
                  <div className="my-3 flex items-center justify-center sm:hidden">
                    <svg className="h-4 w-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}

            {/* desktop arrows between cards */}
          </div>

          <p className="mt-6 text-sm text-slate-500 italic">
            "I'm looking for a backend role where I can contribute immediately and grow toward full stack over time."
          </p>
        </motion.div>

      </div>
    </section>
  );
}