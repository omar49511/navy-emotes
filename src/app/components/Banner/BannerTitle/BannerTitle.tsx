import React from "react";
import styles from "./banner-tittle.module.sass";
type BannerTitleProps = {
  title: string;
  subtitle: string;
};
export const BannerTitle = ({ title, subtitle }: BannerTitleProps) => {
  return (
    <div className={styles.BannerCategory}>
      <div></div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};
