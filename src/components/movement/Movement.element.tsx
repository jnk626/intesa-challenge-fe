import PropTypes from "prop-types";
import { useContext } from "react";

import { MovimentoDTO } from "../../model/movimentodto";
import { invoice, moneybag } from "../../assets/icons";
import { BankAccountContext } from "../bank-account/BankAccount.context";

interface MovementCardProps {
  key: number;
  movimento: MovimentoDTO;
  greyBg: boolean;
}

export const MovementCard = ({ movimento, greyBg }: MovementCardProps) => {
  const formattedDate = movimento.data.replace("T", " ").substring(0, 10);
  const valuta = useContext(BankAccountContext)
  let cardClasses =
    "flex gap-x-5 place-items-center overflow-x-scroll rounded shadow border-solid p-5 focus:border-red";

  if (greyBg) {
    cardClasses += " bg-lightWhite";
  }

  return (
    <>
      <div className={cardClasses}>
        {movimento.tipologia == "ENTRATA" ? (
          moneybag
        ) : (
          invoice
        )}
        <p className="text-lg text-green whitespace-nowrap">
          <strong>
          {movimento.ammontare != 0 && movimento.tipologia === "ENTRATA"
            ? `+ ${movimento.ammontare} ${valuta}`
                        : movimento.tipologia === "USCITA"
            ? `- ${movimento.ammontare} ${valuta}`
            : "Ammontare sconosciuto"}
            </strong>
        </p>

        <p className="text-lg whitespace-nowrap">
          {movimento.data ? formattedDate : "Data sconosciuta"}
        </p>
        <p className="text-lg whitespace-nowrap">
          {movimento.descrizione ? movimento.descrizione : " "}
        </p>
      </div>
    </>
  );
};

MovementCard.propTypes = {
  movimento: PropTypes.instanceOf(MovimentoDTO),
};
