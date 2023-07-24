import { FC } from "react";
import { TransactionForm } from "@/components/TransactionForm/TransactionForm";

import style from "./Main.module.css";

export const Main: FC = () => {
  return (
    <main className={style.main}>
      <TransactionForm />
    </main>
  );
};
