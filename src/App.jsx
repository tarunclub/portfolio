import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div>
      <main className="mx-auto bg-[rgb(36,36,36)] h-screen text-white z-0 snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-hide">
        {/* Header */}
        <Header />

        {/* Hero */}
        <section id="hero" className="snap-center">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>

        {/* Skills */}
        <section id="skills" className="snap-center">
          <Skills />
        </section>

        {/* Projects */}
        <section id="projects" className="snap-center">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact" className="snap-center">
          <ContactMe />
        </section>
      </main>
    </div>
  );
}

export default App;
