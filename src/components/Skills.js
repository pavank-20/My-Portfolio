import React from 'react';
import { FaPython, FaJava, FaDatabase, FaCode, FaTools } from 'react-icons/fa'; // Removed duplicate FaDatabase import
import './Skills.css'

const skillsData = {
  ProgrammingLanguages_web: {
    icon: <FaCode />,
    items: ['Python', 'SQL','C++','DART','HTML','CSS','React','Flutter','JavaScript','RESTful API']
  },
  Utilities_Libraries: {
    icon: <FaPython />,
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Seaborn','SciPy','plotly','Beautifulsoup','Keras','Tensorflow','Firebase']
  },
  Tools_Technologies: {
    icon: <FaDatabase />,
    items: ['Git','GitHub','Docker','AWS','Google Cloud','CI/CD tools','Kubernetes','Linux']
  },
  Software_applications: {
    icon: <FaTools />,
    items: ['MS Excel','MySQL','Power BI','Tableau','VS Code','Jupyter','Fusion 360','LaTeX','Canva']
  },
  SoftSkills: {
    icon: <FaTools />, // Adjust or use a different icon if needed
    items: ['Problem-solving', 'Critical thinking', 'Communication', 'Creativity', 'Adaptability', 'Fast learning']
  }
};






const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {Object.keys(skillsData).map((category) => (
          <div key={category} className="skill-category">
            <div className="category-icon">{skillsData[category].icon}</div>
            <h3 className="category-title">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <ul className="skills-list">
              {skillsData[category].items.map((item) => (
                <li key={item} className="skill-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
