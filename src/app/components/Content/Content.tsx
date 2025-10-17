import React from "react";
import styles from "./content.module.sass";

interface ContentProps {
  children: React.ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return <div className={styles.container}>{children}</div>;
};
