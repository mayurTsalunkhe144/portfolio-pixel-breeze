
import React from 'react';
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import portfolioData from '@/data/portfolio';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          <AnimatedSection animation="fade" className="mb-4">
            <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              {portfolioData.title}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200} className="mb-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight">
              {portfolioData.name}
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={400} className="mb-8">
            <h2 className="text-xl sm:text-2xl text-muted-foreground max-w-2xl">
              {portfolioData.bio}
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade" delay={600} className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="button-primary inline-flex items-center gap-2">
              Contact Me <ArrowRight size={16} />
            </a>
            <a href="#projects" className="button-secondary inline-flex items-center gap-2">
              View Projects <ArrowRight size={16} />
            </a>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about" className="flex items-center flex-col text-muted-foreground hover:text-foreground transition-colors duration-300">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
