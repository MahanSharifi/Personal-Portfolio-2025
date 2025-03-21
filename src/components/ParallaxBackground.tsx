import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParticleProps {
  size: number;
  x: number;
  y: number;
  opacity: number;
  delay: number;
}

const Particle: React.FC<ParticleProps> = ({ size, x, y, opacity, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-[var(--accent)]"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        opacity: opacity,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: opacity, 
        scale: 1,
        filter: `blur(${size > 3 ? 2 : 1}px)`
      }}
      transition={{ 
        duration: 1.5, 
        delay: delay,
        ease: "easeOut"
      }}
    />
  );
};

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = (count: number) => {
      const generatedParticles = [];
      for (let i = 0; i < count; i++) {
        generatedParticles.push({
          id: i,
          size: Math.random() * 5 + 1,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.1,
          delay: Math.random() * 2
        });
      }
      return generatedParticles;
    };

    setParticles(generateParticles(50));
  }, []);

  // Different parallax speeds for different groups of particles
  const y1 = useTransform(scrollY, [0, 2000], [0, 500]);
  const y2 = useTransform(scrollY, [0, 2000], [0, 300]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 700]);

  // Add a subtle rotate effect to the wrapper
  const rotate = useTransform(scrollY, [0, 2000], [0, 5]);

  return (
    <div className="parallax-bg" ref={wrapperRef}>
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(138,43,226,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(138,43,226,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '50px 50px' }}></div>
      
      {/* Glow in the center */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-[rgba(138,43,226,0.2)] to-[rgba(60,20,120,0.05)] blur-[100px]"
        style={{
          y: y2,
          rotate
        }}
      />
      
      {/* Particles with different parallax speeds */}
      {particles.map((particle, index) => {
        const group = index % 3;
        const y = group === 0 ? y1 : group === 1 ? y2 : y3;
        
        return (
          <motion.div key={particle.id} style={{ y }}>
            <Particle
              size={particle.size}
              x={particle.x}
              y={particle.y}
              opacity={particle.opacity}
              delay={particle.delay}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ParallaxBackground; 