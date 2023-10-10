import UtenteDTO from "../model/utentedto"
import { MovimentoDTO } from "../model/movimentodto";
import ContoDTO from "../model/contodto";

//const instance = axios.create({
//    baseURL: "http://localhost:8080"
//})

export const findUserById: () => Promise<UtenteDTO> = async () => {
    //const response = await instance.get<UtenteDTO>(`/utente/${id}`);
    return new UtenteDTO(
        1,
        "Pino",
        "passwd"
    );
}

export const getAllMovementsByUserId: () => Promise<MovimentoDTO[]> = async () => {
    //const response = await instance.get<MovimentoDTO[]>(`/profile/movimenti-per-utente-1`);
    return [
        {
            "id": 1,
            "ammontare": 500.65,
            "data": "2023-07-23T12:12:49",
            "tipologia": "ENTRATA",
            "descrizione": "Bonifico disposto da Tuo Padre"
        },
        {
            "id": 2,
            "ammontare": 55.82,
            "data": "2023-07-25T20:44:06",
            "tipologia": "USCITA",
            "descrizione": "Fattura pagata a: Pizzeria Consuelo"
        }
    ]
}

export const getAllAccountsByUserId: () => Promise<ContoDTO[]> = async () => {
    //const response = await instance.get<ContoDTO[]>(`/profile/conti-per-utente-1`);
    return [
        {
            "id": 1,
            "nome": "Personale",
            "bilancio": 1650.5,
            "valuta": "$",
            "iban": "10000056689"
        }
    ];
}