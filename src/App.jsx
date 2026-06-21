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
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
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
  );
}

export default App;
