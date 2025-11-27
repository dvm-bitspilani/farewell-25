import styles from "./LeftDiv.module.scss";
import topLeft from "/svgs/top-left.svg";
import mobileXPBar from "/imgs/mobile-xp-bar.png";
import { useEffect, useState } from "react";
import { debouncedHandler } from "../../utils";

export default function TopXPBar({ className }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
    console.log(window.innerWidth)

    useEffect(() => {
        const resizeHandler = () => setIsMobile(window.innerWidth < 700);
        const debouncedResizeHandler = debouncedHandler(resizeHandler, 200)

        window.addEventListener("resize", debouncedResizeHandler);

        return () => window.removeEventListener("resize", debouncedResizeHandler)
    }, [])

    return (
        <img className={className} alt="xp-bar" src={isMobile ? mobileXPBar : topLeft} />
    )
}
