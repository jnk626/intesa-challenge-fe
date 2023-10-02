import { useEffect, useState } from "react";
import MovementCard from "../movement/Movement.element.js";
import { getAllMovementsByUserId } from "../../service/conto-service.js";
import { MovimentoDTO } from "../../model/movimentodto.js";

export default function MovementsList() {
  useEffect(() => {
    getAllMovementsByUserId()
      .then((movements: MovimentoDTO[]) => {
        setMovements(movements);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const [movements, setMovements] = useState<MovimentoDTO[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
    <div className="flex flex-col gap-y-8 w-screen">
    {loading ? (
        <p>Loading...</p>
      ) : movements.length === 0 ? (
        "No movements to show"
      ) : (
        movements.map((m) => <MovementCard key={m.id} movimento={m} />)
      )}
    </div>
      
    </>
  );
}
