import { motion } from 'framer-motion';

const STEPS = [
  {
    icon: '⚡',
    phase: 'Right Now',
    title: 'Backend Developer',
    desc: 'Building REST APIs with Laravel and FastAPI. Working with MySQL, PostgreSQL, Docker. Job-ready for backend roles.',
    color: 'border-teal-500/50 bg-teal-500/10',
    labelColor: 'text-teal-400',
  },
  {
    icon: '📚',
    phase: 'Currently Building',
    title: 'Full Stack Skills',
    desc: 'Deepening Laravel knowledge through a personal project. Adding React frontend to complete the stack. Learning system design patterns.',
    color: 'border-blue-500/30 bg-blue-500/5',
    labelColor: 'text-blue-400',
  },
  {
    icon: '🎯',
    phase: 'Target Role',
    title: 'Full Stack Developer',
    desc: 'Laravel / FastAPI backend + React frontend. Own the entire product — from API design to user interface. That is the goal.',
    color: 'border-purple-500/30 bg-purple-500/5',
    labelColor: 'text-purple-400',
  },
];

export default function Goals() {
  return (
    <section id="goals" className="border-t border-slate-800 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          Where I'm Headed
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-4 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Backend today. Full Stack tomorrow.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12 text-slate-400 max-w-2xl"
        >
          I'm honest about where I am — backend-focused with real work experience. And I'm clear about
          where I want to go — Full Stack. Here's my roadmap.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className={`relative rounded-2xl border p-6 ${step.color}`}
            >
              {/* step number */}
              <span className="absolute -top-3 left-6 rounded-full border border-slate-700 bg-slate-900 px-2.5 py-0.5 text-xs text-slate-500">
                Step {i + 1}
              </span>

              <div className="mb-4 text-3xl">{step.icon}</div>

              <p className={`mb-1 text-xs font-semibold uppercase tracking-widest ${step.labelColor}`}>
                {step.phase}
              </p>
              <h3 className="mb-3 text-lg font-semibold text-slate-100">
                {step.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 rounded-xl border border-slate-700/40 bg-slate-800/20 p-5 text-sm text-slate-400"
        >
          <span className="mr-2 text-slate-500">💬</span>
          "I'm looking for a backend role where I can contribute immediately, keep growing in Laravel and FastAPI,
          and move toward full stack over time. I value honesty, learning, and building things that actually work."
        </motion.div>

      </div>
    </section>
  );
}
