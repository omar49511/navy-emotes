import React from "react";
import styles from "./marquee.module.sass";

export const Marquee = () => {
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeBox}>
        <a href="/index.php?showuser=4">
          <div
            className={styles.harew}
            style={{
              backgroundImage:
                "url(`http://files.jcink.net/uploads/actualityrp/staff_icons/bones2.png`)",
            }}
          ></div>
        </a>
        <a href="/index.php?showuser=14">
          <div
            className={styles.harew}
            title="antiviral - mod"
            style={{
              backgroundImage:
                "url(http://files.jcink.net/uploads/actualityrp/staff_icons/bones2.png)",
            }}
          ></div>
        </a>
        <a href="/index.php?showuser=47">
          <div
            className={styles.harew}
            title="bones - mod"
            style={{
              backgroundImage:
                "url(http://files.jcink.net/uploads/actualityrp/staff_icons/bones2.png)",
            }}
          ></div>
        </a>
        <a href="/index.php?showuser=46">
          <div
            className={styles.harew}
            title="ant - mod"
            style={{
              backgroundImage:
                "url(http://files.jcink.net/uploads/actualityrp/staff_icons/bones2.png)",
            }}
          ></div>
        </a>
        <a href="https://actualityrp.jcink.net/index.php?showuser=61">
          <div className={styles.harew} title="TomoTactics - mod"></div>
        </a>
      </div>
    </div>
  );
};
