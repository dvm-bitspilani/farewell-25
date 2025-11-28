import styles from "./WarMap.module.scss";
import warMap3 from "/imgs/warMap3.png";

function WarMap({ className }) {
  return (
    <div className={styles.warMap}>
      <div className={styles.header}>
        <div className={styles.name}>
            <span>DVM</span>
            <span>vs</span>
            <span>CBC</span>
        </div>
      </div>
    </div>
  );
}
export default WarMap;
