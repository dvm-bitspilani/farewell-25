import styles from "./BottomDiv.module.scss";
import attackImage from "/svgs/bottom-left.svg";
import oasisLogo from "/imgs/oasis-logo.png";
import apogeeLogo from "/imgs/apogee-logo.png";
import bosmLogo from "/imgs/bosm-logo.png";
import soundMute from "/svgs/sound-mute.svg";
import soundOpen from "/svgs/sound-open.svg";
// import soundImage from "/imgs/middle-right-3.png";
import COCButton from "../cocButton/COCButton";
import { useState, useRef } from "react";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import mapIcon from "/imgs/coc-map-icon.png";
import bgMusic from "/audio/bg-music.mp3";

export default function BottomDiv() {
  const [musicPlaying, setMusicPlaying] = useState(false); // later recieved via state
  const audioRef = useRef(new Audio(bgMusic));

  return (
    <div className={styles.bottomDiv}>
      <audio src={bgMusic} loop ref={audioRef}></audio>
      {/* <COCButton className={styles.attackButton} color="#C46A15">
                <div className={styles.starsContainer}>
                    {
                        Array(5).fill(null).map((_, i) => <FaStar className={styles.star} stroke="#f4973e" strokeWidth={36} />)
                    }
                </div>
                <img className={styles.mapImg} src={mapIcon} />
            </COCButton> */}
      <div className={styles.festContainer}>
        <COCButton className={styles.festLogoWrapper} color="#C46A15">
          <img src={bosmLogo} alt="bosm-logo" className={styles.festLogo} />
        </COCButton>
        <COCButton className={styles.festLogoWrapper} color="#C46A15">
          <img src={oasisLogo} alt="oasis-logo" className={styles.festLogo} />
        </COCButton>
        <COCButton className={styles.festLogoWrapper} color="#C46A15">
          <img src={apogeeLogo} alt="apogee-logo" className={styles.festLogo} />
        </COCButton>
      </div>
      {/* <img src={soundImage} className={styles.soundButton} /> */}
      {musicPlaying ? (
        <img
          src={soundOpen}
          alt="sound open"
          className={styles.soundButton}
          onClick={() => {
            setMusicPlaying((prev) => !prev);
            if (musicPlaying) {
              audioRef.current.pause();
            } else {
              audioRef.current.play();
            }
          }}
        />
      ) : (
        <img
          src={soundMute}
          alt="sound mute"
          className={styles.soundButton}
          onClick={() => {
            setMusicPlaying((prev) => !prev);
            if (musicPlaying) {
              audioRef.current.pause();
            } else {
              audioRef.current.play();
            }
          }}
        />
      )}
      {/* <COCButton
        className={styles.soundButton}
        onClick={() => {
          setMusicPlaying((prev) => !prev);
          if (musicPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }
        }}
        color="#C46A15"
      >
        {musicPlaying ? (
          <IoVolumeHigh
            className={styles.volumeIcon}
            strokeWidth={20}
            stroke="#000"
          />
        ) : (
          <IoVolumeMute
            className={styles.volumeIcon}
            strokeWidth={20}
            stroke="#000"
          />
        )}
      </COCButton> */}
    </div>
  );
}
