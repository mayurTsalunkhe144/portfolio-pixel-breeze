
import React from 'react';
import portfolioData from '@/data/portfolio';
import { FileText, Mail, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
        {/* Decorative patterns */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]"></div>
      </div>
      
      <div className="section-container">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-title">About Me</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <AnimatedSection className="col-span-1 flex justify-center" animation="scale">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-border/30 shadow-xl float-animation">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt={portfolioData.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-md"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 rounded-tr-md"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 rounded-bl-md"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 rounded-br-md"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="col-span-1 md:col-span-2" animation="slide-up" delay={200}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold gradient-text">
                {portfolioData.name}
              </h3>
              <p className="text-muted-foreground">{portfolioData.about}</p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="group-hover:text-blue-600 transition-colors">{portfolioData.email}</span>
                </div>
                
                {portfolioData.location && (
                  <div className="flex items-center gap-3 group">
                    <div className="p-2 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200 transition-colors">
                      <MapPin size={20} />
                    </div>
                    <span className="group-hover:text-emerald-600 transition-colors">{portfolioData.location}</span>
                  </div>
                )}
              </div>
              
              <div className="pt-4">
                {portfolioData.resume && (
                  <a 
                    href={portfolioData.resume} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
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
