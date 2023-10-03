import { useLoaderData } from "react-router-dom";
import ContoDTO from "../../model/contodto";
import MovementsList from "../movements-list/MovementList.element";

export default function BankAccount() {
    const allAccounts = useLoaderData() as ContoDTO[]
    const account = allAccounts[0]
    
    return (
        <>
        <div className="flex flex-col my-10 mx-3 gap-4 p-5 w-11/12 shadow rounded">
            <div className="flex justify-between text-3xl">
                <h3>{account.nome}</h3>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg></span>
            </div>
            <div className="flex justify-between text-xl ">
                <h2><strong>{account.bilancio}</strong> {account.valuta}</h2>
                <span>occhio</span>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>{account.iban}</p>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 15h2V9h3l-4-5-4 5h3z"></path><path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path></svg></span>
            </div>
            <hr />
            <div className="flex justify-between">
                <h4>Smart Money</h4>
                <span>{account.bilancio * 0.75 +" "+account.valuta}</span>
            </div>
        </div>
        <MovementsList />
        </>
    )
}