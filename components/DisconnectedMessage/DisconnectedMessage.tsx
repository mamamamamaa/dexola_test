import { FC } from "react";

import style from "./DisconnectedMessage.module.css";

export const DisconnectedMessage: FC = () => {
  return (
    <section className={style.messageSection}>
      <h2 className={style.message}>
        You must be connected to your wallet to make a transaction.
      </h2>
    </section>
  );
};
