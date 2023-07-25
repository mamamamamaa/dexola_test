import { FC } from "react";
import { ButtonLoader } from "@/components/ButtonLoader/ButtonLoader";

import style from "./FormSubmitButton.module.css";

interface Props {
  isLoading: boolean;
  extraDisabledAction: boolean;
}

export const FormSubmitButton: FC<Props> = ({
  isLoading,
  extraDisabledAction,
}) => {
  return (
    <button
      disabled={isLoading || extraDisabledAction}
      className={style.submitButton}
    >
      {isLoading ? <ButtonLoader /> : "Send"}
    </button>
  );
};
