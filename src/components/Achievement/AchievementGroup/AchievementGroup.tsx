import React from 'react';
import { AchievementItem } from './AchievementItem';
import { Variants, motion } from 'framer-motion';
import Styles from './AchievementGroup.module.scss';

const AchievementGroupVariants: Variants = {
  inView: {
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  outOfView: {},
};

type AchievementGroupProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Item: typeof AchievementItem;
};

export const AchievementGroup: React.FC<AchievementGroupProps> &
  SubComponents = ({ children }) => {
  return (
    <>
      <motion.div
        className={Styles.AchievementGroup}
        variants={AchievementGroupVariants}
      >
        {children}
      </motion.div>
    </>
  );
};
AchievementGroup.Item = AchievementItem;
