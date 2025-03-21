'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '../components/Navigation';
import HorizontalScroll from '../components/HorizontalScroll';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import QuotesSection from '../components/QuotesSection';
import Footer from '../components/Footer';

// Load only the parallax background with SSR: false
const ParallaxBackground = dynamic(() => import('../components/ParallaxBackground'), { ssr: false });

export default function Home() {
  useEffect(() => {
    // Ensure initial scroll position is at the top
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <ParallaxBackground />
      <Navigation />
      
      {/* Horizontal scroll section (Hero + About) */}
      <HorizontalScroll />
      
      {/* Vertical sections start below horizontal scroll */}
      <div className="vertical-sections">
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <QuotesSection />
        <Footer />
      </div>
    </div>
  );
}
