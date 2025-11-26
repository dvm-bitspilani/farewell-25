import COCButton from "../cocButton/COCButton";
import styles from "./ClanChat.module.scss";
import clanLogo from "/imgs/dvm-clan.png";

export default function ClanBanner() {
    return (
        <COCButton className={styles.clanBanner} color="#908b6e">
            <div className={styles.clanLogoWrapper}>
                <img className={styles.clanLogo} src={clanLogo} />
            </div>
            <div className={styles.clanTitle}>DVM</div>
            <div className={styles.onlineStat}>
                <div>Online:</div>
                <div>22/22</div>
            </div>
        </COCButton>
    )
}
