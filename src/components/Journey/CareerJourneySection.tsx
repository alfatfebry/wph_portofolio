import React from 'react';
import { Section } from '../Section';
import clsx from 'clsx';
import Styles from './Journey.module.scss';
import { Journey } from './Journey';

export const CareerJourneySection: React.FC = () => {
  return (
    <Section
      id='journey'
      title='Career Journey'
      subtitle='A visual timeline of key milestones and experiences from over the years.'
      className={clsx(Styles.journeyWrapper)}
    >
      <Journey>
        {new Array(3).fill(null).map((_, index) => (
          <Journey.Item
            title='Fullstack'
            companyName='Tokopedia'
            datefrom='2023'
            dateTo='2023'
            key={`${index} - item`}
          >
            {new Array(4).fill(null).map((_, index) => (
              <Journey.Description key={`${index} - item`}>
                Developed and maintained responsive web applications, improving
                load times by 30% through performance optimization.
              </Journey.Description>
            ))}
          </Journey.Item>
        ))}
      </Journey>
    </Section>
  );
};
