import { getAllMovementsByUserId } from "../../service/conto-service.ts";
import { MovimentoDTO } from "../../model/movimentodto.ts";


export default async function movementsLoader(): Promise<MovimentoDTO[]> {
    let allMovements: MovimentoDTO[] = [];
    //const userId = localStorage.getItem("id");
    allMovements = await getAllMovementsByUserId();
    
    return allMovements;
  }