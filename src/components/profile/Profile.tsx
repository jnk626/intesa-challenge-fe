import BankAccount from "../bank-account/BankAccount";
import MovementsList from "../movements-list/MovementList.element";

export default function Profile() {
    return (
        <>
        <h2>Conti</h2>
        <BankAccount></BankAccount>
        <MovementsList></MovementsList>
        </>
    )
}