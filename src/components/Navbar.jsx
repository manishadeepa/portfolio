import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false); // ✅ ADD THIS

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-5'} px-6 md:px-12 flex justify-between items-center`}>
        
        {/* LOGO */}
        <div className="text-2xl font-bold tracking-tighter text-accent-cyan cursor-pointer drop-shadow-md">
          P<span className="text-white">ortfolio</span>
        </div>
        
        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold">
          <li><a href="#about" className="group hover:text-white transition-all px-1 py-2">About</a></li>
          <li><a href="#projects" className="group hover:text-white transition-all px-1 py-2">Projects</a></li>
          <li><a href="#experience" className="group hover:text-white transition-all px-1 py-2">Experience</a></li>
          <li><a href="#contact" className="group hover:text-white transition-all px-1 py-2">Contact</a></li>
        </ul>
        
        {/* MOBILE BUTTON */}
        <button
          onClick={() => setToggle(!toggle)} // ✅ ADD CLICK
          className="md:hidden text-white hover:text-accent-cyan transition-colors"
        >
          {toggle ? '✖' : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* ✅ MOBILE MENU */}
<div
  className={`fixed top-0 right-0 h-full w-[260px] bg-black z-[9999] transform transition-transform duration-300 ${
    toggle ? 'translate-x-0' : 'translate-x-full'
  } flex flex-col items-start justify-center gap-8 pl-6 text-base shadow-2xl`}
>

  {/* ❌ CLOSE BUTTON */}
  <button
    onClick={() => setToggle(false)}
    className="absolute top-5 right-5 text-white text-2xl hover:text-accent-cyan transition"
  >
    ✖
  </button>

  <a href="#about" onClick={() => setToggle(false)}
className="select-none relative group cursor-pointer text-gray-400 uppercase tracking-[0.2em] font-semibold text-sm hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 px-1 py-2">
  About
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full rounded-full"></span>
</a>

<a href="#projects" onClick={() => setToggle(false)}
className="select-none relative group cursor-pointer text-gray-400 uppercase tracking-[0.2em] font-semibold text-sm hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 px-1 py-2">
  Projects
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full rounded-full"></span>
</a>

<a href="#experience" onClick={() => setToggle(false)}
className="select-none relative group cursor-pointer text-gray-400 uppercase tracking-[0.2em] font-semibold text-sm hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 px-1 py-2">
  Experience
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full rounded-full"></span>
</a>

<a href="#contact" onClick={() => setToggle(false)}
className="select-none relative group cursor-pointer text-gray-400 uppercase tracking-[0.2em] font-semibold text-sm hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all duration-300 px-1 py-2">
  Contact
  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-cyan transition-all duration-300 group-hover:w-full rounded-full"></span>
</a>
</div>
    </>
  );
};

export default Navbar;