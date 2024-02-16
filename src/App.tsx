import { useEffect, useRef, useCallback } from 'react';

import Header from './components/Header';
import Introdution from './components/Introdution';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden scroll-smooth">
      <div className="min-h-svh w-full">
        <Header />
        <Introdution />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
