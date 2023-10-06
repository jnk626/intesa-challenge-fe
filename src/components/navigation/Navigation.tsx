import { lens, help } from "../../assets/icons";

export const Navigation = () => {
  return (
    <>
      <nav>
        <div className="p-5 flex justify-end bg-green">
          <div className="min-w-[33%] flex justify-between">
            <div className="flex flex-col place-items-center">
              {lens}
              <p className="text-white">Cerca</p>
            </div>
            <div className="flex flex-col place-items-center">
              {help}
              <p className="text-white">Aiuto</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-48 bg-green absolute">

      </div>
    </>
  );
}
