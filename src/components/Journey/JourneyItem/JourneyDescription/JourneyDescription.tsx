import React from 'react';
import Styles from './JourneyDescription.module.scss';

type JourneyDescriptionProps = {
  children: React.ReactNode;
};

export const JourneyDescription: React.FC<JourneyDescriptionProps> = ({
  children,
}) => {
  return (
    <div className={Styles.journeyDescription}>
      <div className={Styles.dot} />
      {children}
    </div>
  );
};
