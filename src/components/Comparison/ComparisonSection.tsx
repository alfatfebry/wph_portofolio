import React from 'react';
import Styles from './Comparison.module.scss';
import { Section } from '../Section';
import Comparison from './Comparison';

export const ComparisonSection: React.FC = () => {
  return (
    <main>
      <Section
        className={Styles.comparisonWrapper}
        id='Comparison'
        title='Why I Stand Out'
        subtitle='A comparison of my approach and skills against typical programmers.'
      >
        <Comparison>
          <Comparison.Header
            col1Title='Skill'
            col2Title='me'
            col3Title='other'
          />
          {new Array(7).fill(null).map((_, index) => (
            <Comparison.Item
              key={`${index} - item`}
              featureNama='React Expert'
              ourState={true}
              competitorState={false}
            ></Comparison.Item>
          ))}
        </Comparison>
      </Section>
    </main>
  );
};
