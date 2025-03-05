
import React from 'react';
import portfolioData from '@/data/portfolio';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Certifications = () => {
  return (
    <section id="certifications" className="section-container">
      <h2 className="section-title">Certifications</h2>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioData.certifications.map((cert, index) => (
          <AnimatedSection 
            key={index} 
            animation="scale" 
            delay={index * 150}
            className="transform-gpu transition-all duration-500 hover:translate-y-[-5px]"
          >
            <div className="glassmorphism p-6 h-full rounded-xl border border-border dark:border-gray-700 flex flex-col relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full -z-10"></div>
              
              <div className="flex items-center mb-4">
                <Award size={22} className="text-primary mr-2 flex-shrink-0" />
                <h3 className="font-semibold text-lg">{cert.title}</h3>
              </div>
              
              <div className="text-muted-foreground mb-2">
                {cert.issuer}
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar size={14} className="mr-1" />
                <span>{cert.date}</span>
              </div>
              
              {cert.credentialId && (
                <div className="text-sm mb-2">
                  <span className="font-medium">Credential ID:</span> {cert.credentialId}
                </div>
              )}
              
              <div className="mt-auto">
                {cert.url && (
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary flex items-center text-sm font-medium hover:underline transition-colors mt-2"
                  >
                    View Certificate
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
              
              {/* Bottom decorative corner */}
              <div className="absolute -bottom-2 -left-2 w-12 h-12 border-l-2 border-b-2 border-primary/30 dark:border-primary/40 rounded-bl-xl"></div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
