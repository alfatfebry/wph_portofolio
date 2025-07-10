import React from 'react';
import Styles from './SkillGroup.module.scss';
import { SkillItem } from './SkillItem';
import { motion, Variants } from 'framer-motion';

const SkillGroupVariants: Variants = {
  inView: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  outView: {},
};

type SkillGroupProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Item: typeof SkillItem;
};

const SkillGroup: React.FC<SkillGroupProps> & SubComponents = ({
  children,
}) => {
  return (
    <>
      <motion.div className={Styles.skillGroup} variants={SkillGroupVariants}>
        {children}
      </motion.div>
    </>
  );
};

export default SkillGroup;

SkillGroup.Item = SkillItem;
