import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [mobMenuOpen, setMobMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#projects' },
    { name: 'EXPERTISE', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header className={`modern-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" className="logo-container" style={{ textDecoration: 'none' }}>
            <img src="/profile.jpg" alt="Mohd Kaif" className="header-avatar" />
            <div className="logo-minimal">MOHD KAIF</div>
          </a>
          
          <nav className="desktop-nav-minimal">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-item-minimal">
                {link.name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              download="Mohd_Kaif_Resume.pdf"
              className="resume-download-btn"
              title="Download Resume"
            >
              <FileDown size={20} />
            </a>
          </nav>

          <button 
            className="menu-trigger"
            onClick={() => setMobMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobMenuOpen && (
          <motion.div 
            className="fullscreen-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <button className="close-menu" onClick={() => setMobMenuOpen(false)}>
              <X size={40} />
            </button>
            
            <div className="menu-links-large">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobMenuOpen(false)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.8 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                href="/resume.pdf" 
                download="Mohd_Kaif_Resume.pdf"
                className="mobile-resume-btn"
                onClick={() => setMobMenuOpen(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Download Resume <FileDown size={32} />
              </motion.a>
            </div>
            
            <div className="menu-footer">
              <a href="mailto:kaiferizvi2006@gmail.com">kaiferizvi2006@gmail.com</a>
              <div className="socials">
                <a href="https://www.linkedin.com/in/mohdkaifrizvi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/KAIF-RIZVI" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
