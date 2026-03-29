import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Github, Linkedin, Phone, FileDown } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState("idle"); // idle, loading, success, error

  const handleSecureSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Basic Frontend Validation
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    if (!name || !email || !message) {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
      return;
    }

    setFormState("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/kaiferizvi2006@gmail.com", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setFormState("success");
        e.target.reset();
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        console.error("Submission failed");
        setFormState("error");
        setTimeout(() => setFormState("idle"), 3000);
      }
    } catch (error) {
      console.error("Network error", error);
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="section contact-section-premium">
      <div className="container">
        
        <motion.div 
          className="contact-header-premium"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="contact-pretitle">Looking for an Engineer?</span>
          <h2 className="premium-contact-title text-gradient">Let's Connect</h2>
          <p className="contact-subtitle-premium">Currently open to new opportunities, collaborations, and freelance projects involving cutting-edge web or machine learning architectures.</p>
        </motion.div>

        <div className="contact-glass-grid">
          
          <motion.div 
            className="contact-info-card glass"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <div className="contact-orb"></div>
             <h3>Contact Info</h3>
             
             <div className="info-line">
                <MapPin className="info-icon" size={20} />
                <span>New Delhi, India</span>
             </div>
             
             <div className="info-line">
                <Mail className="info-icon" size={20} />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kaiferizvi2006@gmail.com" target="_blank" rel="noopener noreferrer">kaiferizvi2006@gmail.com</a>
             </div>
             
             <div className="info-line">
                <Phone className="info-icon" size={20} />
                <a href="tel:8368530707">8368530707</a>
             </div>
             
             <div className="info-line">
                <FileDown className="info-icon" size={20} />
                <a href="/resume.pdf" download="Mohd_Kaif_Resume.pdf">Download Resume</a>
             </div>
             
             <div className="socials-glass">
                <a href="https://www.linkedin.com/in/mohdkaifrizvi" target="_blank" rel="noopener noreferrer" className="social-pill"><Linkedin size={18} /> LinkedIn</a>
                <a href="https://github.com/KAIF-RIZVI" target="_blank" rel="noopener noreferrer" className="social-pill"><Github size={18} /> GitHub</a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kaiferizvi2006@gmail.com" target="_blank" rel="noopener noreferrer" className="social-pill"><Mail size={18} /> Email Me</a>
             </div>
          </motion.div>

          <form 
            onSubmit={handleSecureSubmit}
            className="contact-form-glass glass"
          >
            {/* FormSubmit Configuration & Security */}
            <input type="hidden" name="_subject" value="New Portfolio Contact Received!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="text" name="_honey" style={{ display: 'none' }} /> {/* Honeypot Bot Trap */}
            <div className="input-group">
              <label>Your Name</label>
              <input type="text" name="name" placeholder="John Doe" required className="glass-input" />
            </div>
            
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="john@example.com" required className="glass-input" />
            </div>
            
            <div className="input-group">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="How can I help you architecture the future?" required className="glass-input"></textarea>
            </div>
            
            <button 
              type="submit" 
              className="glass-submit-btn"
              disabled={formState === 'loading' || formState === 'success'}
              style={{ opacity: formState === 'loading' ? 0.7 : 1 }}
            >
              {formState === 'loading' && 'Authenticating & Sending...'}
              {formState === 'success' && 'Transmission Secured!'}
              {formState === 'error' && 'Validation Error. Retry.'}
              {formState === 'idle' && <>Send Transmission <Send size={18} /></>}
            </button>
          </form>

        </div>
      </div>
      
      <footer className="portfolio-footer">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '2rem', width: '100%' }}>
          <a 
            href="https://www.linkedin.com/in/mohdkaifrizvi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link-wrapper"
          >
            <div className="footer-content">
              <img src="/profile.jpg" alt="Mohd Kaif" className="footer-avatar" />
              <p>Made with love ❤️ by <span>Mohd Kaif</span></p>
            </div>
          </a>
          <a 
            href="/resume.pdf" 
            download="Mohd_Kaif_Resume.pdf"
            className="footer-resume-link"
          >
            <FileDown size={14} /> Download Final Resume
          </a>
        </div>

        <div className="footer-education" style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem', color: 'var(--text-secondary)', width: '100%' }}>
           <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Education</h4>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', alignItems: 'center' }}>
             <p style={{ fontWeight: '500', color: '#fff', fontSize: '1.1rem' }}>B.Tech in Computer Science & Engineering (Data Science)</p>
             <p>KCC Institute of Technology and Management, Greater Noida</p>
             <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', opacity: 0.8, marginTop: '0.2rem', padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
               <span>August 2023 – August 2027</span>
               <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
               <span>CGPA: 8.38 / 10</span>
             </div>
           </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Developed by MOHD KAIF
        </div>
      </footer>
    </section>
  );
};

export default Contact;
