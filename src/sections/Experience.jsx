import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Esoft IT Solutions",
    icon: <Briefcase />,
    iconBg: "#383E56",
    date: "Dec 2025 - Jan 2026",
    points: [
      "Built responsive and interactive web applications using HTML, Tailwind CSS, React.js, Flask and MySQL.",
      "Contributed to development, testing, debugging, and performance enhancement."
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "CodeBind Technologies",
    icon: <Briefcase />,
    iconBg: "#1d1836",
    date: "Jan 2025",
    points: [
      "Developed responsive web pages using HTML, CSS, and PHP for business applications.",
      "Assisted in maintaining, optimizing, and improving web performance."
    ],
  },
  {
    title: "Bachelor in Computer Science and Engineering",
    company_name: "Sri Venkateswara College of Engineering",
    icon: <GraduationCap />,
    iconBg: "#383E56",
    date: "2023 - present",
    points: [
      "CGPA: 9.12 (as of 5th semester)."
    ],
  },
  {
    title: "Higher Secondary Education",
    company_name: "Sairam Matriculation Higher Secondary School",
    icon: <GraduationCap />,
    iconBg: "#1d1836",
    date: "2022 - 2023",
    points: [
      "Percentage: 96.5%"
    ],
  }
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}
      contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255, 0.1)' }}
      date={experience.date}
      dateClassName="text-[#00ffff] font-mono pl-4 md:pl-0 pt-2"
      iconStyle={{ background: experience.iconBg, color: '#fff' }}
      icon={experience.icon}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-gray-400 text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-gray-300 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 px-6 sm:px-16 max-w-7xl mx-auto min-h-screen z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-[#00ffff] font-mono text-sm sm:text-base uppercase tracking-wider mb-2">What I have done so far</p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16">Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
