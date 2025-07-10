import React from 'react';
import Styles from './Achievement.module.scss';
import clsx from 'clsx';
import Achievement from './Achievement';

export const AchievementSection = () => {
  return (
    <>
      <div className={clsx(Styles.achievement, 'container')}>
        <div className={Styles.achievementTxt}>
          <div className={Styles.achievementTitle}>Who am I</div>
          <div className={Styles.description}>
            Hi, I’m Alex, a Front-End Developer & Web Programming Instructor
            based in Jakarta. With over{' '}
            <span className={Styles.experience}>3 years of experience</span>, I
            specialize in crafting interactive, responsive, and user-friendly
            websites that deliver exceptional digital experiences. My expertise
            spans across various industries, including e-commerce, education,
            and SaaS. I am proficient in modern front-end technologies, clean
            coding practices, and performance optimization.
          </div>
        </div>
        <div className={Styles.achievementListWrap}>
          <Achievement>
            <Achievement.Group>
              <Achievement.Item
                type='secondary'
                metrix='3+'
                detail='Years of experiences'
              />
            </Achievement.Group>
          </Achievement>

          <Achievement>
            <Achievement.Group>
              <Achievement.Item type='primary' metrix='20+' detail='Projects' />
            </Achievement.Group>
          </Achievement>
          <Achievement>
            <Achievement.Group>
              <Achievement.Item
                type='secondary'
                metrix='90'
                detail='Stuedent'
              />
            </Achievement.Group>
          </Achievement>

          <Achievement>
            <Achievement.Group>
              <Achievement.Item
                type='primary'
                metrix='20+'
                detail='Happy Clients'
              />
            </Achievement.Group>
          </Achievement>
        </div>
      </div>
    </>
  );
};
