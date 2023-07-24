import { FC } from "react";
import { Web3Button } from "@web3modal/react";
import { Logo } from "@/components/Logo";
import { useAccount } from "wagmi";
import { Loader } from "@/components/Loader";

import style from "./Header.module.css";

export const Header: FC = () => {
  const { isConnecting, isReconnecting } = useAccount();

  if (isConnecting || isReconnecting) return <Loader />;

  return (
    <header className={style.header}>
      <Logo />
      <Web3Button balance={"show"} avatar={"hide"} icon={"hide"} />
    </header>
  );
};
