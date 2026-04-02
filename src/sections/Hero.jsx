import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto flex flex-col lg:flex-row items-center justify-center overflow-hidden pt-20">
      
      {/* Content wrapper */}
      <div className="z-10 text-center lg:text-left flex-1 px-6 sm:px-16 max-w-7xl mx-auto pointer-events-none mt-10 lg:mt-0">
        <motion.p 
          className="text-accent-blue font-mono mb-4 text-sm lg:text-base tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Computer Science Professional
        </motion.p>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Manisha <span className="text-accent-cyan pointer-events-auto drop-shadow-md">N</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Developer specializing in crafting robust web applications, scalable backend systems, and intuitive user experiences.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#projects" className="px-6 py-3 rounded-full bg-accent-blue/10 text-accent-cyan border border-accent-cyan hover:bg-accent-cyan hover:text-primary transition-all duration-300 font-semibold shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] flex items-center justify-center">
            View Projects
          </a>
          <a href="/resume.pdf" download="Manisha_N_Resume.pdf" className="px-6 py-3 rounded-full bg-accent-purple/20 text-accent-purple border border-accent-purple hover:bg-accent-purple hover:text-white transition-all duration-300 font-semibold shadow-[0_0_15px_rgba(157,78,221,0.2)] hover:shadow-[0_0_25px_rgba(157,78,221,0.5)] flex items-center justify-center gap-2">
            <FaDownload /> Resume
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full glass-panel text-white hover:bg-white/10 transition-all duration-300 font-semibold border border-white/10 flex items-center justify-center">
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
           className="flex gap-6 mt-10 justify-center lg:justify-start pointer-events-auto"
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.4 }}
        >
           <a href="https://github.com/manishadeepa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 glass-panel flex items-center justify-center text-white hover:text-accent-cyan hover:bg-white/10 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]">
              <FaGithub className="w-6 h-6" />
           </a>
           <a href="https://www.linkedin.com/in/manishadeepa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 glass-panel flex items-center justify-center text-white hover:text-accent-blue hover:bg-white/10 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(0,100,255,0.4)]">
              <FaLinkedin className="w-6 h-6" />
           </a>
           <a href="mailto:manishanarayanasami@gmail.com" className="w-12 h-12 rounded-full border border-white/10 glass-panel flex items-center justify-center text-white hover:text-primary hover:bg-white transition-all shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              <FaEnvelope className="w-6 h-6" />
           </a>
        </motion.div>
      </div>

      {/* Profile Image element */}
      <div className="absolute inset-0 top-[20%] lg:top-0 w-full h-[60vh] lg:h-screen lg:relative lg:flex-1 pointer-events-auto z-0 flex justify-center items-center mt-10 lg:mt-0 xl:mr-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]"
        >
          {/* Glowing background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-cyan to-accent-blue blur-xl opacity-40 animate-pulse"></div>
          
          {/* Image wrapper */}
          <div className="relative w-full h-full rounded-full p-2 border border-accent-cyan/50 bg-black/40 backdrop-blur-sm flex items-center justify-center shadow-[0_0_50px_rgba(0,255,255,0.2)]">
             <img 
               src="/profile.jpeg"
               alt="Manisha Profile" 
               className="w-full h-full object-cover rounded-full"
             />
          </div>
        </motion.div>
      </div>

      {/* Basic decorative ambient elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-purple/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
