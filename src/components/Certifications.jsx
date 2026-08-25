import { motion } from 'framer-motion';

const CERTS = [
  {
    type: 'Cybersecurity & Application Security',
    name: 'DCSC — Web Application Penetration Testing',
    issuer: 'TDO Tech Education Pvt. Ltd.',
    standard: 'ISO 9001:2015 Certified',
    date: 'August 2026',
    certId: 'DCSC-AVRVV0326',
    desc: 'Formal examination certification in Web Application Penetration Testing, vulnerability identification, and security mitigation.',
    skills: ['Web Penetration Testing', 'Security Assessment', 'Vulnerability Remediation'],
    badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
    icon: (
      <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    type: 'Enterprise Apprenticeship',
    name: 'NATS Software Apprentice Certificate',
    issuer: 'Encardio-Rite Pvt. Ltd. (MHRD / NATS)',
    standard: 'Govt. Recognized Enterprise Scheme',
    date: 'Jan 2025 – Jan 2026',
    certId: 'Apprentice ID: Encardio-EOT',
    desc: 'Completed 1-year Software Apprenticeship in the Edge of Technology (EOT) division, building production REST APIs and internal tools.',
    skills: ['Laravel (PHP)', 'REST API Architecture', 'MySQL', 'Docker'],
    badgeColor: 'border-teal-500/40 bg-teal-500/10 text-teal-400',
    icon: (
      <svg className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    type: 'Full Stack Engineering',
    name: 'Web Development Internship Certificate',
    issuer: 'Zidio Development',
    standard: 'Practical Industry Experience',
    date: 'Aug 2024 – Oct 2024',
    certId: 'Verified Internship',
    desc: 'Hands-on full-stack development internship contributing to frontend-backend integration, REST APIs, and feature delivery.',
    skills: ['Full Stack Development', 'API Integration', 'Team Collaboration'],
    badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
    icon: (
      <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    type: 'Professional Training',
    name: 'Web Development & Career Preparation',
    issuer: 'Internshala Trainings',
    standard: 'Certified Training Program',
    date: 'Certified Graduate',
    certId: 'Credential ID Verified',
    desc: 'Structured professional training covering modern web technologies, database integration, and software engineering practices.',
    skills: ['Web Technologies', 'PHP & MySQL Fundamentals', 'Software Lifecycle'],
    badgeColor: 'border-purple-500/40 bg-purple-500/10 text-purple-400',
    icon: (
      <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-slate-800/60 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          Certifications & Credentials
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-3 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Verified technical qualifications
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mb-12 text-sm text-slate-500"
        >
          Certified credentials across web application security, enterprise backend development, and full-stack engineering.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2">
          {CERTS.map((cert, i) => (
            <motion.article
              key={cert.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between rounded-xl border border-slate-700/50 glass-card p-6 transition-all duration-300 hover:border-teal-500/40 hover:shadow-[0_8px_32px_rgba(20,184,166,0.12)]"
            >
              <div>
                {/* Top header with category pill and icon */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-800/80">
                    {cert.icon}
                  </div>
                  <span className={`rounded-full px-3 py-0.5 text-xs font-medium border ${cert.badgeColor}`}>
                    {cert.type}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base font-semibold text-slate-100 sm:text-lg">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal-400">
                  {cert.issuer}
                </p>

                {/* Metadata badges */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="rounded bg-slate-800/80 px-2 py-0.5 border border-slate-700/60 text-slate-300">
                    📅 {cert.date}
                  </span>
                  <span className="rounded bg-slate-800/80 px-2 py-0.5 border border-slate-700/60 text-slate-300 font-mono">
                    ID: {cert.certId}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    • {cert.standard}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {cert.desc}
                </p>
              </div>

              {/* Skill tags footer */}
              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-800/80 pt-4">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-slate-800/50 px-2 py-0.5 text-xs text-slate-400 border border-slate-700/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
