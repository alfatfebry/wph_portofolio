import React from 'react';
import { motion, Variants } from 'framer-motion';
import Styles from './AnimationGroup.module.scss';
import { AnimationItem } from './AnimationItem/AnimationItem';
import clsx from 'clsx';

type AnimationGrupProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Item: typeof AnimationItem;
};

const circleVariants: Variants = {
  start: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const AnimationGroup: React.FC<AnimationGrupProps> & SubComponents = ({
  children,
}) => {
  return (
    <div className={Styles.animationGroup}>
      <motion.div
        className={clsx(Styles.elipsContainer, Styles.circleOuterContainer)}
        variants={circleVariants}
        animate='start'
      >
        {children}
        <motion.div
          className={clsx(Styles.elipsContainer, Styles.middleContainer)}
        >
          <motion.div
            className={clsx(Styles.elipsContainer, Styles.innerContainer)}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimationGroup;

AnimationGroup.Item = AnimationItem;
