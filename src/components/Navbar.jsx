import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-5'} px-6 md:px-12 flex justify-between items-center`}>
      <div className="text-2xl font-bold tracking-tighter text-accent-cyan cursor-pointer drop-shadow-md">
        P<span className="text-white">ortfolio</span>
      </div>
      
      <ul className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold">
        <li><a href="#about" className="relative group cursor-pointer hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 px-1 py-2">About<span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full rounded-full"></span></a></li>
        <li><a href="#projects" className="relative group cursor-pointer hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 px-1 py-2">Projects<span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full rounded-full"></span></a></li>
        <li><a href="#experience" className="relative group cursor-pointer hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 px-1 py-2">Experience<span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full rounded-full"></span></a></li>
        <li><a href="#contact" className="relative group cursor-pointer hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 px-1 py-2">Contact<span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full rounded-full"></span></a></li>
      </ul>
      
      <button className="md:hidden text-white hover:text-accent-cyan transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
