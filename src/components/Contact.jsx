import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Github, Linkedin, Phone, FileDown } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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
            action="https://formsubmit.co/kaiferizvi2006@gmail.com" 
            method="POST"
            className="contact-form-glass glass"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Portfolio Contact Received!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
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
            
            <button type="submit" className="glass-submit-btn">
              Send Transmission <Send size={18} />
            </button>
          </form>

        </div>
      </div>
      
      <footer className="portfolio-footer">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
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
      </footer>
    </section>
  );
};

export default Contact;
