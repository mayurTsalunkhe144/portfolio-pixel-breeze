
import React from 'react';
import { ArrowDown, ArrowRight, Mail, Star } from 'lucide-react';
import portfolioData from '@/data/portfolio';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-6 h-6 rounded-full bg-blue-500/30 animate-float"></div>
      <div className="absolute top-32 right-24 w-4 h-4 rounded-full bg-emerald-500/30 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-8 h-8 rounded-full bg-indigo-500/30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-5 h-5 rounded-full bg-rose-500/30 animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          <AnimatedSection animation="fade" className="mb-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4 backdrop-blur-sm border border-blue-500/20">
              <span className="flex items-center gap-1.5">
                <Star size={14} className="animate-pulse-slow" /> {portfolioData.title}
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200} className="mb-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight gradient-text">
              {portfolioData.name}
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={400} className="mb-8">
            <h2 className="text-xl sm:text-2xl text-muted-foreground max-w-2xl">
              {portfolioData.bio}
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade" delay={600} className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="button-primary inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
              Contact Me <ArrowRight size={16} />
            </a>
            <a href="#projects" className="button-secondary inline-flex items-center gap-2 border border-blue-500/20 hover:bg-blue-500/5">
              View Projects <ArrowRight size={16} />
            </a>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about" className="flex items-center flex-col text-muted-foreground hover:text-blue-500 transition-colors duration-300">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
