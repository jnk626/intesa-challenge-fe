import axios from "axios"
import UtenteDTO from "../model/utentedto"
import { MovimentoDTO } from "../model/movimentodto";

const instance = axios.create({
    baseURL: "http://localhost:8080"
})

export const findUserById = async (id: number) => {
    const response = await instance.get<UtenteDTO>(`/utente/${id}`);
    return response.data;
}

export const getAllMovementsByUserId = async (id?: number) => {
    const response = await instance.get<MovimentoDTO[]>(`/profile/movimenti-per-utente-1`);
    return response.data;
}