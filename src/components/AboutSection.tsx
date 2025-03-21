'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="w-full h-full flex items-center justify-center bg-opacity-95 bg-[var(--background)]">
      <div className="flex flex-col md:flex-row gap-16 max-w-7xl mx-auto p-8 w-full items-center">
        <motion.div 
          className="flex-1 text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center md:text-left">
            <span className="purple-gradient">About</span> Me
          </h2>
          <p className="text-lg mb-6 text-gray-300 leading-relaxed">
            CS graduate at UWaterloo.
          </p>
          <p className="text-lg mb-6 text-gray-300 leading-relaxed">
          Experience in Platform scalability and optimization development, Internal tools and Product, and low latency python, ultra low latency C++, and ML pipelines.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
          We live life forwards, but it’s understood backwards 
          
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
          Regression to the mean
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
          The farthest distance in the world is between how it is, and how you thought it would be          
          </p>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex flex-col gap-6 min-w-[320px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-8 rounded-lg card backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <p className="text-gray-300 text-lg">University of Waterloo</p>
            <p className="text-gray-400">Honours Bachelor of Computer Science</p>
            <p className="text-gray-400">2020 - 2025</p>
          </div>
          
          <div className="p-8 rounded-lg card backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-300 text-lg">519-588-1742</p>
            <p className="text-gray-300 mb-3">m48shari@uwaterloo.ca</p>
            <div className="flex gap-6 mt-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/mahan-sharifi-05447b1ab/" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">LinkedIn</a>
              <a href="https://github.com/MahanSharifi" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 