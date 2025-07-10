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
      <section id='home' className={Styles.hero} ref={containerRef}>
        <FadeWrapper
          type='end'
          direction='vertical'
          className={Styles.wavesWrapper}
        >
          <div className={Styles.wavesBackground} />
        </FadeWrapper>

        <div className={Styles.overflowWrapper}>
          <div className={Styles.container}>
            {/* Label */}
            <div className={Styles.label}>👨🏻 Febry Alfat Portfolio</div>

            {/* Title */}
            <h1 className={Styles.title}>
              I am a{' '}
              <span className={Styles.highlight}>
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
                  <>
                    <span className={Styles.box}>
                      <p className={Styles.boxText}>Front-End Developer</p>
                      <span className={Styles.cornerTopRight}></span>
                      <span className={Styles.cornerBottomLeft}></span>
                    </span>
                  </>
                )}
              </span>{' '}
              & Web Programming Instructor
            </h1>

            {/* Description */}
            <p className={Styles.description}>
              I am a Front-End Developer who loves to create beautiful and
              functional websites. I am also a tech enthusiast who loves to
              learn new things.
            </p>

            {/* CTA Button */}
            <Button as='a' href='#contactMe' className={Styles.ctaButton}>
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
