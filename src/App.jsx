import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import StarsCanvas from './components/canvas/Stars';

function App() {
  return (
    <div className="relative min-h-screen bg-primary z-0">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <StarsCanvas />
    </div>
  );
}

export default App;
