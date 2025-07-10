import React from 'react';
import Styles from './AchievmentItem.module.scss';
import { Variants, motion } from 'framer-motion';
import clsx from 'clsx';

const ArhievementGroupVariants: Variants = {
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  outOfView: {
    opacity: 0,
    x: -50,
  },
};

type ArchievementItemProps = {
  type?: 'primary' | 'secondary';
  metrix: string;
  detail: string;
};

export const AchievementItem: React.FC<ArchievementItemProps> = ({
  metrix,
  detail,
  type = 'primary',
}) => {
  return (
    <motion.div
      className={clsx(Styles.achievementItem, Styles[type])}
      variants={ArhievementGroupVariants}
    >
      <div className={Styles.metrix}>{metrix}</div>
      <div className={Styles.detail}>{detail}</div>
    </motion.div>
  );
};

export default AchievementItem;
