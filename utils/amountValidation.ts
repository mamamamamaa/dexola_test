import { MAX_AMOUNT, MIN_AMOUNT } from "@/consts/transaction";
import { parseUnits } from "viem";

export const amountValidation = (
  amount: string,
  balance: string,
  gas: bigint
): boolean => {
  const formattedAmount = parseUnits(amount, 18);
  const formattedBalance = parseUnits(balance, 18);
  const maxAmount = parseUnits(String(MIN_AMOUNT), 18);
  const minAmount = parseUnits(String(MAX_AMOUNT), 18);

  return (
    formattedAmount >= minAmount ||
    formattedAmount <= maxAmount ||
    formattedAmount + gas <= formattedBalance
  );
};
