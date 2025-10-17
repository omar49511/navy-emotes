import React from "react";
import styles from "./top-bar.module.sass";

export const Topbar = () => {
  return (
    <div className={styles.header}>
      <a className={styles.menuIcon} href="#">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </a>
      <img className={styles.logo} src="/logonavy.png" />
      <div className={styles.headerMenu}>
        <a href="#">
          <div className={styles.button}>Home</div>
        </a>
        <a href="#">
          <div className={styles.button}>Portfolio</div>
        </a>
        <a href="#">
          <div className={styles.button}>Commission</div>
        </a>
        <a href="#">
          <div className={styles.button}>About Me</div>
        </a>
      </div>
    </div>
  );
};
