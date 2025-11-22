import styles from "./Page.module.scss";

import LeftDiv from "../LeftDiv/LeftDiv";
import CenterDiv from "../CenterDiv/CenterDiv";
import RightDiv from "../RightDiv/RightDiv";

function Page() {
  return (
    <div className={styles.page}>
      <LeftDiv />
      <CenterDiv />
      <RightDiv />
    </div>
  );
}
export default Page;
