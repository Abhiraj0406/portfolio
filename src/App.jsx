import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import FeaturedProjects from './components/FeaturedProjects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Goals from './components/Goals';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable <= 0) return;
      setScrollProgress((window.scrollY / totalScrollable) * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-100">
      {/* ── Scroll Progress Bar ──────────────────────────────── */}
      <div className="fixed top-0 left-0 z-[200] h-[2px] transition-all duration-150 progress-glow"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #0d9488, #14b8a6, #2dd4bf)',
        }}
      />

      {/* ── Animated Background Orbs (fixed, full-page) ─────── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%)',
            animation: 'orbDrift1 22s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-1/3 -right-32 h-[460px] w-[460px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
            animation: 'orbDrift2 28s ease-in-out infinite',
          }}
        />
        <div
          className="absolute -bottom-32 left-1/4 h-[400px] w-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 70%)',
            animation: 'orbDrift3 18s ease-in-out infinite',
          }}
        />
        {/* subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── Page Content ─────────────────────────────────────── */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <FeaturedProjects />
          <Education />
          <Certifications />
          <Goals />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
