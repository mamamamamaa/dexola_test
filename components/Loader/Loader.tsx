import { FC } from "react";
import { Spinner } from "@/components/Spinner/Spinner";

import style from "./Loader.module.css";

export const Loader: FC = () => {
  return (
    <div className={style.loaderBackdrop}>
      <div className={style.loaderContainer}>
        <Spinner />
      </div>
    </div>
  );
};
