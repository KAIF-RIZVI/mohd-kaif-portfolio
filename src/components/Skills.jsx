import React from 'react';
import './Skills.css';

const TRACK_ONE = ['C++', 'PYTHON', 'SQL', 'HTML', 'CSS', 'JAVASCRIPT', 'REACT.JS', 'MYSQL', 'GIT / GITHUB', 'VS CODE', 'CURSOR'];
const TRACK_TWO = ['DATA STRUCTURES & ALGORITHMS', 'OOPS CONCEPTS', 'OPERATING SYSTEMS', 'DBMS', 'WEB DEVELOPMENT', 'ARTIFICIAL INTELLIGENCE', 'DESCRIPTIVE STATISTICS'];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
       <div className="skills-marquee-container">
          <div className="css-marquee">
             <div className="marquee-track track-left">
                {[...TRACK_ONE, ...TRACK_ONE, ...TRACK_ONE].map((skill, index) => (
                  <span key={index} className="marquee-text outline-text">
                    {skill} <span className="dot">•</span>
                  </span>
                ))}
             </div>
          </div>
          
          <div className="css-marquee">
             <div className="marquee-track track-right">
                {[...TRACK_TWO, ...TRACK_TWO, ...TRACK_TWO].map((skill, index) => (
                  <span key={index} className="marquee-text filled-text">
                    {skill} <span className="dot">•</span>
                  </span>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
};

export default Skills;
