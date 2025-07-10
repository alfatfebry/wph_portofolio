import React from 'react';
import Styles from './SkillItem.module.scss';
import { motion, Variants } from 'framer-motion';

type SkillItemProps = {
  title: string;
  proficiency: number;
};

export const SkillItem: React.FC<SkillItemProps> = ({ title, proficiency }) => {
  const skillGroupVariants: Variants = {
    inView: {
      width: `${proficiency}%`,
      transition: {
        duration: 1.5,
      },
    },
    outView: {
      width: 0,
    },
  };

  return (
    <>
      <div className={Styles['skill-container']}>
        <div className={Styles['skill-bar']}>
          <div className={Styles['skill-info']}>
            <span className={Styles.title}>{title}</span>
            <span className={Styles.proficiency}>{proficiency}%</span>
          </div>
          <div className={Styles['progress-container']}>
            <motion.div
              className={Styles.progress}
              variants={skillGroupVariants}
            />
          </div>
        </div>
      </div>
    </>
  );
};
