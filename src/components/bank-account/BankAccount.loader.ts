import { getAllAccountsByUserId } from "../../service/conto-service";

export default async function accountLoader() {
    const allAccounts = await getAllAccountsByUserId();
    return allAccounts;
}