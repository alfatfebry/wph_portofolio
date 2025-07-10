import React from 'react';
import Styles from './CoreSkill.module.scss';
import SkillGroup from './Skill/SkillGroup/SkillGroup';
import AnimationGroup from './Animation/AnimationGroup/AnimationGroup';
import { motion, Variants } from 'framer-motion';
import clsx from 'clsx';

const CoreSkillVariants: Variants = {
  inView: {
    transition: { staggerChildren: 0.4 },
  },
};

type CoreSkillProps = {
  children: React.ReactNode;
};

type SubComponent = {
  SkillGroup: typeof SkillGroup;
  AnimationGroup: typeof AnimationGroup;
};

export const CoreSkill: React.FC<CoreSkillProps> & SubComponent = ({
  children,
}) => {
  return (
    <>
      <motion.div
        className={clsx(Styles.coreSkill)}
        variants={CoreSkillVariants}
        initial='outOfView'
        whileInView='inView'
        viewport={{ once: true, amount: 0.35 }}
      >
        {children}
      </motion.div>
    </>
  );
};

CoreSkill.SkillGroup = SkillGroup;
CoreSkill.AnimationGroup = AnimationGroup;
