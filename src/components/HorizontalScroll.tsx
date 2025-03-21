'use client';

import React, { useEffect, useRef, useState } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';

const HorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Update classes based on scroll position
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    
    // Add classes based on scroll position
    if (scrollProgress <= 0) {
      wrapper.classList.add('at-first-section');
      wrapper.classList.remove('at-last-section');
    } else if (scrollProgress >= 100) {
      wrapper.classList.add('at-last-section');
      wrapper.classList.remove('at-first-section');
    } else {
      wrapper.classList.remove('at-first-section');
      wrapper.classList.remove('at-last-section');
    }
  }, [scrollProgress]);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleWheel = (e: WheelEvent) => {
      // Only handle horizontal scroll if we're at the top of the page
      if (window.scrollY === 0) {
        // Determine scroll direction
        const direction = e.deltaY > 0 ? 'forward' : 'backward';
        
        // If trying to scroll backward from the first section or forward from the last section
        if ((direction === 'backward' && scrollProgress <= 0) || 
            (direction === 'forward' && scrollProgress >= 100)) {
          // Allow normal scroll
          return;
        }
        
        e.preventDefault();
        
        // Calculate new progress value
        const delta = e.deltaY * 0.5; // Adjust speed
        const newProgress = Math.max(0, Math.min(100, scrollProgress + delta * 0.1));
        setScrollProgress(newProgress);
        
        // Adjust the transform to account for different section widths
        // Hero takes 40%, About takes 60% of the horizontal space
        const translateX = calculateTranslateX(newProgress);
        container.style.transform = `translateX(${translateX}%)`;
        
        // If we've reached the end of horizontal scroll, allow vertical scrolling
        if (newProgress >= 100) {
          document.body.style.overflowY = 'auto';
        } else {
          document.body.style.overflowY = 'hidden';
        }
      }
    };
    
    // Function to calculate translateX based on progress
    const calculateTranslateX = (progress: number) => {
      // For the first 35% of progress, we're in the hero section (was 40%)
      // For the remaining 65% of progress, we're in the about section (was 60%)
      if (progress <= 35) {
        // Scale the first 35% of progress to move through the hero section
        return -(progress * (35 / 35));
      } else {
        // For the remaining 65% of progress, move through the about section
        const aboutProgress = (progress - 35) * (65 / 65);
        return -(35 + aboutProgress);
      }
    };
    
    // Handle touch for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      // Only handle horizontal scroll if we're at the top of the page
      if (window.scrollY > 0) return;
      
      const touchX = e.touches[0].clientX;
      const touchY = e.touches[0].clientY;
      
      const deltaX = touchStartX - touchX;
      const deltaY = touchStartY - touchY;
      
      // Determine scroll direction
      const direction = deltaX > 0 ? 'forward' : 'backward';
      
      // If trying to scroll backward from the first section or forward from the last section
      if ((direction === 'backward' && scrollProgress <= 0) || 
          (direction === 'forward' && scrollProgress >= 100)) {
        // Allow normal scroll
        return;
      }
      
      // If horizontal swipe is more significant than vertical
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
        
        // Calculate new progress
        const newProgress = Math.max(0, Math.min(100, scrollProgress + deltaX * 0.05));
        setScrollProgress(newProgress);
        
        // Calculate the translation with adjusted ratios
        const translateX = calculateTranslateX(newProgress);
        container.style.transform = `translateX(${translateX}%)`;
        
        // Update touch start positions
        touchStartX = touchX;
        touchStartY = touchY;
        
        // If we've reached the end of horizontal scroll, allow vertical scrolling
        if (newProgress >= 100) {
          document.body.style.overflowY = 'auto';
        } else {
          document.body.style.overflowY = 'hidden';
        }
      }
    };

    // Listen for custom navigation events
    const handleNavigation = (e: CustomEvent) => {
      const { section } = e.detail;
      
      if (section === 'hero') {
        setScrollProgress(0);
        container.style.transform = 'translateX(0)';
        document.body.style.overflowY = 'hidden';
      } else if (section === 'about') {
        setScrollProgress(45);
        // Use the adjust calculation for the about section
        const translateX = calculateTranslateX(45);
        container.style.transform = `translateX(${translateX}%)`;
        document.body.style.overflowY = 'hidden';
      }
    };
    
    // Set initial body state but don't lock scrolling unless at the top
    if (window.scrollY === 0) {
      document.body.style.overflowY = 'hidden';
    }
    
    // Function to handle scroll position changes
    const handleScrollPos = () => {
      if (window.scrollY === 0) {
        // We're at the top, enable horizontal scroll controls
        document.body.style.overflowY = scrollProgress >= 100 ? 'auto' : 'hidden';
      } else {
        // We're scrolled down, allow normal scrolling
        document.body.style.overflowY = 'auto';
      }
    };
    
    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('navigate', handleNavigation as EventListener);
    window.addEventListener('scroll', handleScrollPos);
    
    return () => {
      // Cleanup
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('navigate', handleNavigation as EventListener);
      window.removeEventListener('scroll', handleScrollPos);
      document.body.style.overflowY = 'auto';
    };
  }, [scrollProgress]);
  
  // Handle arrow clicks
  const handleArrowClick = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;
    
    // Calculate new position
    const newProgress = direction === 'left' 
      ? Math.max(0, scrollProgress - 35) 
      : Math.min(100, scrollProgress + 35);
      
    // Set new position
    setScrollProgress(newProgress);
    
    // Calculate the translation with adjusted ratios
    const translateX = newProgress <= 35 
      ? -(newProgress * (35/35)) 
      : -(35 + (newProgress - 35) * (65/65));
    
    container.style.transform = `translateX(${translateX}%)`;
    
    // Update overflow
    document.body.style.overflowY = newProgress >= 100 ? 'auto' : 'hidden';
  };
  
  return (
    <div className="horizontal-wrapper" ref={wrapperRef}>
      <div className="horizontal-container" ref={containerRef}>
        <div className="horizontal-section" id="hero">
          <HeroSection />
        </div>
        <div className="horizontal-section" id="about">
          <AboutSection />
        </div>
      </div>
      <div 
        className="left-arrow" 
        onClick={() => handleArrowClick('left')}
      >
        ←
      </div>
      <div 
        className="right-arrow" 
        onClick={() => handleArrowClick('right')}
      >
        →
      </div>
    </div>
  );
};

export default HorizontalScroll; 