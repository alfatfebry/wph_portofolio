import React from 'react';
import Styles from './Comparison.module.scss';
import { ComparisonHeader } from './ComparisonHeader';
import { ComparisonItem } from './ComparisonItem';

type ComparisonProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Header: typeof ComparisonHeader;
  Item: typeof ComparisonItem;
};

const Comparison: React.FC<ComparisonProps> & SubComponents = ({
  children,
}) => {
  return (
    <div>
      <div className={Styles.comparison}>{children}</div>
    </div>
  );
};

export default Comparison;

Comparison.Item = ComparisonItem;
Comparison.Header = ComparisonHeader;
