import { FC } from "react";
import { Web3Button } from "@web3modal/react";
import { Logo } from "@/components/Logo";
import { useAccount, useBalance } from "wagmi";
import { Loader } from "@/components/Loader";

export const Header: FC = () => {
  const { isConnecting, isReconnecting } = useAccount();

  if (isConnecting || isReconnecting) return <Loader />;

  return (
    <header className="flex justify-between items-center gap-1">
      <Logo />
      <Web3Button balance={"show"} avatar={"hide"} icon={"hide"} />
    </header>
  );
};
