import { FC } from "react";
import { Web3Button } from "@web3modal/react";
import { Logo } from "@/components/Logo/Logo";

import style from "./Header.module.css";

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Web3Button balance={"show"} avatar={"hide"} icon={"hide"} />
    </header>
  );
};
