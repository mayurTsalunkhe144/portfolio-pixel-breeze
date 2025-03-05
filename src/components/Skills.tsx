
import React, { useState } from 'react';
import portfolioData, { Skill } from '@/data/portfolio';
import AnimatedSection from './AnimatedSection';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { value: 'all', label: 'All Skills' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'design', label: 'Design' },
    { value: 'tools', label: 'Tools' },
    { value: 'other', label: 'Other' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? portfolioData.skills 
    : portfolioData.skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-32">
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.value 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillItemProps {
  skill: Skill;
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
  return (
    <AnimatedSection 
      animation="scale" 
      delay={50 * index}
      className="glassmorphism rounded-xl p-4 flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-5px]"
    >
      <h3 className="font-semibold mb-2">{skill.name}</h3>
      <div className="w-full mt-2">
        <div className="w-full bg-secondary rounded-full h-1.5">
          <div 
            className="bg-primary h-1.5 rounded-full transition-all duration-1000"
            style={{ width: `${(skill.level / 5) * 100}%` }}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
