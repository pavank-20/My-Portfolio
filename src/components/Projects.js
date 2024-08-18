import React from 'react';
import './Projects.css';

import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.png';
import project3Image from '../assets/images/project3.png';
import project4Image from '../assets/images/project4.png';

const projects = [
  {
    id: 1,
    image: project1Image,
    title: 'Bussiness Analyst Programme,Finlatics',
    tools: ['Python', 'Power BI'],
    outcome: 'Identified key factors influencing employee attrition, enabling targeted retention strategies and enhancing HR decision-making.',
    githubLink: 'https://github.com/pavank-20/Finlatics',
  },
  {
    id: 2,
    image: project2Image,
    title: 'GOOGLE DATA ANALYTICS CAPSTONE PROJECT',
    tools: ['SQL', 'Excel'],
    outcome: 'Analyzed 5.9M bike data points, revealing usage patterns between casual and member riders',
    githubLink: 'https://github.com/pavank-20/Google-Data-Analytics',
  },
  {
    id: 3,
    image: project3Image,
    title: 'Cricket Analysis Report',
    tools: ['Python', 'Power BI'],
    outcome: 'Optimized team configurations by analyzing player performance data, enhancing strategic decisions for improved match outcomes.',
    githubLink: 'https://github.com/pavank-20/T20-World-Cup-Analytics-using-powerBI',
  },
  {
    id: 4,
    image: project4Image,
    title: 'PYTHON FOR AI/ML AND DL',
    tools: ['Python', 'Jupyter'],
    outcome: 'Developed AQI prediction model using web scraping, data viz, and advanced ML ensemble',
    githubLink: 'https://github.com/pavank-20/IITK-Certification-Program',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-details">
                <p><strong>Tools & Technologies:</strong> {project.tools.join(', ')}</p>
                <p><strong>Outcome:</strong> {project.outcome}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
