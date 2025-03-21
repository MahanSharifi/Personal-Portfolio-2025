'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navigation = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // Always scroll to top first for hero and about to ensure horizontal scroll works
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Set a small timeout to ensure we're at the top before triggering horizontal scroll
    setTimeout(() => {
      // Create and dispatch a custom event for horizontal scrolling
      const event = new CustomEvent('navigate', { 
        detail: { section: sectionId } 
      });
      window.dispatchEvent(event);
      
      // For vertical sections, scroll to the element after a delay
      if (sectionId !== 'hero' && sectionId !== 'about') {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }, 300);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold purple-gradient cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={(e) => handleNavClick(e as any, 'hero')}
        >
          MP
        </motion.div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="nav-link" onClick={(e) => handleNavClick(e, 'hero')}>Home</a>
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#experience" className="nav-link" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a>
          <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
          <a href="#skills" className="nav-link" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
          <a href="#quotes" className="nav-link" onClick={(e) => handleNavClick(e, 'quotes')}>Quotes</a>
        </div>
        <motion.div 
          className="md:hidden cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 