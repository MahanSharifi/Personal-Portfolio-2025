'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center text-center px-6 max-w-4xl w-full">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block">Mahan</span>
          <span className="block purple-gradient">Sharifi</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-10 max-w-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Engineer with experience in full-stack development, AI, and distributed systems.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a 
            href="mailto:m48shari@uwaterloo.ca"
            className="px-8 py-3 rounded-full bg-[var(--accent)] text-white font-medium hover:shadow-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
          <motion.a 
            href="https://github.com/MahanSharifi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-[var(--accent)] text-white font-medium hover:shadow-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 