import React from 'react';
import HTMLIcon from '@/assets/html.svg';
import CSSIcon from '@/assets/css.svg';
import JSIcon from '@/assets/javascript.svg';
import ReactIcon from '@/assets/react.svg';
import TSIcon from '@/assets/typescript.svg';
import ReduxIcon from '@/assets/redux.svg';
import Styles from '../AnimationItem/AnimationItem.module.scss';
import clsx from 'clsx';
import { Variants, motion } from 'framer-motion';

const skillVariant: Variants = {
  start: {
    rotate: -360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const AnimationItem: React.FC = () => {
  return (
    <>
      <motion.div
        className={clsx(Styles.htmlLogoContainer, Styles.skillContainer)}
        variants={skillVariant}
      >
        <HTMLIcon className={Styles.htmlIcon} />
      </motion.div>
      <motion.div
        className={clsx(Styles.cssLogoContainer, Styles.skillContainer)}
        variants={skillVariant}
      >
        <CSSIcon className={Styles.cssIcon} />
      </motion.div>
      <motion.div
        className={clsx(Styles.jsLogoContainer, Styles.skillContainer)}
        variants={skillVariant}
      >
        <JSIcon className={Styles.jsIcon} />
      </motion.div>
      <motion.div
        className={clsx(Styles.reactLogoContainer, Styles.skillContainer)}
        variants={skillVariant}
      >
        <ReactIcon className={Styles.reactIcon} />
      </motion.div>
      <motion.div
        className={clsx(Styles.tsLogoContainer, Styles.skillContainer)}
        variants={skillVariant}
      >
        <TSIcon className={Styles.tsIcon} />
      </motion.div>
      <motion.div
        className={clsx(Styles.reduxLogoContainer, Styles.skillContainer)}
        variants={skillVariant}
      >
        <ReduxIcon className={Styles.reduxIcon} />
      </motion.div>
    </>
  );
};
