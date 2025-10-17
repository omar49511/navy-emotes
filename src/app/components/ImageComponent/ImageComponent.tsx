import React from "react";
import styles from "./image-component.module.sass";
export const ImageComponent = () => {
  return (
    <a className={styles.image}>
      <img
        src="https://files.jcink.net/uploads/actualityrp/sister_sites/sistersite1.png"
        title="sister site space"
        width="280"
        height="150"
      />
    </a>
  );
};
