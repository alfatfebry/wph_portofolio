import React from 'react';
import Styles from './Achievement.module.scss';
import clsx from 'clsx';
import { AchievementGroup } from './AchievementGroup';
import { motion, Variants } from 'framer-motion';

const achievementVariants: Variants = {
  inView: {
    transition: { staggerChildren: 0.4 },
  },
};

type AchievementProps = {
  children: React.ReactNode;
};

type SubComponens = {
  Item: typeof AchievementGroup.Item;
  Group: typeof AchievementGroup;
};

const Achievement: React.FC<AchievementProps> & SubComponens = ({
  children,
}) => {
  return (
    <motion.div
      className={clsx(Styles.achievementList)}
      variants={achievementVariants}
      initial='outOfView'
      whileInView='inView'
      viewport={{ once: true, amount: 0.35 }}
    >
      {children}
    </motion.div>
  );
};

export default Achievement;

Achievement.Group = AchievementGroup;
Achievement.Item = AchievementGroup.Item;
