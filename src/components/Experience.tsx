
import React from 'react';
import portfolioData from '@/data/portfolio';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      
      <div className="grid gap-10 md:gap-16">
        {portfolioData.experience.map((exp, index) => (
          <AnimatedSection 
            key={index} 
            animation="slide-up" 
            delay={index * 100}
            className="relative"
          >
            <div className="card-project p-6 md:p-8">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-bl-full"></div>
              
              <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <Briefcase size={16} className="mr-1 text-primary" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:items-end gap-1">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={16} className="mr-1" />
                    <span>{exp.fromDate} - {exp.toDate}</span>
                  </div>
                </div>
              </div>
              
              <p className="mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="bg-accent text-accent-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-l-4 border-b-4 border-primary/30 dark:border-primary/40 rounded-bl-xl"></div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Experience;
