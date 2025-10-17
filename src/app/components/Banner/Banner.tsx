import styles from "./banner.module.sass";
import { Marquee } from "../Marquee/Marquee";
import { myFont } from "../../layout";
export const Banner = () => {
  return (
    <div>
      <div className={styles.banner}>
        <img src="/vtv navy.png" />
        <div className={`${styles.wraplog} ${myFont.className}`}>
          Navyri
          <br />
          <span>Commissions</span>
        </div>
      </div>
      <div className={styles.haom}>
        <Marquee></Marquee>
        hola
      </div>
    </div>
  );
};
