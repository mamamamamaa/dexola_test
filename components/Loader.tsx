import { FC } from "react";
import { Spinner } from "@/components/Spinner";

export const Loader: FC = () => {
  return (
    <div className="backdrop-blur w-screen h-screen absolute top-0 left-0 z-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Spinner />
      </div>
    </div>
  );
};
