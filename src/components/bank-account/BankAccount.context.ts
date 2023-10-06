import { createContext } from "react";
import ContoDTO from "../../model/contodto";

export const BankAccountContext = createContext(new ContoDTO());