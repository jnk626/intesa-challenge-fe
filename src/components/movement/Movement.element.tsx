import { MovimentoDTO } from "../../model/movimentodto";
import PropTypes from "prop-types";
import { moneybag } from "../../assets/icons";

interface MovementCardProps {
  key: number;
  movimento: MovimentoDTO;
  greyBg: boolean
}

export const MovementCard = ({ movimento, greyBg }: MovementCardProps) => {
  const formattedDate = movimento.data.replace("T", " ");
  let cardClasses = 'flex gap-x-5 place-items-center overflow-x-scroll rounded shadow border-solid p-5'
   
  if (greyBg) {
    cardClasses += " bg-lightWhite"
  }

  return (
    <>
      <div className={cardClasses}>
        {movimento.tipologia == "ENTRATA" ? (
          moneybag
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
        <p className="text-lg">{movimento.descrizione ? movimento.descrizione : " "}</p>
        
      </div>
    </>
  );
}

MovementCard.propTypes = {
  movimento: PropTypes.instanceOf(MovimentoDTO),
};
