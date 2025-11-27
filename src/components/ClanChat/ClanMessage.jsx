import { useRef } from "react";
import { randInt } from "../../utils";
import styles from "./ClanChat.module.scss";
import legendLogo from "/imgs/legend-logo.png";
import seniors from "../CenterDiv/seniors";

const messageList = [
    ["DVM", "dvm"],
    ["BEST", "best"],
    ["HAI", "hai", "h"],
    ["BC", "bc", "BENCHOD", "benchodd"]
]

export default function ClanMessage({  self }) {

    const messageRef = useRef(messageList.map(list => list[randInt(list.length)]).join(" "));
    // const messageTimeRef = useRef()
    const sender = self ? { name: "Rahul Gupta", vertical: "video 2d" } : seniors[Math.floor(Math.random() * seniors.length)];

    return (
        <div className={self ? styles.selfMessage : styles.clanMessage}>
            <div className={styles.messageHead}>
                <img className={styles.senderLeague} src={legendLogo} />
                <div className={styles.senderName}>{sender.name}</div>
            </div>
            <div className={styles.messageBody}>
                <div className={styles.senderRole}>{sender.vertical}</div>
                <p className={styles.message}>
                    {messageRef.current}
                </p>
                <div className={styles.messageTime}>{(new Date()).getMinutes()}m</div>
            </div>
        </div>
    )
}
