"use client";
import { Web3 } from "@/components/Web3";
import { Web3Button } from "@web3modal/react";

export default function Home() {
  return (
    <Web3>
      <header>
        <Web3Button />
      </header>
      <main>hello</main>
    </Web3>
  );
}
