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
  const account = useContext(BankAccountContext)
  let cardClasses =
    "flex gap-x-5 place-items-center overflow-x-scroll shadow border-solid p-5 focus:border-red";

  greyBg ? cardClasses += " bg-lightWhite" : cardClasses += " bg-white"

  return (
    <>
      <div className={cardClasses}>
        <div className="flex flex-col place-items-center">
        {movimento.tipologia == "ENTRATA" ? (
          moneybag
        ) : (
          invoice
        )}
        <p><strong>Dettaglio</strong></p>
        </div>
        
        <p className="text-lg text-green whitespace-nowrap">
          <strong>
          {movimento.ammontare != 0 && movimento.tipologia === "ENTRATA"
            ? `+ ${movimento.ammontare} ${account.valuta}`
                        : movimento.tipologia === "USCITA"
            ? `- ${movimento.ammontare} ${account.valuta}`
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
