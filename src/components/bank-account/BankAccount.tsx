import { useLoaderData } from "react-router-dom";
import ContoDTO from "../../model/contodto";
import MovementsList from "../movements-list/MovementList.element";

export default function BankAccount() {
    const allAccounts = useLoaderData() as ContoDTO[]
    return (
        <>
        <div className="flex flex-col m-10 gap-2 p-5 rounded">
            <div className="flex justify-between">
                <h3>{allAccounts[0].nome}</h3>
                <span>star</span>
            </div>
            <div className="flex justify-between">
                <h2>AMMONTARE</h2>
                <span>occhio</span>
            </div>
            <div>--divider--</div>
            <div className="flex justify-between">
                <p>IBAN</p>
                <span>upload</span>
            </div>
            <div className="flex justify-between">
                <h4>Smart Money</h4>
                <span>importo</span>
            </div>
        </div>
        <MovementsList />
        </>
    )
}