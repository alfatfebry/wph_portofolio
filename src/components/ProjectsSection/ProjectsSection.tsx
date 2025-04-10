import React from 'react';
import styles from './ProjectsSection.module.scss';
import { Projects } from './Projects';
import { projectData } from '@/constants/projects';

export const ProjectsSection: React.FC = () => {
  return (
    <div className='container' id='projects'>
      {/* HeadLine */}
      <div className={styles.headerProjects}>
        <div>
          <h1 className={styles.title}>Experience in Frontend Development</h1>
        </div>
        <div>
          <p className={styles.subtitle}>
            I have experience developing 30+ web projects across various
            industries, including marketplaces, health, fashion, sports, and
            more. Implemented 1000+ responsive web pages with interactive
            features and smooth animations
          </p>
        </div>
      </div>
      <Projects>
        <Projects.Group>
          {projectData.map((project, index) => (
            <Projects.Item key={index} {...project} />
          ))}
        </Projects.Group>
      </Projects>
    </div>
  );
};
