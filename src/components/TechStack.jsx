import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: [
      { name: 'PHP', desc: 'Primary language — Laravel backend development' },
      { name: 'Python', desc: 'FastAPI backend development and scripting' },
      { name: 'JavaScript', desc: 'Frontend logic and client-side scripting' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Laravel', desc: 'Primary framework — routing, Eloquent ORM, REST APIs, Sanctum' },
      { name: 'FastAPI', desc: 'Used in production at Encardio-Rite, actively growing' },
      { name: 'REST APIs', desc: 'API design, resources, versioning, and integration' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', desc: 'Schema design, queries, joins, relationships' },
      { name: 'PostgreSQL', desc: 'Used in production projects — basic to intermediate' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', desc: 'Basic components — used in support role on projects' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', desc: 'Daily version control and collaborative development' },
      { name: 'Docker', desc: 'Containerised development — used at work, understand basics' },
      { name: 'Postman', desc: 'API testing and endpoint validation' },
      { name: 'Azure DevOps', desc: 'Task tracking and team collaboration' },
    ],
  },
  {
    title: 'Exposure / Familiar With',
    exposure: true,
    skills: [
      { name: 'TypeScript', desc: 'Familiar — used lightly in project support' },
      { name: 'Keycloak', desc: 'Worked with it at Encardio-Rite — still learning internals' },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (
    <section id="tech" className="border-t border-slate-800 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          Tech Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-3 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Backend-focused, growing toward Full Stack
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mb-12 text-sm text-slate-500"
        >
          Only listing skills I can honestly discuss in an interview. "Exposure" means I've used it but am still learning.
        </motion.p>

        <div className="space-y-10">
          {SKILL_GROUPS.map((group, gIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: gIdx * 0.05 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <h3 className={`text-sm font-medium ${group.exposure ? 'text-slate-500' : 'text-slate-400'}`}>
                  {group.title}
                </h3>
                {group.exposure && (
                  <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-600">
                    not interview-ready
                  </span>
                )}
              </div>

              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
              >
                {group.skills.map((skill) => (
                  <motion.li
                    key={skill.name}
                    variants={item}
                    className={`rounded-xl border p-4 transition ${
                      group.exposure
                        ? 'border-slate-800/60 bg-slate-900/40 opacity-70 hover:opacity-90'
                        : 'border-slate-800 bg-slate-800/30 hover:border-teal-500/40 hover:bg-slate-800/50'
                    }`}
                  >
                    <span className={`font-medium ${group.exposure ? 'text-slate-400' : 'text-slate-100'}`}>
                      {skill.name}
                    </span>
                    <p className="mt-0.5 text-sm text-slate-500">
                      {skill.desc}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}