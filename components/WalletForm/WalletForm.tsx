import { FC, FormEventHandler } from "react";
import { useCustomTransaction } from "@/hooks/useCustomTransaction";
import style from "./WalletForm.module.css";

const walletRegexp = new RegExp(/^0x[a-fA-F0-9]{40}$/);

export const WalletForm: FC = () => {
  const { wallet, handleSetWallet, handleSetAmount, amount, sendTransaction } =
    useCustomTransaction();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    console.log("fdsfsdfsd");
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
                  min="0.000001"
                  max="100000"
                  step="0.000001"
                  pattern="^0x[a-fA-F0-9]{40}$"
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
