import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About',         href: '#about' },
  { label: 'Tech Stack',    href: '#tech' },
  { label: 'Experience',    href: '#experience' },
  { label: 'Projects',      href: '#projects' },
  { label: 'Education',     href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: "Where I'm Headed", href: '#goals' },
  { label: 'Contact',       href: '#contact' },
];

export default function Header() {
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState('');
  const [scrolled, setScrolled] = useState(false);

  /* ── Scroll shadow ──────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ────────────── */
  useEffect(() => {
    const ids = ['hero', ...NAV_LINKS.map((l) => l.href.slice(1))];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-slate-700/80 bg-slate-900/90 shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-md'
          : 'border-slate-800/40 bg-slate-900/60 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center font-semibold tracking-tight transition"
          aria-label="Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-teal-500/50 bg-teal-500/10 transition group-hover:border-teal-400/70 group-hover:bg-teal-500/20 group-hover:shadow-[0_0_14px_rgba(20,184,166,0.3)]">
            <span className="text-[13px] font-bold text-teal-400 transition group-hover:text-teal-300">A.V</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-teal-400'
                      : 'text-slate-400 hover:text-teal-400 hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-md bg-teal-500/10 border border-teal-500/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-800 md:hidden"
          >
            <ul className="flex flex-col gap-0 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block py-2.5 text-sm transition ${
                      active === link.href ? 'text-teal-400' : 'text-slate-400 hover:text-teal-400'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
