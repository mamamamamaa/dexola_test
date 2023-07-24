"use client";

import { Web3 } from "@/components/Web3";
import { Header } from "@/components/Header/Header";
import { TransactionForm } from "@/components/TransactionForm/TransactionForm";

export default function App() {
  return (
    <Web3>
      <Header />
      <main className="py-10">
        <TransactionForm />
      </main>
    </Web3>
  );
}
