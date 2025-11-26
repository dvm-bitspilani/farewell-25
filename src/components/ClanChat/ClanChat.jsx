import { RiArrowLeftWideFill, RiArrowLeftWideLine } from "react-icons/ri";
import ClanBanner from "./ClanBanner";
import styles from "./ClanChat.module.scss";
import COCButton from "../cocButton/COCButton";
import ClanMessage from "./ClanMessage";
import { randInt } from "../../utils";
import { BiSolidSend } from "react-icons/bi";
import reqIcon from "/imgs/req-icon.png"

export default function ClanChat({ chatOpened, onClose }) {
    return (
        <div className={chatOpened ? styles.chatWrapperOpen : styles.chatWrapper}>
            <div className={styles.clanChat}>
                <ClanBanner />
                <div className={styles.chatArea}>
                    {Array(10).fill(null).map(() => <ClanMessage sender={{ name: "Mai-san", role: "front-end" }} self={randInt(2)} />)}
                </div>
                <div className={styles.chatBottom}>
                    <div className={styles.chatInputWrapper}>
                        <div className={styles.chatInput}>
                            <input type="text" placeholder="Clan Message..." />
                            <BiSolidSend className={styles.sendIcon} />
                        </div>
                    </div>
                    <COCButton className={styles.challengeButton} color="#8bce44"><span>Challenge</span></COCButton>
                    <COCButton className={styles.donationReqButton} color="#8bce44">
                        <img src={reqIcon} />
                    </COCButton>
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
