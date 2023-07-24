import {
  useAccount,
  useBalance,
  useFeeData,
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from "wagmi";
import { parseEther } from "viem";
import { toast } from "react-hot-toast";
import { useDebounce } from "use-debounce";
import { ChangeEventHandler, useEffect, useState } from "react";

export const useCustomTransaction = () => {
  const { address } = useAccount();
  const { data: feeData } = useFeeData();

  const { data: balanceData } = useBalance({ address });
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
  const { isLoading, isSuccess, isFetchedAfterMount } = useWaitForTransaction({
    hash,
  });

  const handleSetWallet: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setWallet(target.value);

  const handleSetAmount: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setAmount(target.value);

  useEffect(() => {
    if (prepareError?.name === "EstimateGasExecutionError")
      toast.error("Insufficient funds for the operatiossn");

    if (isFetchedAfterMount && isSuccess)
      toast.success("Transaction is successful");
    else if (isFetchedAfterMount && !isSuccess)
      toast.error("Something went wrong");
  }, [prepareError, isSuccess]);

  return {
    handleSetAmount,
    handleSetWallet,
    sendTransaction,
    wallet,
    amount,
    isLoading,
    balance: balanceData?.formatted,
    hash,
    gasPrice: feeData?.gasPrice,
  };
};
