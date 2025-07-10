import React from 'react';
import Styles from './TechStactButton.module.scss';

interface TechStactButtonProps {
  techStact: string[];
}

export const TechStactButton: React.FC<TechStactButtonProps> = ({
  techStact,
}) => {
  return (
    <>
      {techStact.map((tech) => (
        <span key={tech} className={Styles.techStactItem}>
          {tech}
        </span>
      ))}
    </>
  );
};
