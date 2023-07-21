import { FC } from "react";

export const Logo: FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-blue-500 h-8 w-8 flex items-center justify-center text-white font-semibold rounded-md">
        Му
      </div>
      <div className="text-2xl font-bold text-gray-800 hidden sm:block">
        Web3
      </div>
    </div>
  );
};
