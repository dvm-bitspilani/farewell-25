import styles from "./CenterDiv.module.scss";

import { useState, useEffect, useRef } from "react";

import backButton from "/svgs/back-button.svg";
import forwardButton from "/svgs/forward-button.svg";
import cardImage from "/imgs/dummy.png";
import transition from "/video/transition.mp4";

import adobeAELogo from "/imgs/adobe-ae-logo.png";
import blenderLogo from "/imgs/blender-logo.png";
import figmaLogo from "/imgs/figma-logo.png";
import flutterLogo from "/imgs/flutter-logo.png";
import pythonLogo from "/imgs/python-logo.png";
import reactLogo from "/imgs/react-logo.png";
import seniors from "./seniors";
import BottomDiv from "../BottomDiv/BottomDiv";

function CenterDiv({ className }) {
  let targetDate = new Date("Nov 29, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const videoRef = useRef(null);

  function handleTransition(indexChange) {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      indexChange();
      setIsAnimating(false);
    }, 2000);
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

  useEffect(() => {
    if (isAnimating && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      videoRef.current.style.display = "block";
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.style.display = "none";
    }
  }, [isAnimating]);

  return (
    <div className={className}>
      <video src={transition} ref={videoRef}></video>
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
              onClick={() => {
                handleTransition(() => {
                  setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? seniors.length - 1 : prevIndex - 1
                  );
                });
              }}
            />
            <p className={styles.carouselTitle}>{seniors[currentIndex].name}</p>
            <img
              src={forwardButton}
              alt="forward button"
              className={styles.backButton}
              onClick={() => {
                handleTransition(() => {
                  setCurrentIndex((prevIndex) =>
                    prevIndex === seniors.length - 1 ? 0 : prevIndex + 1
                  );
                });
              }}
            />
          </div>
          <div className={styles.cardBox}>
            <div className={styles.card}>
              <img
                src={cardImage}
                alt="card image"
                className={styles.cardImage}
              />
              <div className={styles.cardDetails}>
                <div className={styles.subDetailsBox}>
                  <p className={styles.field}>Vertical</p>
                  <p className={styles.value}>
                    : {seniors[currentIndex].vertical}
                  </p>
                </div>
                <span className={styles.divider}></span>
                <div className={styles.subDetailsBox}>
                  <p className={styles.field}>Batch of</p>
                  <p className={styles.value}>
                    : {seniors[currentIndex].batch}
                  </p>
                </div>
                <span className={styles.divider}></span>
                <div className={styles.subDetailsBox}>
                  <p className={styles.field}>Party</p>
                  <p className={styles.value}>: 28-11-25</p>
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
          <div
            className={`${styles.verticalItem} ${
              seniors[currentIndex].code === "back" ? "" : styles.inactive
            }`}
            onClick={() => {
              handleTransition(() => {
                setCurrentIndex(
                  seniors.findIndex((senior) => senior.code === "back")
                );
              });
            }}
          >
            <p>x5</p>
            <img src={pythonLogo} alt="back" />
          </div>
          <div
            className={`${styles.verticalItem} ${
              seniors[currentIndex].code === "app" ? "" : styles.inactive
            }`}
            onClick={() => {
              handleTransition(() => {
                setCurrentIndex(
                  seniors.findIndex((senior) => senior.code === "app")
                );
              });
            }}
          >
            <p>x4</p>
            <img src={flutterLogo} alt="app" />
          </div>
          <div
            className={`${styles.verticalItem} ${
              seniors[currentIndex].code === "design" ? "" : styles.inactive
            }`}
            onClick={() => {
              handleTransition(() => {
                setCurrentIndex(
                  seniors.findIndex((senior) => senior.code === "design")
                );
              });
            }}
          >
            <p>x4</p>
            <img src={figmaLogo} alt="design" />
          </div>
          <div
            className={`${styles.verticalItem} ${
              seniors[currentIndex].code === "video" ? "" : styles.inactive
            }`}
            onClick={() => {
              handleTransition(() => {
                setCurrentIndex(
                  seniors.findIndex((senior) => senior.code === "video")
                );
              });
            }}
          >
            <p>x4</p>
            <img src={blenderLogo} alt="video" />
          </div>
        </div>
        <BottomDiv />
      </div>
    </div>
  );
}

export default CenterDiv;
