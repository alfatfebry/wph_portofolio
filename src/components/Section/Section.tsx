import React from 'react';
import Styles from './Section.module.scss';
import clsx from 'clsx';

type SectionProps = {
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  containerWidth?: number;
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({
  className,
  id,
  title,
  subtitle,
  containerWidth,
  children,
}) => {
  const containerStyle = containerWidth
    ? { maxWidth: `${containerWidth / 16} rem` }
    : {};
  return (
    <div className='container' style={containerStyle}>
      <section className={clsx(Styles.section, className)} id={id}>
        <div className={Styles.sectionHeader}>
          <h2 className={Styles.title}>{title}</h2>
          <p className={Styles.subtitle}>{subtitle}</p>
        </div>
        <div className={Styles.sectioContent}>{children}</div>
      </section>
    </div>
  );
};
