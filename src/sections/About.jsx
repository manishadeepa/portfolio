import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJava, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiFlask, SiC, SiMysql, SiMongodb, SiSupabase } from 'react-icons/si';

const skills = [
  { name: 'React.js', color: 'text-cyan-400', icon: <FaReact /> },
  { name: 'Express.js', color: 'text-green-500', icon: <SiExpress /> },
  { name: 'Flask', color: 'text-gray-400', icon: <SiFlask /> },
  { name: 'Java & C', color: 'text-orange-400', icon: <div className="flex gap-3"><FaJava /><SiC /></div> },
  { name: 'MySQL', color: 'text-blue-400', icon: <SiMysql /> },
  { name: 'MongoDB', color: 'text-green-600', icon: <SiMongodb /> },
  { name: 'Supabase', color: 'text-emerald-500', icon: <SiSupabase /> },
  { name: 'Figma & Git', color: 'text-pink-400', icon: <div className="flex gap-3"><FaFigma /><FaGitAlt /></div> }
];

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6 sm:px-16 max-w-7xl mx-auto min-h-screen flex items-center z-10">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <p className="text-accent-blue font-mono text-sm sm:text-base uppercase tracking-wider mb-2">Introduction</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white">Overview.</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg sm:text-xl max-w-3xl leading-relaxed mb-16 mx-auto md:mx-0"
        >
          I'm a Computer Science and Engineering student at Sri Venkateswara College of Engineering with a passion for web development and software engineering. I specialize in both MERN stack and Python backend development, possessing strong problem-solving and adaptability skills. I actively participate in hackathons and continuously build out applications to challenge myself and deliver robust solutions.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-panel rounded-2xl flex flex-col items-center justify-center p-6 border border-white/5 hover:border-accent-cyan/50 transition-colors cursor-default"
            >
              <div className={`text-4xl sm:text-5xl mb-4 ${skill.color} flex items-center justify-center`}>
                {skill.icon}
              </div>
              <h3 className="text-white font-medium text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.2 }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="mt-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider text-center md:text-left">Certifications</h3>
              <ul className="grid grid-cols-1 gap-4 text-gray-400 list-disc pl-5 max-w-4xl mx-auto md:mx-0">
                <li>Java Programming Fundamentals – Infosys</li>
                <li>Agile Software Development – Infosys</li>
                <li>UI/UX & Graphics Design – Simplilearn</li>
                <li>MongoDB – MongoDB University</li>
                <li>Machine Learning and Azure Databricks - Microsoft</li>
                <li>Transformer Architecture & LLM models - Microsoft</li>
                <li>Agentic AI - Salesforce</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider text-center md:text-left">Achievements</h3>
              <ul className="grid grid-cols-1 gap-4 text-gray-400 list-disc pl-5 max-w-4xl mx-auto md:mx-0">
                <li>Secured <strong className="text-white font-medium">Runner-Up</strong> position at IDEATEX '26 Ideathon for developing Automated Hostel Management System.</li>
                <li>Awarded <strong className="text-white font-medium">Bronze Medal</strong> in Ball Badminton at the Anna University Zonals Tournament.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
