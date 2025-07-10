import React from 'react';
import Styles from './FadeWrapper.module.scss';

export const FadeWrapper: React.FC = () => {
  return (
    <>
      <div className={Styles.waveWrapper}></div>
    </>
  );
};
