import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: [
      { name: 'PHP', desc: 'Primary backend language — OOP, APIs, and web application development' },
      { name: 'JavaScript', desc: 'Client-side scripting, DOM manipulation, and modern ES6+' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Laravel', desc: 'Core framework — routing, Eloquent ORM, Sanctum, REST APIs, MVC' },
      { name: 'REST API Design', desc: 'Structured endpoints, filtering, pagination, versioning, and documentation' },
      { name: 'Swagger / OpenAPI', desc: 'API documentation and interactive endpoint testing via Swagger UI' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', desc: 'Schema design, relationships, joins, indexing, and query optimization' },
      { name: 'PostgreSQL', desc: 'Relational data modeling, used in production projects at Encardio-Rite' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', desc: 'Component architecture, hooks, state management, and API integration' },
      { name: 'Tailwind CSS', desc: 'Utility-first styling, responsive layouts, and modern UI design' },
    ],
  },
  {
    title: 'Tools & Infrastructure',
    skills: [
      { name: 'Git & GitHub', desc: 'Daily version control, branching workflows, and team collaboration' },
      { name: 'Docker', desc: 'Containerised development environments — used in real project workflows' },
      { name: 'Postman', desc: 'API testing, collection management, and endpoint verification' },
      { name: 'Hostinger & Server Management', desc: 'Domain hosting, DNS configuration, deployment, and server upkeep' },
      { name: 'Azure DevOps', desc: 'Task tracking, sprint planning, and team coordination' },
    ],
  },
  {
    title: 'Other Tools',
    skills: [
      { name: 'Keycloak', desc: 'Identity and access management — integrated in enterprise project at Encardio-Rite' },
      { name: 'Agentic AI (Cursor & Antigravity)', desc: 'Accelerating development, debugging workflows, and rapid shipping without losing technical depth' },
    ],
  },
  {
    title: 'Familiar With',
    exposure: true,
    skills: [
      { name: 'Python & FastAPI', desc: 'Used in backend work at Encardio-Rite — interested in growing this further' },
      { name: 'TypeScript', desc: 'Basic familiarity from frontend project exposure' },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (
    <section id="tech" className="border-t border-slate-800/60 px-6 py-20 sm:py-24">
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
          Skills I can speak to confidently. "Familiar With" means I've used it in a real context and am actively learning more.
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
                    learning
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
                    whileHover={!group.exposure ? { scale: 1.02, y: -2 } : {}}
                    className={`skill-card rounded-xl border p-4 transition-all duration-200 cursor-default ${
                      group.exposure
                        ? 'border-slate-800/60 bg-slate-900/40 opacity-70 hover:opacity-90'
                        : 'border-slate-700/60 bg-slate-800/30 hover:bg-slate-800/60'
                    }`}
                  >
                    <span className={`font-medium ${group.exposure ? 'text-slate-400' : 'text-slate-100'}`}>
                      {skill.name}
                    </span>
                    <p className="mt-0.5 text-sm text-slate-500 leading-relaxed">
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