import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import ContoDTO from "../../model/contodto";
import { BankAccountContext } from "../bank-account/BankAccount.context";

export default function Profile() {
  const allAccounts = useLoaderData() as ContoDTO[];
  const account = allAccounts[0];
  return (
    <>
      <h2 className="text-4xl pl-5 bg-green text-white">
        <strong>Profilo</strong>
      </h2>
      <div className="bg-green pt-10 mb-20">
        <BankAccountContext.Provider value={account}>
        <Outlet />
        </BankAccountContext.Provider>
      </div>
    </>
  );
}
