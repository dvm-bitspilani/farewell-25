import styles from "./Page.module.scss";

import LeftDiv from "../LeftDiv/LeftDiv";
import CenterDiv from "../CenterDiv/CenterDiv";
import RightDiv from "../RightDiv/RightDiv";
import { useState } from "react";

function Page() {

  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className={styles.page}>
      <LeftDiv className={styles.leftDiv} setChatOpen={setChatOpen} />
      <CenterDiv 
        className={styles.centerDiv}
        chatOpen={chatOpen}
        setChatOpen={setChatOpen}
      />
      <RightDiv className={styles.rightDiv} />
    </div>
  );
}
export default Page;
