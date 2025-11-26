import styles from "./RightDiv.module.scss";
import topRight from "/svgs/top-right.svg";
import topRightSub from "/svgs/top-right-sub.svg";
// import middleRight1 from "/svgs/middle-right-1.svg";
// import middleRight2 from "/svgs/middle-right-2.svg";
// import middleRight3 from "/imgs/middle-right-3.png";
import oasisLogo from "/imgs/oasis-logo.png";
import apogeeLogo from "/imgs/apogee-logo.png";
import bosmLogo from "/imgs/bosm-logo.png";
import COCButton from "../cocButton/COCButton";
import { useState } from "react";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";

function RightDiv({ className }) {

  const [musicPlaying, setMusicPlaying] = useState(false); // later recieved via state

  return (
    <div className={`${styles.rightDiv} ${className}`}>
      <img src={topRight} alt="topRight" className={styles.topRight} />
      <img src={topRightSub} alt="topRightSub" className={styles.topRightSub} />
      <div className={styles.rightSideButtonContainer}>
        <COCButton className={styles.festLogoWrapper} color="#C46A15">
          <img
            src={bosmLogo}
            alt="bosm-logo"
            className={styles.festLogo}
          />
        </COCButton>
        <COCButton className={styles.festLogoWrapper} color="#C46A15">
          <img
            src={oasisLogo}
            alt="oasis-logo"
            className={styles.festLogo}
          />
        </COCButton>
        <COCButton className={styles.festLogoWrapper} color="#C46A15">
          <img
            src={apogeeLogo}
            alt="apogee-logo"
            className={styles.festLogo}
          />
        </COCButton>
        {/* <img
        src={middleRight3}
        alt="middleRight3"
        className={styles.middleRight3}
      /> */}
        <COCButton className={styles.middleRight3} onClick={() => setMusicPlaying(prev => !prev)} color="#C46A15">
          {
            musicPlaying ?
              <IoVolumeHigh className={styles.volumeIcon} strokeWidth={20} stroke="#000" />
              : <IoVolumeMute className={styles.volumeIcon} strokeWidth={20} stroke="#000" />
          }
        </COCButton>
      </div>
    </div >
  );
}

export default RightDiv;
