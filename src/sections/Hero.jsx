import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const PhotoCard = () => {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [12, -12]));
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-12, 12]));

  return (
    <motion.div ref={ref} style={{ rotateX, rotateY }} className="relative w-full h-full">
      <div className="w-full h-full rounded-full border border-accent-cyan overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.3)]">
        <img src="/profile.jpeg" alt="profile" className="w-full h-full object-cover rounded-full" />
      </div>
    </motion.div>
  );
};

/* Animation Variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden pt-20">

      {/* DESKTOP + TABLET */}
      <motion.div
        className="hidden md:flex flex-row items-center justify-center max-w-7xl mx-auto px-6 lg:px-16"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {/* TEXT */}
        <motion.div className="flex-1 text-left">

          <motion.h1 variants={item} className="text-5xl lg:text-7xl font-bold text-white">
            Manisha <span className="text-accent-cyan">N</span>
          </motion.h1>

          <motion.p variants={item} className="text-lg lg:text-xl text-gray-400 mt-4">
            Full Stack Developer specializing in crafting robust web applications.
          </motion.p>

          {/* BUTTONS */}
          <motion.div className="flex gap-4 mt-6 flex-wrap">
            <motion.a variants={item} href="#projects" className="px-6 py-3 rounded-full bg-accent-blue/10 text-accent-cyan border border-accent-cyan">
              View Projects
            </motion.a>

            <motion.a variants={item} href="/resume.pdf" className="px-6 py-3 rounded-full bg-accent-purple/20 text-accent-purple border border-accent-purple flex items-center gap-2">
              <FaDownload /> Resume
            </motion.a>

            <motion.a variants={item} href="#contact" className="px-6 py-3 rounded-full glass-panel text-white border border-white/10">
              Contact Me
            </motion.a>
          </motion.div>

          {/* ICONS */}
          <motion.div className="flex gap-6 mt-6">
            <motion.div variants={item}><FaGithub size={22} /></motion.div>
            <motion.div variants={item}><FaLinkedin size={22} /></motion.div>
            <motion.div variants={item}><FaEnvelope size={22} /></motion.div>
          </motion.div>

        </motion.div>

        {/* IMAGE */}
        <motion.div className="flex-1 flex justify-center mt-10 md:mt-0" variants={item}>
          <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[450px] lg:h-[450px]">
            <PhotoCard />
          </div>
        </motion.div>

      </motion.div>

      {/* MOBILE */}
      <motion.div
        className="flex md:hidden flex-col items-center text-center px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >

        <motion.h1 variants={item} className="text-4xl font-bold text-white">
          Manisha <span className="text-accent-cyan">N</span>
        </motion.h1>

        <motion.p variants={item} className="text-sm text-gray-400 mt-3 max-w-xs">
          Full Stack Developer specializing in crafting robust web applications.
        </motion.p>

        <motion.div variants={item} className="mt-6 w-[220px] h-[220px]">
          <PhotoCard />
        </motion.div>

        {/* BUTTONS */}
        <motion.div className="flex flex-col gap-4 mt-6 w-full max-w-xs">
          <motion.a variants={item} href="#projects" className="px-6 py-3 rounded-full bg-accent-blue/10 text-accent-cyan border border-accent-cyan">
            View Projects
          </motion.a>

          <motion.a variants={item} href="/resume.pdf" className="px-6 py-3 rounded-full bg-accent-purple/20 text-accent-purple border border-accent-purple flex items-center justify-center gap-2">
            <FaDownload /> Resume
          </motion.a>

          <motion.a variants={item} href="#contact" className="px-6 py-3 rounded-full glass-panel text-white border border-white/10">
            Contact Me
          </motion.a>
        </motion.div>

        {/* ICONS */}
        <motion.div className="flex gap-6 mt-6">
          <motion.div variants={item}><FaGithub size={22} /></motion.div>
          <motion.div variants={item}><FaLinkedin size={22} /></motion.div>
          <motion.div variants={item}><FaEnvelope size={22} /></motion.div>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default Hero;