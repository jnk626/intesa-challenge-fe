import { useEffect, useState } from "react";
import { MovementCard } from "../movement/Movement.element.js";
import { getAllMovementsByUserId } from "../../service/conto-service.js";
import { MovimentoDTO } from "../../model/movimentodto.js";

export const MovementsList = () => {
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

  const mappingMovs = (m: MovimentoDTO) => {
    let greyBg = false;
    movements.indexOf(m) % 2 == 0 ? (greyBg = true) : (greyBg = false);
    return <MovementCard key={m.id} movimento={m} greyBg={greyBg} />;
  };

  return (
    <>
      <div className="flex flex-col gap-3 pt-5 w-screen bg-white">
        <h2 className="text-2xl ml-3"><strong>Operazioni</strong></h2>
        {loading ? (
          <p>Loading...</p>
        ) : movements.length === 0 ? (
          "No movements to show"
        ) : (
          movements.map(
            mappingMovs
            //movements.map((m) => <MovementCard key={m.id} movimento={m} greyBg={false}/>)
          )
        )}
      </div>
    </>
  );
};
