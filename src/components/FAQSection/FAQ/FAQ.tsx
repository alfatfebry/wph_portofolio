import React from 'react';
import styles from './FAQ.module.scss';
import { FAQItem } from './FAQItem';
import { motion, Variants } from 'framer-motion';

type FAQItemProps = React.ComponentProps<typeof FAQItem>;
type FAQItemElement = React.ReactElement<FAQItemProps>;

type FAQProps = {
  children: FAQItemElement | FAQItemElement[];
};

type SubComponents = {
  Item: typeof FAQItem;
};

const faqVariants: Variants = {
  inView: {
    transition: {
      staggerChildren: 0.2
    },
  },
  outOfView: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    },
  },
};

export const FAQ: React.FC<FAQProps> &
SubComponents = ({
  children
}) => {
  return (
    <motion.div
      className={styles.faq}
      variants={faqVariants}
      whileInView='inView'
      initial='outOfView'
      viewport={{ once: true, amount: 0.35 }}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child);
      })}
    </motion.div>
  );
};

FAQ.Item = FAQItem;