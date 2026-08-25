import { motion } from 'framer-motion';

const STEPS = [
  {
    icon: '⚡',
    phase: 'Right Now',
    title: 'PHP Developer',
    desc: 'Building and maintaining PHP/Laravel web applications, handling server deployments, database management, and REST API development in a full-time role.',
    color: 'border-teal-500/50 bg-teal-500/10',
    labelColor: 'text-teal-400',
    glow: '0 0 40px rgba(20,184,166,0.12)',
  },
  {
    icon: '📚',
    phase: 'Currently Building',
    title: 'Full Stack Capabilities',
    desc: 'Deepening my Laravel backend knowledge through real projects. Learning React to build complete, end-to-end applications without relying on others for the frontend.',
    color: 'border-blue-500/30 bg-blue-500/5',
    labelColor: 'text-blue-400',
    glow: '0 0 40px rgba(99,102,241,0.1)',
  },
  {
    icon: '🎯',
    phase: 'Goal',
    title: 'Full Stack Developer',
    desc: 'Own the entire product stack — strong backend with Laravel or PHP, paired with a modern React frontend. Build complete systems independently.',
    color: 'border-purple-500/30 bg-purple-500/5',
    labelColor: 'text-purple-400',
    glow: '0 0 40px rgba(168,85,247,0.1)',
  },
];

export default function Goals() {
  return (
    <section id="goals" className="border-t border-slate-800/60 px-6 py-20 sm:py-24">
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
              whileHover={{ y: -6, boxShadow: step.glow }}
              className={`relative rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 ${step.color}`}
            >
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
          className="mt-10 rounded-xl border border-slate-700/40 glass-card p-5 text-sm text-slate-400"
        >
          <span className="mr-2 text-slate-500">💬</span>
          "Currently employed as a PHP Developer, focused on writing clean code, learning from real production problems, and steadily growing toward full stack development."
        </motion.div>

      </div>
    </section>
  );
}
