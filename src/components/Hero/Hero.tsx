import React, { useEffect, useRef, useState } from 'react';
import Styles from './Hero.module.scss';
import { FadeWrapper } from '../Ui/FadeWrapper';
import clsx from 'clsx';
import { Button } from '../Ui/Button';

export const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        setIsMobile(width < 569);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
    };
  }, []);

  return (
    <main>
      <section className={Styles.hero} ref={containerRef}>
        <FadeWrapper />
        <div className={clsx(Styles.overflowWrapper, 'container')}>
          {/* Label */}
          <div className={Styles.labelName}>👨🏻 Febry Portofolio</div>
          <div className={Styles.title}>
            I am a{' '}
            {isMobile ? (
              <>
                <span className={Styles.box}>
                  <p className={Styles.boxText}>Front-</p>
                  <span className={Styles.cornerTopRight}></span>
                  <span className={Styles.cornerBottomLeft}></span>
                </span>
                <span className={Styles.box}>
                  <p className={Styles.boxText}>End Developer</p>
                  <span className={Styles.cornerTopRight}></span>
                  <span className={Styles.cornerBottomLeft}></span>
                </span>
              </>
            ) : (
              <span className={Styles.box}>
                <p className={Styles.boxText}>Front-End Developer</p>
                <span className={Styles.cornerTopRight}></span>
                <span className={Styles.cornerBottomLeft}></span>
              </span>
            )}{' '}
            & Web Programming Engineering
          </div>
          <div className={Styles.description}>
            <p>
              Hi, Im Febry, a passionate web developer with over{' '}
              <span className={Styles.experience}>3 years of experience</span>{' '}
              in creating responsive websites. I also teach aspiring developers
              to master modern web programming and bring their ideas to life.
            </p>
          </div>
          <Button as='a' href='#' className={Styles.btnHero}>
            Contact Me
          </Button>
        </div>
      </section>
    </main>
  );
};
