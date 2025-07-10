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
      <section id='home' className={styles.hero} ref={containerRef}>
        <FadeWrapper
          type='end'
          direction='vertical'
          className={styles.wavesWrapper}
        >
          <div className={styles.wavesBackground} />
        </FadeWrapper>

        <div className={styles.overflowWrapper}>
          <div className={styles.container}>
            {/* Label */}
            <div className={styles.label}>👨🏻 Febry Alfat Portfolio</div>

            {/* Title */}
            <h1 className={styles.title}>
              I am a{' '}
              <span className={styles.highlight}>
                {isMobile ? (
                  <>
                    <span className={styles.box}>
                      <p className={styles.boxText}>Front-</p>
                      <span className={styles.cornerTopRight}></span>
                      <span className={styles.cornerBottomLeft}></span>
                    </span>
                    <span className={styles.box}>
                      <p className={styles.boxText}>End Developer</p>
                      <span className={styles.cornerTopRight}></span>
                      <span className={styles.cornerBottomLeft}></span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className={styles.box}>
                      <p className={styles.boxText}>Front-End Developer</p>
                      <span className={styles.cornerTopRight}></span>
                      <span className={styles.cornerBottomLeft}></span>
                    </span>
                  </>
                )}
              </span>{' '}
              & Web Programming Instructor
            </h1>

            {/* Description */}
            <p className={styles.description}>
              I am a Front-End Developer who loves to create beautiful and
              functional websites. I am also a tech enthusiast who loves to
              learn new things.
            </p>

            {/* CTA Button */}
            <Button as='a' href='#contactMe' className={styles.ctaButton}>
              Contact Me
            </Button>
          </div>
          <Button as='a' href='#' className={Styles.btnHero}>
            Contact Me
          </Button>
        </div>
      </section>
    </main>
  );
};
