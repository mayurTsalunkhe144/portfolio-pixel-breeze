
import React, { useState } from 'react';
import portfolioData, { Project } from '@/data/portfolio';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Projects: React.FC = () => {
  const [category, setCategory] = useState<string>('all');
  
  const filteredProjects = category === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === category);
  
  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'design', label: 'Design' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 bg-secondary/30">
      <div className="section-container">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-title">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Check out the code repositories and live demos.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade" className="mb-10 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === cat.value 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <AnimatedSection 
      animation="scale" 
      delay={100 * index}
      className="card-project group h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-52">
        <img 
          src={project.thumbnail || 'https://via.placeholder.com/400x300'} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex gap-3 justify-end">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full transition-all duration-300"
                  aria-label="GitHub Repository"
                >
                  <Github size={18} className="text-white" />
                </a>
              )}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full transition-all duration-300"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={18} className="text-white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
        
        <div className="mt-4 pt-4 border-t border-border/40">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span 
                key={i} 
                className="skill-badge text-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
