import { useState } from 'react';
import { motion } from 'framer-motion';

// Replace with your Formspree form ID from https://formspree.io (free)
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
  : '';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="border-t border-slate-800 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400"
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-12 text-2xl font-semibold text-slate-100 sm:text-3xl"
        >
          Contact
        </motion.p>
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-slate-400">
              If you're looking for a backend developer focused on APIs, data processing, and automation,
              let's connect. I&apos;m open to remote roles and freelance opportunities.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-16 text-slate-500">Email</span>
                <a
                  href="mailto:abhirajvishwakarma04@gmail.com"
                  className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300"
                >
                  <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"
                    />
                  </svg>
                  abhirajvishwakarma04@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 text-slate-500">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/abhiraj-vishwakarma-85304120b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-300"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                  View LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 text-slate-500">GitHub</span>
                <a
                  href="https://github.com/Abhiraj0406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-teal-300"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                      0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
                      1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
                      0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115
                      2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566
                      4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View GitHub
                </a>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="mailto:abhirajvishwakarma04@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-teal-500/70 bg-teal-500/10 px-6 py-2.5 text-sm font-medium text-teal-300 transition hover:border-teal-400 hover:bg-teal-500/20 hover:text-teal-100"
              >
                Send Email
              </a>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                placeholder="Your message"
              />
            </div>
            {!FORMSPREE_ENDPOINT && (
              <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-200">
                Add <code className="rounded bg-amber-500/20 px-1">VITE_FORMSPREE_ID</code> in{' '}
                <code className="rounded bg-amber-500/20 px-1">.env</code> to enable the form. Get your form ID at{' '}
                <a
                  href="https://formspree.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-amber-100"
                >
                  formspree.io
                </a>
                .
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">
                Something went wrong. Please email me directly or try again.
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'sending' || !FORMSPREE_ENDPOINT}
              className="w-full rounded-lg border border-teal-500/50 bg-teal-500/10 py-3 font-medium text-teal-400 transition hover:border-teal-400 hover:bg-teal-500/20 disabled:opacity-60"
            >
              {status === 'sending'
                ? 'Sending…'
                : status === 'success'
                  ? 'Thanks — message received'
                  : 'Send message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
