import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, FileDown } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    title: 'Data Structures and Algorithms',
    category: 'Core Computer Science',
    description: 'A comprehensive engineering repository covering advanced data structures, algorithmic paradigms, and highly optimized problem-solving approaches.',
    tech: ['C++', 'Python', 'Algorithms', 'Logic'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/KAIF-RIZVI/DSA.git'
  },
  {
    title: 'OriginN',
    category: 'Full-Stack Web Development',
    description: 'Architected and developed a premium interactive web platform with an emphasis on state-of-the-art UI/UX design, smooth page transitions, and highly responsive digital environments.',
    tech: ['React.js', 'Frontend Architecture', 'UI/UX Design', 'Web Animations'],
    image: '/OriginN.png',
    liveLink: 'https://www.originn.online',
    liveLinkText: 'Explore OriginN.online',
    developerCredit: 'Developed by MOHD KAIF'
  },
  {
    title: 'NARI PRODUCTION',
    category: 'Web Development',
    description: 'A modern web application encompassing advanced frontend interface architectures and robust backend database integrations.',
    tech: ['React.js', 'JavaScript', 'MySQL', 'HTML/CSS', 'Git', 'Cursor'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    link: 'https://github.com/KAIF-RIZVI/NARI-PRODUCTION.git',
    liveLink: 'https://naari-bdca4.web.app'
  },
  {
    title: 'IBM Virtual AI Internship',
    category: 'Experience & Core Coursework',
    description: 'Artificial Intelligence Virtual Intern at IBM Skills Network. Engineered interactive data dashboards, executed complex preprocessing, and applied Python machine learning techniques (classification, clustering). Masters core fundamentals: OOPS, OS, DBMS, and Web Development.',
    tech: ['Python', 'AI & Data Science', 'Machine Learning', 'Descriptive Stat.'],
    image: '/ibm_certificate.png',
    link: '/MOHD_KAIF_IBM_INTERNSHIP.pdf',
    downloadName: 'MOHD_KAIF_IBM_INTERNSHIP.pdf',
    downloadText: 'DOWNLOAD MOHD KAIF CERTIFICATE'
  }
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div 
      ref={ref}
      style={{ scale: scaleProgress, y: yProgress }}
      className="project-spotlight-card"
      onMouseMove={handleMouseMove}
    >
      <div className="spotlight-layer"></div>
      
      <div className="project-image-box">
         <img src={project.image} alt={project.title} className="project-image-img" />
         <div className="project-watermark-overlay">0{index + 1}</div>
      </div>
      
      <div className="project-content-left relative-z">
        <div className="project-header">
           <span className="project-category">{project.category}</span>
           <span className="project-number">0{index + 1}</span>
        </div>
        <h3 className="project-title-large">{project.title}</h3>
        <p className="project-large-desc">{project.description}</p>
        
        <div className="tech-stack-row">
          {project.tech.map(tech => (
             <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
        
        <div className="project-footer" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {project.link && (
            <a 
               href={project.link} 
               className="protocol-btn"
               target={project.link.startsWith('http') ? "_blank" : undefined}
               rel={project.link.startsWith('http') ? "noopener noreferrer" : undefined}
               download={project.downloadName ? project.downloadName : undefined}
            >
              <span className="btn-text">
                 {project.downloadText || (project.downloadName ? "Download Resume" : "View Work Sample")}
              </span>
              <div className="btn-icon">
                 {project.downloadName ? <FileDown size={20} /> : <ExternalLink size={20} />}
              </div>
            </a>
          )}
          
          {project.liveLink && (
            <a 
               href={project.liveLink.startsWith('http') ? project.liveLink : `https://${project.liveLink}`}
               className="protocol-btn"
               target="_blank"
               rel="noopener noreferrer"
            >
              <span className="btn-text" style={{ textTransform: 'uppercase' }}>{project.liveLinkText || "Live Demo"}</span>
              <div className="btn-icon">
                 <ExternalLink size={20} />
              </div>
            </a>
          )}
        </div>
        
        {project.developerCredit && (
          <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase', fontStyle: 'italic' }}>
            {project.developerCredit}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">A SELECTION OF RECENT ENGINEERING FEATS</p>
        </div>

        <div className="projects-stack">
          {projectsData.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
