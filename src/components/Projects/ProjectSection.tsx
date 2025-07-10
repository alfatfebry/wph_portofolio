import React from 'react';
import Styles from './Project.module.scss';
import { Project } from './Project';
import { projectConst } from '@/constant/projectConst';

export const ProjectSection: React.FC = () => {
  return (
    <div className='container' id='projects'>
      <div className={Styles.headerProjects}>
        <div>
          <h2 className={Styles.title}>Experience in Front-End Development</h2>
        </div>

        <div>
          <p className={Styles.subtitle}>
            I have experience developing 30+ web projects across various
            industries, including marketplaces, health, fashion, sports, and
            more. Implemented 1000+ responsive web pages with interactive
            features and smooth animations
          </p>
        </div>
      </div>

      <Project>
        <Project.Group>
          {projectConst.map((projectConst, index) => (
            <Project.Item key={index} {...projectConst}></Project.Item>
          ))}
        </Project.Group>
      </Project>
    </div>
  );
};
