import { ChangeEventHandler, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from "wagmi";
import { parseEther } from "viem";
import { toast } from "react-hot-toast";

export const useCustomTransaction = () => {
  const [wallet, setWallet] = useState<string>("");
  const [debouncedWallet] = useDebounce(wallet, 500);
  const [amount, setAmount] = useState<string>("");
  const [debouncedAmount] = useDebounce(amount, 500);

  const { config, error: prepareError } = usePrepareSendTransaction({
    to: debouncedWallet,
    value: debouncedAmount ? parseEther(debouncedAmount) : undefined,
  });

  const { data, sendTransaction } = useSendTransaction(config);

  const hash = data?.hash;
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash,
  });

  const handleSetWallet: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setWallet(target.value);

  const handleSetAmount: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setAmount(target.value);

  useEffect(() => {
    if (prepareError?.name === "EstimateGasExecutionError")
      toast.error("Insufficient funds for the operation");

    // if (isSuccess) toast.success("Transaction is successful");
    // else toast.error("Something went wrong");
  }, [prepareError, isSuccess]);

  return {
    handleSetAmount,
    handleSetWallet,
    sendTransaction,
    wallet,
    amount,
    isLoading,
    isSuccess,
    hash,
  };
};
