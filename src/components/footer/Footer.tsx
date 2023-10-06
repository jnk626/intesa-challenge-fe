import { NavLink } from "react-router-dom";
import { dialog } from "../../assets/icons";

export const Footer = () => {
  return (
    <>
      <div className="flex p-5 w-full justify-between fixed bottom-0 bg-white">
        <div className="flex flex-col place-items-center">
          <span>icon</span>
          <NavLink to="/profile/conto">
            <p>Conti</p>
          </NavLink>
        </div>
        <div className="flex flex-col place-items-center">
          <span>icon</span>
          Carte
        </div>
        <div className="flex flex-col place-items-center">
          <span>icon</span>
          Operazioni
        </div>
        <div className="flex flex-col place-items-center">
          <span>{dialog}</span>
          <NavLink to="/talk-to-us">
            <p>Parla con noi</p>
          </NavLink>
        </div>
        <div className="flex flex-col place-items-center">
          <span>icon</span>
          Altro
        </div>
      </div>
    </>
  );
};
