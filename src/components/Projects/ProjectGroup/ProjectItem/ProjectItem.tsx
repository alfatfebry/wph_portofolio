import React from 'react';
import Styles from './ProjectItem.module.scss';
// import { TechStactButton } from '@/components/Ui/TechStackButton';
import IconArrow from '@/assets/iconArrow.svg';
import { motion, Variants } from 'framer-motion';

const achievementGroupVariants: Variants = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  outOfView: {
    opacity: 0,
    x: 35,
  },
};

type ProjectItemProps = {
  title: string;
  techStact: string[];
  description: string;
  buttonLink: string;
  image: string;
};

export const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  // techStact,
  description,
  buttonLink,
  image,
}: ProjectItemProps) => {
  const shortDesc =
    description.length > 75 ? `${description.slice(0, 90)}...` : description;
  return (
    <motion.div
      className={Styles.projectItem}
      variants={achievementGroupVariants}
    >
      <div className={Styles.image}>
        <img src={image} alt='image' />
      </div>
      <div className={Styles.contentProject}>
        <div className={Styles.infoProject}>
          <h1 className={Styles.title}>{title}</h1>
          <div className={Styles.techStact}>
            {/* <TechStactButton techStact={techStact} /> */}
          </div>
          <p className={Styles.descriptionProject}>{shortDesc}</p>
        </div>
        <div className={Styles.buttonProject}>
          <button>{buttonLink}</button>
          <IconArrow />
        </div>
      </div>
    </motion.div>
  );
};
