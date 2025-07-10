import React from 'react';
import Styles from './ProjectGroup.module.scss';
import { ProjectItem } from './ProjectItem';
import { motion, Variants } from 'framer-motion';

const ProjectGroupVariants: Variants = {
  inView: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  ouOfView: {},
};

type ProjectGroupProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Item: typeof ProjectItem;
};

export const ProjectGroup: React.FC<ProjectGroupProps> & SubComponents = ({
  children,
}) => {
  return (
    <>
      <motion.div
        className={Styles.projectGroup}
        variants={ProjectGroupVariants}
      >
        {children}
      </motion.div>
    </>
  );
};

ProjectGroup.Item = ProjectItem;
