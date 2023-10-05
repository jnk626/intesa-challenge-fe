import { useLoaderData } from "react-router-dom";
import ContoDTO from "../../model/contodto";
import { MovementsList } from "../movements-list/MovementList.element";
import { star, upload, eye } from "../../assets/icons";
import { divider } from "../../assets/graphics";
import { BankAccountContext } from "./BankAccount.context";

export const BankAccount = () => {
  const allAccounts = useLoaderData() as ContoDTO[];
  const account = allAccounts[0];

  return (
    <>
      <div className="flex flex-col justify-center mb-10 mx-3 gap-5 px-5 py-10 min-h-fit w-11/12 shadow rounded-lg bg-white">
        <div className="flex justify-between text-3xl">
          <h3>{account.nome}</h3>
          <span>{star}</span>
        </div>
        <div className="flex justify-between text-2xl">
          <h2>
            <strong>{account.bilancio}</strong> {account.valuta}
          </h2>
          <span>{eye}</span>
        </div>
        <hr />
        <div className="flex justify-between text-xl text-gray">
          <p>{account.iban}</p>
          <span>{upload}</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <h4>Smart Money</h4>
          <span>{account.bilancio * 0.75 + " " + account.valuta}</span>
        </div>
      </div>
      {divider}
      <BankAccountContext.Provider value={account.valuta}>
        <MovementsList />
      </BankAccountContext.Provider>
    </>
  );
};
