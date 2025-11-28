import styles from "./App.module.scss";
import Page from "./components/Page/Page";
import WarMap from "./components/WarMap/WarMap";
import { useState, useEffect } from "react";

function App() {
  const imagesToPreload = [
    "/seniors/gurekas.jpg",
    "/seniors/himanshu.jpg",
    "/seniors/malay.jpg",
    "/seniors/praneel.jpg",
    "/seniors/raj.jpg",
    "/seniors/rakshit.jpg",
    "/seniors/sundar.jpg",
    "/seniors/vatsal.jpg",
  ];
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let loadedAssets = 0;
    const preloadAsset = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedAssets++;
          resolve(img);
        };
        img.onerror = reject;
      });
    };

    Promise.all(imagesToPreload.map(preloadAsset))
      .then(() => {
        setFlag(true);
      })
      .catch((err) => {
        setFlag(true);
        console.error("Error preloading assets:", err);
      });
  }, []);
  return flag ? <Page /> : <div></div>;
  // return <WarMap />;
}

export default App;
