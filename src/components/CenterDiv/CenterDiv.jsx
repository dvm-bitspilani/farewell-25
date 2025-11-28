import styles from "./CenterDiv.module.scss";

import { useState, useEffect, useRef } from "react";

import backButton from "/svgs/back-button.svg";
import forwardButton from "/svgs/forward-button.svg";

// import adobeAELogo from "/imgs/adobe-ae-logo.png";
import blenderLogo from "/imgs/blender-logo.png";
import aeLogo from "/imgs/ae-logo.svg";
import figmaLogo from "/imgs/figma-logo.png";
import flutterLogo from "/imgs/flutter-logo.png";
import pythonLogo from "/imgs/python-logo.png";
// import reactLogo from "/imgs/react-logo.png";
import seniors from "./seniors";
import BottomDiv from "../BottomDiv/BottomDiv";
import CloudAnimation from "../CloudAnimation/CloudAnimation";
import ClanChat from "../ClanChat/ClanChat";

const vertiIconList = {
  back: pythonLogo,
  design: figmaLogo,
  video: aeLogo,
  app: flutterLogo,
};

function CenterDiv({ className, chatOpen, setChatOpen }) {
  let targetDate = new Date("Nov 29, 2025 20:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVertical, setActiveVertical] = useState("back");
  const [isAnimating, setIsAnimating] = useState(false);
  const [fadeClass, setFadeClass] = useState(styles.fadeExit);

  // const videoRef = useRef(null);

  const indexChange = (val) => {
    setFadeClass(styles.fadeEnter);
    setTimeout(() => {
      setFadeClass(styles.fadeExit);
      const newIndex = currentIndex + val;
      setCurrentIndex(
        newIndex >= seniors[activeVertical].length
          ? 0
          : newIndex < 0
          ? seniors[activeVertical].length - 1
          : newIndex
      );
    }, 300);
  };

  function handleTransition(verti) {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(0);
      setActiveVertical(verti);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 2000);
  }

  function handleVerticalChange(code) {
    if (isAnimating) return;
    setIsAnimating(true);
    handleTransition(() => {
      setCurrentIndex(seniors.findIndex((senior) => senior.code === code));
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(intervalId);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        hours: Math.floor(distance / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className={className}>
      {/* <video src={transition} ref={videoRef}></video> */}
      {isAnimating && <CloudAnimation />}
      <ClanChat
        chatOpened={chatOpen}
        onClose={() => setChatOpen(false)}
        activeVertical={activeVertical}
        currentIndex={currentIndex}
      />
      <div className={styles.centerDiv}>
        <div className={styles.timer}>
          <p className={styles.timerUpper}>Farewell ‘25 starts in:</p>
          <p className={styles.timerLower}>
            {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        </div>
        <div className={styles.carouselBox}>
          <div className={styles.carouselHeader}>
            <img
              src={backButton}
              alt="back button"
              className={styles.backButton}
              onClick={() => indexChange(-1)}
              style={
                seniors[activeVertical].length > 1
                  ? {}
                  : { opacity: 0, pointerEvents: "none" }
              }
            />
            <p className={styles.carouselTitle + " " + fadeClass}>
              {seniors[activeVertical][currentIndex].name}
            </p>
            <img
              src={forwardButton}
              alt="forward button"
              className={styles.backButton}
              onClick={() => indexChange(1)}
              style={
                seniors[activeVertical].length > 1
                  ? {}
                  : { opacity: 0, pointerEvents: "none" }
              }
            />
          </div>
          <div className={styles.cardBox}>
            <div className={styles.card}>
              <img
                src={seniors[activeVertical][currentIndex].img}
                alt="card image"
                className={styles.cardImage + " " + fadeClass}
              />
              <div className={styles.cardDetails}>
                <div className={styles.subDetailsBox}>
                  <p className={styles.field}>Vertical</p>
                  <p className={styles.value}>
                    : {seniors[activeVertical][currentIndex].vertical}
                  </p>
                </div>
                <span className={styles.divider}></span>
                <div className={styles.subDetailsBox}>
                  <p className={styles.field}>Batch of</p>
                  <p className={styles.value}>
                    : {seniors[activeVertical][currentIndex].batch}
                  </p>
                </div>
                <span className={styles.divider}></span>
                <div className={styles.subDetailsBox}>
                  <p className={styles.field}>Party</p>
                  <p className={styles.value}>: 29-11-25</p>
                </div>
                <span className={styles.divider}></span>
              </div>
            </div>
            <p className={styles.message}>
              You made our time here special! This journey had tons of learning,
              fun and memories along the way. <br /> Here’s to a bright future!
            </p>
          </div>
        </div>
        <div className={styles.verticalBox}>
          {Object.keys(seniors).map((verti, i) => (
            <div
              className={`${styles.verticalItem} ${
                verti === activeVertical ? "" : styles.inactive
              }`}
              onClick={() => handleTransition(verti)}
              key={i}
            >
              <p>x{seniors[verti].length}</p>
              <img src={vertiIconList[verti]} alt={verti} />
            </div>
          ))}
        </div>
        <BottomDiv />
      </div>
    </div>
  );
}

export default CenterDiv;
