import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { configureChains, createConfig } from "wagmi";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";

const chains = [arbitrum, mainnet, polygon];
export const projectId = process.env.PROJECT_ID as string;

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
export const ethereumClient = new EthereumClient(wagmiConfig, chains);
