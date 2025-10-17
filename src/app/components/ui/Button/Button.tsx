import style from "./button.module.sass";
import { buttonProps } from "./_types/button.types";

export const Button = ({ href, children }: buttonProps) => {
  return (
    <a href={href}>
      <div className={style.button}>{children}</div>
    </a>
  );
};
