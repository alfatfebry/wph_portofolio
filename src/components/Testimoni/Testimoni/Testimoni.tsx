import React from 'react';
import Styles from './Testimoni.module.scss';
import { Section } from '@/components/Section';
import Marquee from 'react-marquee-slider';
import { TestimoniListData } from '@/constant/testimoniListData';
import { TestimoniCard } from '@/components/Ui/TestimoniCard';

export const Testimoni: React.FC = () => {
  return (
    <>
      <Section
        id='testimoni'
        title='Testimoni'
        subtitle='Hear from clients and colleagues about their experiences working with me.'
        className={Styles.testimoniWrapper}
      >
        <Marquee velocity={20} direction='ltr' resetAfterTries={100}>
          {TestimoniListData.map((testimoni) => (
            <div key={testimoni.id} className={Styles.testimoniCardContainer}>
              <TestimoniCard
                img={testimoni.img}
                name={testimoni.name}
                position={testimoni.position}
                testimoni={testimoni.testimoni}
              />
            </div>
          ))}
        </Marquee>
        <Marquee velocity={20} direction='rtl' resetAfterTries={100}>
          {TestimoniListData.map((testimoni) => (
            <div key={testimoni.id} className={Styles.testimoniCardContainer}>
              <TestimoniCard
                img={testimoni.img}
                name={testimoni.name}
                position={testimoni.position}
                testimoni={testimoni.testimoni}
              />
            </div>
          ))}
        </Marquee>
      </Section>
    </>
  );
};
