import styles from "./LeftDiv.module.scss";
import topLeft from "/svgs/top-left.svg";
// import topLeftSub from "/svgs/top-left-sub.svg";
import trophyCountImg from "/imgs/trophy-count.png";
import middleLeft from "/svgs/middle-left.svg";
import bottomLeft from "/svgs/bottom-left.svg";
import { useState } from "react";
import ClanChat from "../ClanChat/ClanChat";
import chatIcon from "/imgs/chat-icon.png";
import COCButton from "../cocButton/COCButton";
import { FaStar } from "react-icons/fa";
import mapIcon from "/imgs/coc-map-icon.png";
import TopXPBar from "./TopXPBar";

function LeftDiv({ className, setChatOpen }) {

  return (
    <div className={`${styles.leftDiv} ${className}`}>
      {/* <img src={topLeft} alt="topLeft" className={styles.topLeft} /> */}
      <TopXPBar className={styles.topLeft} />
      <div className={styles.trophyCountWrapper}>
        <img
          src={trophyCountImg}
          alt="topLeftSub"
          className={styles.topLeftSub}
        />
        <div className={styles.trophyCount}>2222</div>
      </div>
      <div className={styles.chatButtonWrapper}>
        <COCButton
          className={styles.middleLeft}
          onClick={() => setChatOpen(true)}
          color="#C46A15"
        >
          <img src={chatIcon} alt="chat" />
        </COCButton>
      </div>
      {/* <img src={bottomLeft} alt="bottomLeft" className={styles.bottomLeft} /> */}
      <COCButton className={styles.attackButton} color="#C46A15">
        <div className={styles.starsContainer}>
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <FaStar
                className={styles.star}
                stroke="#f4973e"
                strokeWidth={36}
                key={i}
              />
            ))}
        </div>
        <img className={styles.mapImg} src={mapIcon} />
        <div className={styles.attackLabel}>Attack!</div>
      </COCButton>
    </div>
  );
}

export default LeftDiv;
