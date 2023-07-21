import { FC, ReactNode } from "react";
import { WagmiConfig } from "wagmi";
import { Web3Modal } from "@web3modal/react";
import { ethereumClient, projectId, wagmiConfig } from "@/utils/web3.config";

interface Props {
  children: ReactNode;
}

export const Web3: FC<Props> = ({ children }) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeMode={"light"}
      />
    </>
  );
};
