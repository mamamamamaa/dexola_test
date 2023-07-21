import { FC } from "react";

export const WalletForm: FC = () => {
  return (
    <div className="bg-white p-10 flex flex-col justify-center items-center gap-8 border border-gray-300 rounded-xl shadow-sm">
      <div className="bg-blue-500 h-8 py-2 px-4 flex items-center justify-center text-white font-semibold rounded-md">
        Transaction form
      </div>
      <form className="flex flex-col justify-center items-center gap-4 w-1/2">
        <input
          type="text"
          placeholder="Wallet address"
          className="bg-gray-100 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Amount"
          className="bg-gray-100 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-blue-500 w-full text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};
