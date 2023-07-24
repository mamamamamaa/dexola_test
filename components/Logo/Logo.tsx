import { FC } from "react";
import style from "./Logo.module.css";

export const Logo: FC = () => {
  return (
    <div className={style.logoContainer}>
      <div className={style.logoActiveText}>Му</div>
      <div className={style.logoText}>Web3</div>
    </div>
  );
};
