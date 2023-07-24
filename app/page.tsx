"use client";

import { Web3 } from "@/components/Web3/Web3";
import { Main } from "@/components/Main/Main";
import { Header } from "@/components/Header/Header";

export default function App() {
  return (
    <Web3>
      <Header />
      <Main />
    </Web3>
  );
}
