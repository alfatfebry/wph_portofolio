import React, { useRef, useState, useEffect } from 'react';
import styles from './Hero.module.scss';
import { Button } from '../ui/Button';
import { FadeWrapper } from '../ui/FadeWrapper';

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
    
    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
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
            <div className={styles.label}>👨🏻 Alex&apos;s Portfolio</div>

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
        </div>
      </section>
    </main>
  );
};
