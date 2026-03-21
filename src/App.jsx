import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer style={{ 
        textAlign: 'center', 
        padding: '3rem 0', 
        color: 'var(--text-secondary)', 
        borderTop: '1px solid var(--border-color)', 
        marginTop: '6rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MOHD KAIF. DIGITAL PORTFOLIO.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
