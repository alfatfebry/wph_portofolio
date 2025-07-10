import React from 'react';
import Styles from './ComparisonItem.module.scss';
import IconChecklist from '@/assets/icon-checkList.svg';
import IconUncheck from '@/assets/icon-uncheck.svg';

type ComparisonItemProps = {
  featureNama: string;
  ourState: boolean;
  competitorState: boolean;
};

export const ComparisonItem: React.FC<ComparisonItemProps> = ({
  featureNama,
  ourState,
  competitorState,
}) => {
  return (
    <>
      <div className={Styles.featureName}>{featureNama}</div>
      <div className={Styles.ourState}>
        {ourState ? <IconChecklist /> : <IconUncheck />}
      </div>
      <div className={Styles.competitorState}>
        {competitorState ? <IconChecklist /> : <IconUncheck />}
      </div>
    </>
  );
};
