import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MovementCard from "../movement/Movement.js";
import { MovimentoDTO } from "../../model/movimentodto.js";

export default function MovementsList() {
  const allMovements = useLoaderData() as MovimentoDTO[];
  const fetchedMovements = allMovements.map((m) => <MovementCard movimento={m} />);

  const [movements] = useState(fetchedMovements);
  console.log(movements)

  return( <>
  <h1>this is a MovementsList</h1>
  {movements.length == 0 ? "No movements to show" : movements}
  </>);
}
