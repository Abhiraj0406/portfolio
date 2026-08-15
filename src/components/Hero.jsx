import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BASE = import.meta.env.BASE_URL;
const RESUME_URL = `${BASE}laravel_backend_abhiraj_resume.pdf`;
const PHOTO_URL  = `${BASE}myimg.jpg`;

const ROLES = [
  'Backend Developer',
  'Laravel Developer',
  'PHP Developer',
  'REST API Engineer',
  'Full Stack Developer (in progress)',
];

/** Typewriter hook */
function useTypewriter(words, typingSpeed = 75, deletingSpeed = 40, pauseMs = 1800) {
  const [index, setIndex]       = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const word = words[index];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), typingSpeed);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deletingSpeed);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto max-w-4xl text-center relative">

        {/* ── Profile Photo ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'backOut' }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* outer glow ring */}
            <div
              className="avatar-ring absolute inset-0 rounded-full"
              style={{ margin: '-4px' }}
            />
            {/* photo */}
            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full ring-2 ring-teal-500 ring-offset-4 ring-offset-slate-900 sm:h-[136px] sm:w-[136px]">
              <img
                src={PHOTO_URL}
                alt="Abhiraj Vishwakarma — Backend Developer"
                className="h-full w-full object-cover object-top"
                draggable={false}
              />
            </div>
            {/* "Open to Work" green dot */}
            <span
              title="Open to Work"
              className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-slate-900 bg-green-400"
            >
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
            </span>
          </div>
        </motion.div>

        {/* ── Name with shimmer ──────────────────────────────────── */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-3 text-3xl font-bold sm:text-4xl md:text-5xl shimmer-text"
        >
          Abhiraj Vishwakarma
        </motion.h1>

        {/* ── Typewriter role ────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal-400 h-5"
        >
          {role}
          <span className="animate-blink ml-0.5 inline-block w-[2px] h-[1em] bg-teal-400 align-middle" />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mb-6 text-xs text-slate-500 tracking-wide"
        >
          Working toward Full Stack · Laravel + React
        </motion.p>

        {/* ── Badges ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 flex flex-wrap justify-center gap-3"
        >
          <span className="rounded-full border border-green-500/40 bg-green-500/10 px-4 py-1 text-sm text-green-400">
            ✅ Open to Work · Immediate Joiner
          </span>
          <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1 text-sm text-teal-300">
            🎯 Goal: Full Stack Developer
          </span>
        </motion.div>

        {/* ── Bio ───────────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="mx-auto mb-10 max-w-2xl text-sm text-slate-400 sm:text-base leading-relaxed"
        >
          Backend developer with 1 year of experience at Encardio-Rite Pvt. Ltd.
          Built REST APIs and internal systems primarily using <span className="text-teal-400 font-medium">Laravel and PHP</span>.
          Comfortable with MySQL, PostgreSQL, Docker, and Git.
          Currently focused on backend — building toward full stack with React.
        </motion.p>

        {/* ── CTA Buttons ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <a
            href={RESUME_URL}
            download
            className="group relative overflow-hidden rounded-full bg-teal-500 px-7 py-3 text-sm font-semibold text-black transition-all hover:bg-teal-400 hover:shadow-[0_0_24px_rgba(20,184,166,0.5)]"
          >
            <span className="relative z-10">Download Resume</span>
          </a>

          <a
            href="#projects"
            className="rounded-full border border-teal-500 px-6 py-3 text-sm text-teal-300 transition hover:bg-teal-500/10 hover:border-teal-400 hover:shadow-[0_0_16px_rgba(20,184,166,0.25)]"
          >
            View Projects
          </a>

          <a
            href="https://github.com/Abhiraj0406"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-600 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-400 hover:bg-slate-800/50"
          >
            GitHub
          </a>
        </motion.div>

        {/* ── Scroll hint ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14 flex flex-col items-center gap-1.5"
        >
          <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-slate-600 to-transparent animate-float" />
        </motion.div>
      </div>
    </section>
  );
}