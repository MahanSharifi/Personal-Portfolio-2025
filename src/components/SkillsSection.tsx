import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay }) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-4 purple-gradient">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span 
            key={index}
            className="px-3 py-1 bg-[rgba(138,43,226,0.1)] rounded-full text-sm text-gray-300 border border-[rgba(138,43,226,0.2)]"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: 'rgba(138,43,226,0.2)',
              borderColor: 'rgba(138,43,226,0.4)' 
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "C#", "Python", "C", "JavaScript", "TypeScript", "Kotlin", "R", "SQL", "HTML/CSS", "VBA", "ARM/MIPS", "Bash"]
    },
    {
      title: "Tools & Frameworks",
      skills: ["Kubernetes", "Docker", "AWS", "React", "Angular", "Next.js", "Jetpack Compose", ".NET", "Flask", "Git", "NumPy", "PyTorch", "gRPC"]
    },
    {
      title: "AI Tools",
      skills: ["LangGraph", "FireWorks.AI", "Qdrant", "Claude", "OpenAI", "Gemini", "Cursor"]
    }
  ];

  return (
    <section id="skills" className="vertical-section py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical <span className="purple-gradient">Skills</span>
        </motion.h2>
        
        <div className="grid-container">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 