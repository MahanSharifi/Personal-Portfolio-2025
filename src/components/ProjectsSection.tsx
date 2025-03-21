import React from 'react';
import { motion } from 'framer-motion';

interface ProjectItemProps {
  title: string;
  tech: string;
  date: string;
  description: string;
  link: string;
  delay: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, tech, date, description, link, delay }) => {
  return (
    <motion.div 
      className="card group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-start mb-2">
        <a href={link} target="_blank" rel="noopener noreferrer" className="group-hover:text-[var(--accent)] transition-colors">
          <h3 className="text-xl font-bold flex items-center">
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </h3>
        </a>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
      <p className="text-sm text-gray-300 mb-3">{description}</p>
      <div className="text-xs text-gray-400">{tech}</div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Neural ML/AI Document Analysis Framework",
      tech: "Python, PyPDF2, BERT, Regex, OpenAI API, NumPy",
      date: "2025",
      description: "Pipeline to generate vector embeddings, enabling efficient automated summarization (cosine similarity)",
      link: "https://github.com/MahanSharifi/EmbeddedVector-PDF-Summarization-System/tree/main"
    },
    {
      title: "Distributed Machine Learning Marketplace",
      tech: "Python, Kubernetes, Flask, Socket.io, PyTorch, gRPC, Next.js",
      date: "2025",
      description: "Developing software to help developers get cheap compute to train large language models",
      link: "#"
    },
    {
      title: "NVIDIA - Parallelization of DFS on DAGs",
      tech: "C++",
      date: "2024",
      description: "Using efficient load balancing and multi-threads to parallelize depth-first search for directed acyclic graphs",
      link: "https://github.com/MahanSharifi/Nvidia-parallel-dfs"
    },
    {
      title: "Task Manager",
      tech: "Kotlin, Jetpack Compose, AWS Cognito/API Gateway/DynamoDB/Lambda, GSON, H2",
      date: "2023",
      description: "Desktop To-Do app. with Windows/MAC installers and a JDBC H2 DB with AWS, and HTTP methods",
      link: "https://github.com/MahanSharifi/TDL"
    },
    {
      title: "Congestion Controlled Pipelined RDT Protocol over UDP",
      tech: "Python",
      date: "2023",
      description: "Protocol to transfer text file from one host to another – accounting for packet loss, duplicates, and order",
      link: "https://github.com/MahanSharifi/CONGESTION-CONTROLLED-PIPELINED-RDT-PROTOCOL-OVER-UDP/blob/main/README.md"
    },
    {
      title: "Harmonic.AI",
      tech: "T3 Framework (Next.js, TS, Drizzle), SpotifyAPI, GoogleMapsAPI, OpenAI",
      date: "2024",
      description: "AI SaaS App. leveraging geospatial data to dynamically curate playlists based on users' listening habits",
      link: "https://github.com/MahanSharifi/HarmonicAI"
    },
    {
      title: "Motive App",
      date: "2023",
      description: [
        "Designed and built an app that centralizes all clubs/events with multiple reviews to help students find interests with ease",
        "Addressed the issue of scattered information about university clubs and events by creating a single central resource",
        "Facilitated meaningful connections between students with similar interests",
        "Provided a platform for students to pursue passions outside of class with like-minded individuals"
      ],
      tech: ["React Native", "Firebase", "UX/UI Design", "User Research"],
      link: "https://sites.google.com/view/motive-app/home"
    },
    {
      title: "Biquadris",
      date: "2022",
      description: [
        "Fully functional two-player object-oriented Tetris game with no memory leaks, and bonus features",
        "Implemented a decorator pattern to keep the code clean, easy to manage, and clear",
        "Designed an MCV UML Diagram to organize project and understand relationships between each class",
        "Worked with two group members over several weeks to accomplish the goal"
      ],
      tech: ["C++", "Object-Oriented Design", "Decorator Pattern", "UML"]
    }
  ];

  return (
    <section id="projects" className="vertical-section py-20 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="purple-gradient">Featured</span> Projects
        </motion.h2>
        
        <div className="grid-container">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              tech={project.tech}
              date={project.date}
              description={project.description}
              link={project.link}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 