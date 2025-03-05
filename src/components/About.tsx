
import React from 'react';
import portfolioData from '@/data/portfolio';
import { FileText, Mail, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      </div>
      
      <div className="section-container">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-title">About Me</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <AnimatedSection className="col-span-1 flex justify-center" animation="scale">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-border/30 shadow-xl">
              <img 
                src={portfolioData.avatar || 'https://via.placeholder.com/300'} 
                alt={portfolioData.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="col-span-1 md:col-span-2" animation="slide-up" delay={200}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">{portfolioData.name}</h3>
              <p className="text-muted-foreground">{portfolioData.about}</p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary" />
                  <span>{portfolioData.email}</span>
                </div>
                
                {portfolioData.location && (
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-primary" />
                    <span>{portfolioData.location}</span>
                  </div>
                )}
              </div>
              
              <div className="pt-4">
                {portfolioData.resume && (
                  <a 
                    href={portfolioData.resume} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="button-primary inline-flex items-center gap-2"
                  >
                    <FileText size={18} />
                    Download Resume
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
