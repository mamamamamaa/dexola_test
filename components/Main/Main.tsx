import { FC } from "react";
import { useAccount } from "wagmi";
import { TransactionForm } from "@/components/TransactionForm/TransactionForm";
import { DisconnectedMessage } from "@/components/DisconnectedMessage/DisconnectedMessage";

import style from "./Main.module.css";

export const Main: FC = () => {
  const { isConnected } = useAccount();

  return (
    <main className={style.main}>
      {isConnected ? <TransactionForm /> : <DisconnectedMessage />}
    </main>
  );
};
