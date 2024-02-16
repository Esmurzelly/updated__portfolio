import { useEffect, useRef, useCallback } from 'react';

import Header from './components/Header';
import Introdution from './components/Introdution';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entires => {
      entires.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target.getAttribute('id'));
        }
      });
    }, options);

    sectionsRef.current.forEach(section => {
      observer.observe(section);
    });
  }, []);

  const refCallback = useCallback((element: any) => {
    if (element) {
      sectionsRef.current.push(element);
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-svh">
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
