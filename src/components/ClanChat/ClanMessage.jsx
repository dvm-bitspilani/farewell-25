import { useRef } from "react";
import { randInt } from "../../utils";
import styles from "./ClanChat.module.scss";
import legendLogo from "/imgs/legend-logo.png";

const messageList = [
    ["DVM", "dvm"],
    ["BEST", "best"],
    ["HAI", "hai", "h"],
    ["BC", "bc", "BENCHOD", "benchodd"]
]

export default function ClanMessage({ sender, self }) {

    const messageRef = useRef(messageList.map(list => list[randInt(list.length)]).join(" "));
    const messageTimeRef = useRef()

    return (
        <div className={self ? styles.selfMessage : styles.clanMessage}>
            <div className={styles.messageHead}>
                <img className={styles.senderLeague} src={legendLogo} />
                <div className={styles.senderName}>{sender.name}</div>
            </div>
            <div className={styles.messageBody}>
                <div className={styles.senderRole}>{sender.role}</div>
                <p className={styles.message}>
                    {messageRef.current}
                </p>
                <div className={styles.messageTime}>{(new Date()).getMilliseconds()}</div>
            </div>
        </div>
    )
}
