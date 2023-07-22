import { ChangeEventHandler, useState } from "react";
import { useDebounce } from "use-debounce";
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from "wagmi";
import { parseEther } from "viem";

export const useCustomTransaction = () => {
  const [wallet, setWallet] = useState<string>("");
  const [debouncedWallet] = useDebounce(wallet, 500);
  const [amount, setAmount] = useState<string>("");
  const [debouncedAmount] = useDebounce(amount, 500);

  const { config } = usePrepareSendTransaction({
    to: debouncedWallet,
    value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
  });

  const { data, sendTransaction } = useSendTransaction(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleSetWallet: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setWallet(target.value);

  const handleSetAmount: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setAmount(target.value);

  return {
    handleSetAmount,
    handleSetWallet,
    sendTransaction,
    wallet,
    amount,
    isLoading,
    isSuccess,
  };
};
