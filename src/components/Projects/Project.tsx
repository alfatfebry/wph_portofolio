import React from 'react';
import Styles from './Project.module.scss';
import { ProjectItem } from './ProjectGroup/ProjectItem';
import { motion, Variants } from 'framer-motion';
import { ProjectGroup } from './ProjectGroup';

const projectVarians: Variants = {
  inView: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
  outOfView: {},
};

type ProjectProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Group: typeof ProjectGroup;
  Item: typeof ProjectItem;
};

export const Project: React.FC<ProjectProps> & SubComponents = ({
  children,
}) => {
  return (
    <>
      <motion.div
        variants={projectVarians}
        className={Styles.projectfasd}
        whileInView='inView'
        initial='outOfView'
      >
        {children}
      </motion.div>
    </>
  );
};

Project.Group = ProjectGroup;
Project.Item = ProjectItem;
