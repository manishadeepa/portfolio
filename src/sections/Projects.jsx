import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projects = [
  {
    name: 'Food Nutrition Analysis System',
    description: 'An expansive full-stack AI health platform integrating advanced food image upload and barcode scanning workflows. Leveraging the Groq API, it operates as a personalized smart diet assistant. The ecosystem encompasses an intricate daily calorie tracker, a comprehensive food comparison tool, and an interactive nutrition game to maintain seamless user engagement while empowering healthier lifestyle choices.',
    tags: [
      { name: 'react', color: 'text-cyan-400' },
      { name: 'express', color: 'text-gray-400' },
      { name: 'mysql', color: 'text-blue-400' },
    ],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    source_code_link: 'https://github.com/manishadeepa/foodnutritionai',
    live_site_link: ''
  },
  {
    name: 'Hostel Management System',
    description: 'A modernized administrative application that implements Wi-Fi-based automatic attendance tracking. By transitioning the system to automated checkpoints, it completely eliminates proxy attendance entries and significantly drastically reduces manual workload for hostel administrators. It serves as a secure, real-time logging infrastructure for student tracking and management.',
    tags: [
      { name: 'react', color: 'text-cyan-400' },
      { name: 'tailwind', color: 'text-teal-400' },
      { name: 'mysql', color: 'text-blue-400' },
    ],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
    source_code_link: 'https://github.com/manishadeepa/hostel-app',
    live_site_link: ''
  },
  {
    name: 'Fake News Detection Extension',
    description: 'An end-to-end ML system fine-tuning a RoBERTa transformer on the LIAR dataset to classify news as fake, uncertain, or real. Deployed via a FastAPI backend paired with a Chrome browser extension that extracts live article text and displays real-time credibility verdicts with confidence scores.',
    tags: [
      { name: 'huggingface', color: 'text-yellow-400' },
      { name: 'fastapi', color: 'text-emerald-400' },
      { name: 'javascript', color: 'text-cyan-400' },
    ],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    source_code_link: '',
    live_site_link: ''
  }
];

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_site_link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Tilt
        options={{ max: 25, scale: 1.02, speed: 450 }}
        className="glass-panel p-5 rounded-2xl sm:w-[360px] w-full border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          
          <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover">
            {live_site_link && (
              <div
                onClick={() => window.open(live_site_link, "_blank")}
                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex justify-center items-center cursor-pointer hover:bg-cyan-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            )}
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex justify-center items-center cursor-pointer hover:bg-white text-white hover:text-black transition-colors"
              >
                <GithubIcon className="w-5 h-5" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 text-left">
          <h3 className="text-white font-bold text-2xl group-hover:text-cyan-400 transition-colors">{name}</h3>
          <p className="mt-2 text-gray-400 text-[14px] leading-relaxed">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-left">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-6 sm:px-16 max-w-7xl mx-auto min-h-screen z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left text-white mb-16"
      >
        <p className="text-[#00ffff] font-mono text-sm sm:text-base uppercase tracking-wider mb-2">My Work</p>
        <h2 className="text-4xl md:text-6xl font-bold">Projects.</h2>
      </motion.div>

      <div className="w-full flex justify-center md:justify-start -mt-8 mb-16">
        <motion.p
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="text-gray-400 text-lg max-w-3xl leading-relaxed text-center md:text-left"
        >
          Following projects showcase my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to code repositories and live demos. 
          It reflects my ability to solve complex problems, work with different technologies, 
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7 justify-center md:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
