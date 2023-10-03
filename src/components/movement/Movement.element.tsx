import { MovimentoDTO } from "../../model/movimentodto";
import PropTypes from "prop-types";

interface MovementCardProps {
  key: number;
  movimento: MovimentoDTO;
}

export default function MovementCard({ movimento }: MovementCardProps) {
  const formattedDate = movimento.data.replace("T", " ");
  return (
    <>
      <div className="flex gap-x-5 place-items-center overflow-x-scroll rounded shadow border-solid p-5">
        {movimento.tipologia == "ENTRATA" ? (
          <svg
            className="w-20 h-20 flex-shrink-0 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v6z"></path>
            <path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
          </svg>
        ) : (
          <svg
            className="w-20 h-20 flex-shrink-0 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16 12h2v4h-2z"></path>
            <path d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path>
          </svg>
        )}
        <p className="text-lg">
          {movimento.ammontare ? movimento.ammontare : "Ammontare sconosciuto"}
        </p>
        <p className="text-lg">
          {movimento.tipologia ? movimento.tipologia : "Tipologia sconosciuta"}
        </p>
        
        <p className="text-lg">{movimento.data ? formattedDate : "Data sconosciuta"}</p>
        
      </div>
    </>
  );
}

MovementCard.propTypes = {
  movimento: PropTypes.instanceOf(MovimentoDTO),
};
