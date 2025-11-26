import { RiArrowLeftWideFill, RiArrowLeftWideLine } from "react-icons/ri";
import ClanBanner from "./ClanBanner";
import styles from "./ClanChat.module.scss";
import COCButton from "../cocButton/COCButton";
import ClanMessage from "./ClanMessage";
import { randInt } from "../../utils";

export default function ClanChat({ chatOpened, onClose }) {
    return (
        <div className={chatOpened ? styles.chatWrapperOpen : styles.chatWrapper}>
            <div className={styles.clanChat}>
                <ClanBanner />
                <div className={styles.chatArea}>
                    {Array(10).fill(null).map(() => <ClanMessage sender={{ name: "Mai-san", role: "front-end" }} self={randInt(2)} />)}
                </div>
                <div className={styles.chatBottom}>
                    <div className={styles.chatInput}></div>
                    <div className={styles.challengeButton}></div>
                    <div className={styles.donationReqButton}></div>
                </div>
            </div>
            <div className={styles.closeChatButtonWrapper}>
                <COCButton className={styles.closeChatButton} color="#C46A15" onClick={onClose}>
                    <RiArrowLeftWideLine className={styles.closeChatIcon} stroke="black" strokeWidth={0.3} />
                </COCButton>
            </div>
        </div>
    )
}
