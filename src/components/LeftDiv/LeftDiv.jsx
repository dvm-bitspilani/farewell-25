import styles from "./LeftDiv.module.scss";
import topLeft from "/svgs/top-left.svg";
// import topLeftSub from "/svgs/top-left-sub.svg";
import trophyCountImg from "/imgs/trophy-count.png"
import middleLeft from "/svgs/middle-left.svg";
import bottomLeft from "/svgs/bottom-left.svg";
import { useState } from "react";
import ClanChat from "../ClanChat/ClanChat";

function LeftDiv({ className }) {
  const [chatOpen, isChatOpen] = useState(false);

  return (
    <div className={`${styles.leftDiv} ${className}`}>
      <img src={topLeft} alt="topLeft" className={styles.topLeft} />
      <div className={styles.trophyCountWrapper}>
        <img src={trophyCountImg} alt="topLeftSub" className={styles.topLeftSub} />
        <div className={styles.trophyCount}>2025</div>
      </div>
      <img src={middleLeft} alt="middleLeft" className={styles.middleLeft} onClick={() => isChatOpen(true)} />
      <img src={bottomLeft} alt="bottomLeft" className={styles.bottomLeft} />
      <ClanChat chatOpened={chatOpen} onClose={() => isChatOpen(false)} />
    </div>
  );
}

export default LeftDiv;
