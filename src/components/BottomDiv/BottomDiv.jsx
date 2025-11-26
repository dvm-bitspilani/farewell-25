import styles from './BottomDiv.module.scss';
import attackImage from "/svgs/bottom-left.svg";
import oasisLogo from "/imgs/oasis-logo.png";
import apogeeLogo from "/imgs/apogee-logo.png";
import bosmLogo from "/imgs/bosm-logo.png";
// import soundImage from "/imgs/middle-right-3.png";
import COCButton from '../cocButton/COCButton';
import { useState } from 'react';
import { IoVolumeHigh, IoVolumeMute } from 'react-icons/io5';

export default function BottomDiv() {

    const [musicPlaying, setMusicPlaying] = useState(false); // later recieved via state

    return (
        <div className={styles.bottomDiv}>
            <img src={attackImage} className={styles.attackButton} />
            <div className={styles.festContainer}>
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
            </div>
            {/* <img src={soundImage} className={styles.soundButton} /> */}
            <COCButton className={styles.soundButton} onClick={() => setMusicPlaying(prev => !prev)} color="#C46A15">
                {
                    musicPlaying ?
                        <IoVolumeHigh className={styles.volumeIcon} strokeWidth={20} stroke="#000" />
                        : <IoVolumeMute className={styles.volumeIcon} strokeWidth={20} stroke="#000" />
                }
            </COCButton>
        </div>
    )
}
