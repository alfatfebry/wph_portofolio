import React from 'react';
import Styles from './FAQItem.module.scss';
import ArrowIcon from '@/assets/down-arrow-icon.svg';
import clsx from 'clsx';
import { inView, motion, Varianst } from 'framer-motion';

const faqItemVarians = {
  inView: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.5,
    },
  },

  outOfView: {
    opacity: 0,
    x: -30,
  },

  collapsed: {
    transition: {
      duration: 0.3,
    },
  },

  expanded: {
    padding: '2px',
    transition: {
      duration: 0.5,
    },
  },
};

export const FAQItem: React.FC = () => {
  return (
    <div className={Styles.faqItem}>
      <div className={Styles.borderAnimation} />

      <div className={Styles.faq}>
        <div className={Styles.faqHeader}>
          <p className={Styles.faqQuestion}></p>
          <div className={Styles.faqIcon}>
            <ArrowIcon />
          </div>
        </div>

        <div className={Styles.faqDetil}>
          <div className={Styles.faqAnswer}></div>
        </div>
      </div>
    </div>
  );
};
