import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ExperienceItemProps {
  company: string;
  role: string;
  date: string;
  description: string[];
  delay: number;
  logo?: string; // Optional logo path
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, role, date, description, delay, logo }) => {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-3">
        {logo && (
          <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded-md bg-white p-1">
            <Image 
              src={logo} 
              alt={`${company} logo`} 
              width={48} 
              height={48} 
              className="object-contain"
            />
          </div>
        )}
        <h3 className="text-xl font-bold">{company}</h3>
      </div>
      <div className="flex justify-between items-center mb-2">
        <p className="font-medium purple-gradient">{role}</p>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
      <ul className="mt-3 space-y-2 text-gray-300">
        {description.map((item, index) => (
          <li key={index} className="text-sm">• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Super.com",
      role: "SWE Intern",
      date: "May 2025",
      description: [
        "TBD"
      ],
      logo: "/super-com.png"
    },
    {
      company: "Wintract",
      role: "Founding Engineer (Full Time)",
      date: "Jan 2025 - Present",
      description: [
        "AI-driven government contract platform with Next.js/React, TS, Python, and Qdrant, AWS, Heroku, enhancing search, and compliance extraction with LLM's (Claude, OpenAI, Gemini) pipelines",
        "Computer vision compliance matrix pipeline using Azure Service bus for concurrent message processing",
        "AI contract agent that automates contract search with research analysis using Python and Qdrant for similarity search, FireWorks.AI and LangGraph for orchestration and other LLMs"
      ]
    },
    {
      company: "Thomson Reuters",
      role: "Software Engineer Intern",
      date: "May 2024 - Aug 2024",
      description: [
        "Engineered a GCP Kubernetes-based Patch Management System microservice for containerized services (Docker), automating rollouts across environments with Kubernetes (scaling) and Terraform (infrastructure), saving 3 days per release cycle for core library used to build 200+ components",
        "Developed and packaged reusable Angular Components using TS, standardized application development, and enhanced consistency for legacy C# and .NET components by distributing via npm",
        "Implemented Azure Service Bus to facilitate efficient message brokering across distributed data centers"
      ],
      logo: "/newthomsonreuters.jpg"
    },
    {
      company: "Descartes Systems Group",
      role: "Software Engineer Intern (Internal Tools)",
      date: "Sept 2023 - Dec 2023",
      description: [
        "Created an internal tool for Execs to enable account auditing in the active directory using .NET, C#, JS, Ajax, Fetch API, React, and SQL, reducing the audit time by half",
        "Revamped Threading Migration tool with C++ by automating the migration trigger, enhancing thread optimization, and instituting a master-slave hierarchy, increasing system reliability by 33%",
        "Developed an internal tool streamlining exec-employee communication, including role-based 0-config authorization and enabling seamless notification delivery to 250+ products",
        "Developed prototype features for the OneFace app with TS, C#, and React, following the MVC design pattern"
      ],
      logo: "/new descartes.jpeg"
    },
    {
      company: "Descartes Systems Group",
      role: "Software Engineer Intern (Infrastructure)",
      date: "Jan 2023 - May 2023",
      description: [
        "Engineered a C#/.NET encryption scheme with CIDR-based IP blacklisting, port scanning, and SYN flood detection, mitigating DoS attacks, spam pings, and OWASP vulnerabilities, securing 200+ products",
        "Developed Python and PowerShell scripts to parse source code, identify SQL injection vulnerabilities, and detect security flags; integrated these scripts into custom CI pipelines to automate security checks on each pr"
      ],
      logo: "/new descartes.jpeg"
    },
    {
      company: "Uptake",
      role: "Full Stack Developer Intern",
      date: "May 2022 - Sept 2022",
      description: [
        "Created GET/POST API endpoints using Angular Https and C# to ensure data availability for affiliated dealers",
        "Architected migration of ASP.NET to ASP.NET Core with Angular, ensuring API behaviour client-configured logic"
      ],
      logo: "/uptake.jpg"
    },
    {
      company: "Teranet",
      role: "Software Developer Intern",
      date: "Sept 2021 - Dec 2021",
      description: [
        "Engineered JSON Parser Validation tool to migrate codebase to .NET Core 6, using C#, .NET, SQL, and Jenkins"
      ],
      logo: "/teranet.jpg"
    }
  ];

  return (
    <section id="experience" className="vertical-section py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="purple-gradient">Work</span> Experience
        </motion.h2>
        
        <div className="grid-container">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              company={exp.company}
              role={exp.role}
              date={exp.date}
              description={exp.description}
              delay={index * 0.1}
              logo={exp.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 