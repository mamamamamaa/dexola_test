import { FC } from "react";
import { useAccount } from "wagmi";
import { Web3Button } from "@web3modal/react";
import { Logo } from "@/components/Logo/Logo";
import { Loader } from "@/components/Loader/Loader";

import style from "./Header.module.css";

export const Header: FC = () => {
  const { isReconnecting } = useAccount();

  if (isReconnecting) return <Loader />;

  return (
    <header className={style.header}>
      <Logo />
      <Web3Button balance={"show"} avatar={"hide"} icon={"hide"} />
    </header>
  );
};
