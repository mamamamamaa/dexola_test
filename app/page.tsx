"use client";
import { Web3 } from "@/components/Web3";
import { Header } from "@/components/Header";
import { WalletForm } from "@/components/WalletForm/WalletForm";

export default function App() {
  return (
    <Web3>
      <Header />
      <main className="py-10">
        <WalletForm />
      </main>
    </Web3>
  );
}
