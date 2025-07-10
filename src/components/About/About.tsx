import clsx from 'clsx';
import React from 'react';
import Styles from './About.module.scss';
import { Video } from '../Ui/Video';

export const About: React.FC = () => {
  return (
    <>
      <div className={clsx(Styles.aboutMeWrapper, 'container')}>
        <Video />
      </div>
    </>
  );
};
