
import React, { useState } from 'react';
import portfolioData, { Skill } from '@/data/portfolio';
import AnimatedSection from './AnimatedSection';
import { Award, Code, PaintBucket, Terminal, Wrench, Brain } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { value: 'all', label: 'All Skills', icon: <Award size={18} /> },
    { value: 'frontend', label: 'Frontend', icon: <Code size={18} /> },
    { value: 'backend', label: 'Backend', icon: <Terminal size={18} /> },
    { value: 'design', label: 'Design', icon: <PaintBucket size={18} /> },
    { value: 'tools', label: 'Tools', icon: <Wrench size={18} /> },
    { value: 'other', label: 'Other', icon: <Brain size={18} /> },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? portfolioData.skills 
    : portfolioData.skills.filter(skill => skill.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'frontend': return 'bg-indigo-100 text-indigo-700';
      case 'backend': return 'bg-emerald-100 text-emerald-700';
      case 'design': return 'bg-rose-100 text-rose-700';
      case 'tools': return 'bg-amber-100 text-amber-700';
      case 'other': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-500 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-emerald-500 filter blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="section-title">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm proficient in a range of technologies. Here are some of my key skills.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade" className="mb-10 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.value 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillItem 
              key={skill.name} 
              skill={skill} 
              index={index} 
              categoryColor={getCategoryColor(skill.category)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillItemProps {
  skill: Skill;
  index: number;
  categoryColor: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index, categoryColor }) => {
  return (
    <AnimatedSection 
      animation="scale" 
      delay={50 * index}
      className="rounded-xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg border border-border/40 bg-card/80 backdrop-blur-sm"
    >
      <div className={`w-10 h-10 flex items-center justify-center rounded-full mb-3 ${categoryColor}`}>
        {skill.level === 5 ? (
          <Award className="w-5 h-5" />
        ) : (
          <div className="font-bold">{skill.level}</div>
        )}
      </div>
      <h3 className="font-semibold mb-2">{skill.name}</h3>
      <div className="w-full mt-2">
        <div className="w-full bg-secondary rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 animate-pulse-slow ${
              skill.category === 'frontend' 
                ? 'bg-indigo-500' 
                : skill.category === 'backend' 
                ? 'bg-emerald-500' 
                : skill.category === 'design' 
                ? 'bg-rose-500' 
                : skill.category === 'tools' 
                ? 'bg-amber-500' 
                : 'bg-blue-500'
            }`}
            style={{ width: `${(skill.level / 5) * 100}%` }}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
