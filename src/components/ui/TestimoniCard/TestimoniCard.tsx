import React from 'react';
import Styles from './TestimoniCard.module.scss';

type TestimoniCardProps = {
  img: string;
  name: string;
  position: string;
  testimoni: string;
};

export const TestimoniCard: React.FC<TestimoniCardProps> = ({
  img,
  name,
  position,
  testimoni,
}) => {
  return (
    <div className={Styles.testimoniCard}>
      <div className={Styles.testimoniCardHeader}>
        <img src={img} alt='' className={img} />

        <div className={Styles.testimoniCardContent}>
          <div className={Styles.name}>{name}</div>
          <div className={Styles.position}>{position}</div>
        </div>
      </div>

      <p className={Styles.testimoni}>{testimoni}</p>
    </div>
  );
};
