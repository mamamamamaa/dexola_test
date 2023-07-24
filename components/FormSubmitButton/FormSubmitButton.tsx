import { FC } from "react";
import { ButtonLoader } from "@/components/ButtonLoader/ButtonLoader";

import style from "./FormSubmitButton.module.css";

interface Props {
  isLoading: boolean;
}

export const FormSubmitButton: FC<Props> = ({ isLoading }) => {
  return (
    <button disabled={isLoading} className={style.submitButton}>
      {isLoading ? <ButtonLoader /> : "Send"}
    </button>
  );
};
