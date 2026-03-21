import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, TorusKnot, Float } from '@react-three/drei';
import './Hero.css';

const SpaceScene = () => {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
         <TorusKnot args={[1, 0.3, 200, 32]} scale={1.5}>
           <meshStandardMaterial 
              color="#ffffff" 
              wireframe={true} 
              emissive="#8b5cf6" 
              emissiveIntensity={0.8} 
           />
         </TorusKnot>
      </Float>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
    </>
  );
};

const Hero = () => {
  return (
    <section id="about" className="hero-section">
      {/* 3D Background Canvas */}
      <div className="hero-canvas-container-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <SpaceScene />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="container hero-container relative-z">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="greeting-new">Hi, I am Mohd Kaif</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="title-wrapper"
          >
            <h1 className="name">ENGINEERING</h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="title-wrapper"
          >
            <h1 className="name text-gradient">DIGITAL FUTURES</h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hero-bottom"
          >
            <div className="hero-description">
              <p>A visionary Software Development Engineer blending structured architecture with intelligent, scalable, and interactive systems.</p>
            </div>
            
            <a href="#projects" className="explore-btn premium-btn">
              <div className="circle">
                <ArrowDownRight size={28} />
              </div>
              <span className="btn-text">Explore Work</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
