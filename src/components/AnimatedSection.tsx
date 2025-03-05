
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  threshold?: number; // Value between 0 and 1
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'scale';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  animation = 'fade',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade':
        return 'animate-fade-in';
      case 'slide-up':
        return 'animate-slide-up';
      case 'slide-down':
        return 'animate-slide-down';
      case 'scale':
        return 'animate-scale-in';
      default:
        return 'animate-fade-in';
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a timeout for the delay
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          // Once visible, stop observing
          observer.unobserve(section);
        }
      },
      {
        threshold, // Trigger when X% of the element is visible
        rootMargin: '0px 0px -10% 0px', // Trigger slightly before the element is in view
      }
    );

    observer.observe(section);

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [delay, threshold]);

  return (
    <div 
      ref={sectionRef}
      className={cn(
        'opacity-0',
        isVisible && getAnimationClass(),
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
