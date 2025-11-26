import styles from "./COCButton.module.scss";
// import cocButtonImg from "/imgs/coc-button-bg.png";

import React from 'react'

export default function COCButton({ children, className, onClick, color }) {
    return (
        <div 
            className={`${styles.cocButton} ${className}`} 
            // style={{backgroundImage: `url(${cocButtonImg})`}}
            onClick={() => onClick()}
            style={{"--color": color}}
        >
            <div className={styles.cocButtonUnderlay} />
            <div className={styles.cocButtonMidLayer} />
            {children}
        </div>
    )
}
