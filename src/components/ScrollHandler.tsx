import React, { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollHandlerProps {
  containerRef: RefObject<HTMLDivElement>;
  sectionRef: RefObject<HTMLDivElement>;
}

const ScrollHandler: React.FC<ScrollHandlerProps> = ({ containerRef, sectionRef }) => {
  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const sections = gsap.utils.toArray('.section-panel');
    const container = containerRef.current;
    const panelWidth = container.offsetWidth;
    
    // Create the horizontal scroll effect
    const horizontalScroll = gsap.to(container, {
      x: () => -(panelWidth * (sections.length - 1)),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${panelWidth * (sections.length - 1)}`,
        invalidateOnRefresh: true,
      }
    });

    return () => {
      // Clean up the ScrollTrigger when the component unmounts
      if (horizontalScroll.scrollTrigger) {
        horizontalScroll.scrollTrigger.kill();
      }
    };
  }, [containerRef, sectionRef]);
  
  // This component doesn't render anything visible
  return null;
};

export default ScrollHandler; 