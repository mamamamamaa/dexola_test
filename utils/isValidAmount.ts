import { MAX_AMOUNT, MIN_AMOUNT } from "@/consts/transaction";

export const isAmountValid = (value: number) =>
  !isNaN(value) &&
  value >= MIN_AMOUNT &&
  value <= MAX_AMOUNT &&
  value % 10 === 0;
