import React, { useEffect } from 'react';
import Styles from './JourneyItem.module.scss';
import { JourneyDescription } from './JourneyDescription';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import clsx from 'clsx';
import CompanyIcon from '../../../assets/icon-company.svg';
import DateIcon from '../../../assets/icon-date.svg';

type JourneyItemProps = {
  title: string;
  companyName: string;
  datefrom: string;
  dateTo: string;
  lastItem?: boolean;
  children: React.ReactNode;
};

type SubComponent = {
  Description: typeof JourneyDescription;
};

export const JourneyItem: React.FC<JourneyItemProps> & SubComponent = ({
  title,
  companyName,
  datefrom,
  dateTo,
  lastItem,
  children,
}) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const lineControls = useAnimation();

  useEffect(() => {
    if (inView) {
      lineControls.start({ height: '107%' });
    }
  }, [inView, lineControls]);

  return (
    <>
      <div ref={ref} className={Styles.timeline}>
        {!lastItem && (
          <motion.div
            className={Styles.line}
            initial={{ height: 0 }}
            animate={lineControls}
            transition={{ duration: 1, ease: 'easeOut' }}
          ></motion.div>
        )}
        <div className={Styles.circle}></div>
      </div>

      <div className={Styles.content}>
        <h3 className={Styles.title}>{title}</h3>
        <div className={Styles.detail}>
          <div className={clsx(Styles.company, Styles.detailItem)}>
            <CompanyIcon />
            <span className={Styles.companyName}>{companyName}</span>
          </div>
          <div className={Styles.dot} />

          <div className={clsx(Styles.date, Styles.detailItem)}>
            <DateIcon />
            <p className={Styles.dateText}>
              {datefrom} - {dateTo}
            </p>
          </div>
        </div>
        <div className={Styles.description}>{children}</div>
      </div>
    </>
  );
};

JourneyItem.Description = JourneyDescription;
