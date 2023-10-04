import { getAllAccountsByUserId } from "../../service/conto-service";

export const accountLoader = async () => {
    const allAccounts = await getAllAccountsByUserId();
    return allAccounts;
}