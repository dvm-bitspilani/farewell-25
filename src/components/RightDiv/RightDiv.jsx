import styles from "./RightDiv.module.scss";
import topRight from "/svgs/top-right.svg";
import topRightSub from "/svgs/top-right-sub.svg";
// import middleRight1 from "/svgs/middle-right-1.svg";
// import middleRight2 from "/svgs/middle-right-2.svg";
// import middleRight3 from "/imgs/middle-right-3.png";
import bgMusic from "/audio/bg-music.mp3";
import oasisLogo from "/imgs/oasis-logo.png";
import apogeeLogo from "/imgs/apogee-logo.png";
import bosmLogo from "/imgs/bosm-logo.png";
import COCButton from "../cocButton/COCButton";
import { useRef, useState } from "react";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";

function RightDiv({ className }) {
  const musicRef = useRef(null);
  const [musicPlaying, setmusicPlaying] = useState(false);

  return (
    <div className={`${styles.rightDiv} ${className}`}>
      <audio src={bgMusic} loop ref={musicRef}></audio>
      <img src={topRight} alt="topRight" className={styles.topRight} />
      <img src={topRightSub} alt="topRightSub" className={styles.topRightSub} />
      <div className={styles.rightSideButtonContainer}>
        <COCButton
          className={styles.festLogoWrapper}
          color="#C46A15"
          link="https://bits-dvm.org/"
        >
          <img src={bosmLogo} alt="bosm-logo" className={styles.festLogo} />
        </COCButton>
        <COCButton
          className={styles.festLogoWrapper}
          color="#C46A15"
          link="https://www.bits-oasis.org/"
        >
          <img src={oasisLogo} alt="oasis-logo" className={styles.festLogo} />
        </COCButton>
        <COCButton
          className={styles.festLogoWrapper}
          color="#C46A15"
          link="https://www.bits-apogee.org/"
        >
          <img src={apogeeLogo} alt="apogee-logo" className={styles.festLogo} />
        </COCButton>
        {/* <img
        src={middleRight3}
        alt="middleRight3"
        className={styles.middleRight3}
      /> */}
        <COCButton className={styles.middleRight3} color="#C46A15">
          {musicPlaying && musicRef.current && !musicRef.current.paused ? (
            <IoVolumeHigh
              className={styles.volumeIcon}
              strokeWidth={20}
              stroke="#000"
              onClick={() => {
                if (musicRef.current) {
                  musicRef.current.pause();
                  setmusicPlaying(false);
                }
              }}
            />
          ) : (
            <IoVolumeMute
              className={styles.volumeIcon}
              strokeWidth={20}
              stroke="#000"
              onClick={() => {
                if (musicRef.current) {
                  musicRef.current.play();
                  setmusicPlaying(true);
                }
              }}
            />
          )}
        </COCButton>
      </div>
    </div>
  );
}

export default RightDiv;
