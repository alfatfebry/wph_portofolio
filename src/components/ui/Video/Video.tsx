import React, { useState } from 'react';
import Styles from './Video.module.scss';
import Thumbnail from '@/assets/thumbnail.png';
import PlayBtnIcon from '@/assets/play-button.svg';

export const Video: React.FC = () => {
  const [isPlay, setIsplay] = useState(false);

  return (
    <>
      <div className={Styles.videoContainer}>
        {!isPlay ? (
          <div className={Styles.videoOverlay} onClick={() => setIsplay(true)}>
            <img
              src={Thumbnail}
              alt='Video thumbnail'
              className={Styles.thumbnail}
            />
            <PlayBtnIcon className={Styles.ctaBtnPlay} />
          </div>
        ) : (
          <iframe
            src='https://www.youtube.com/embed/O-fyNgHdmLI?si=MGyQ5rMNs3BDH-1J'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            className={Styles.videoIframe}
          ></iframe>
        )}
      </div>
    </>
  );
};
