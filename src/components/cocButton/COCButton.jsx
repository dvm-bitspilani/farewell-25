import styles from "./COCButton.module.scss";
// import cocButtonImg from "/imgs/coc-button-bg.png";

import React from "react";

export default function COCButton({
  children,
  className,
  onClick,
  color,
  link,
}) {
  return link ? (
    <a
      className={`${styles.cocButton} ${className}`}
      // style={{backgroundImage: `url(${cocButtonImg})`}}
      onClick={() => onClick && onClick()}
      style={{ "--color": color }}
      href={link}
      target="_blank"
    >
      <div className={styles.cocButtonUnderlay} />
      <div className={styles.cocButtonMidLayer} />
      {children}
    </a>
  ) : (
    <div
      className={`${styles.cocButton} ${className}`}
      // style={{backgroundImage: `url(${cocButtonImg})`}}
      onClick={() => onClick && onClick()}
      style={{ "--color": color }}
    >
      <div className={styles.cocButtonUnderlay} />
      <div className={styles.cocButtonMidLayer} />
      {children}
    </div>
  );
}
