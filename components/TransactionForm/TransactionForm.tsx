import { FC, FormEventHandler } from "react";
import { useCustomTransaction } from "@/hooks/useCustomTransaction";
import { toast } from "react-hot-toast";
import { MAX_AMOUNT, MIN_AMOUNT, walletRegExp } from "@/consts/transaction";
import style from "./TransactionForm.module.css";

export const TransactionForm: FC = () => {
  const {
    wallet,
    handleSetWallet,
    handleSetAmount,
    amount,
    balance,
    sendTransaction,
  } = useCustomTransaction();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const isValidWallet = walletRegExp.test(wallet);

    if (!isValidWallet) return toast.error("Invalid wallet address");

    console.log(Number(balance));
    console.log(Number(amount));
    console.log(Number(amount) < Number(balance));

    // sendTransaction?.();
  };

  return (
    <section className={style.formSection}>
      <div className={style.rotatedFormBg}></div>
      <div className={style.formBg}>
        <div className={style.formContainer}>
          <div>
            <h2 className={style.formHeading}>Transaction form</h2>
          </div>
          <div className={style.formBox}>
            <form onSubmit={handleSubmit} className={style.form}>
              <div className={style.inputContainer}>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className={style.input}
                  placeholder="Wallet address"
                  onChange={handleSetWallet}
                  value={wallet}
                />
                <label htmlFor="address" className={style.inputLabel}>
                  Wallet Address
                </label>
              </div>
              <div className={style.inputContainer}>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  min={MIN_AMOUNT}
                  max={MAX_AMOUNT}
                  step={MIN_AMOUNT}
                  className={style.input}
                  placeholder="Coin amount"
                  onChange={handleSetAmount}
                  value={amount}
                />
                <label htmlFor="amount" className={style.inputLabel}>
                  Coin Amount
                </label>
              </div>
              <div className={style.inputContainer}>
                <button className={style.submitButton}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
