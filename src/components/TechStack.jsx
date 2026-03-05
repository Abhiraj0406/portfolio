import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', desc: 'Primary language for backend and scripting' },
      { name: 'PHP', desc: 'Laravel-based backend applications' },
      { name: 'JavaScript', desc: 'Frontend logic and Node.js scripts' },
      { name: 'TypeScript', desc: 'Typed React / Next.js and backend code' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'FastAPI', desc: 'High-performance Python APIs and services' },
      { name: 'Laravel', desc: 'RESTful APIs and server-side applications' },
      { name: 'Node.js', desc: 'API services and tooling' },
      { name: 'REST APIs', desc: 'Design, versioning, and best practices' },
      { name: 'Keycloak (RBAC)', desc: 'Authentication and role-based access control' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', desc: 'SPA and dashboard interfaces' },
      { name: 'Next.js', desc: 'Full stack React apps with SSR' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', desc: 'Schema design and query optimisation' },
      { name: 'MySQL', desc: 'Relational data and reporting' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Docker', desc: 'Containerised dev and deployment' },
      { name: 'Git', desc: 'Version control and collaboration' },
      { name: 'Postman', desc: 'API testing and collections' },
      { name: 'Azure DevOps', desc: 'Boards, pipelines, and project tracking' },
      { name: 'CI/CD workflows', desc: 'Automated testing and deployment pipelines' },
      { name: 'Cursor AI', desc: 'AI-assisted development workflow' },
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
          className="mb-12 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Full stack technologies
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
              <h3 className="mb-4 text-sm font-medium text-slate-400">{group.title}</h3>
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
                    className="rounded-xl border border-slate-800 bg-slate-800/30 p-4 transition hover:border-teal-500/40 hover:bg-slate-800/50"
                  >
                    <span className="font-medium text-slate-100">{skill.name}</span>
                    <p className="mt-0.5 text-sm text-slate-400">{skill.desc}</p>
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
