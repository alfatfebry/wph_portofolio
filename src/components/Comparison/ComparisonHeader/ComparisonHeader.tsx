import React from 'react';
import Styles from './ComparisonHeader.module.scss';

type ComparisonHeaderProps = {
  col1Title: string;
  col2Title: string;
  col3Title: string;
};

export const ComparisonHeader: React.FC<ComparisonHeaderProps> = ({
  col1Title,
  col2Title,
  col3Title,
}) => {
  return (
    <>
      <div className={Styles.col1}>{col1Title}</div>
      <div className={Styles.col2}>{col2Title}</div>
      <div className={Styles.col3}>{col3Title}</div>
    </>
  );
};
