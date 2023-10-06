import { divider } from "../../assets/graphics";

interface ContactService {
  name: string;
  //icons: JSX.Element[];
  numbers: string[];
}

export const TalkToUs = () => {
  const filialeDigitale: ContactService = {
    name: "Filiale Digitale",
    numbers: [],
  };

  const services: ContactService[] = [filialeDigitale];
  return (
    <>
      <h2 className="text-4xl pl-5 bg-green text-white">
        <strong>Parla con noi</strong>
      </h2>
      <div className="bg-green pt-10">
        {services.map((service) => (
          <>
            <div className="flex flex-col justify-center mb-10 mx-3 gap-5 px-5 py-10 min-h-fit w-11/12 shadow rounded-lg bg-white">
              <div className="flex justify-between text-3xl">
                <h3>{service.name}</h3>
                <span>icon</span>
              </div>
              <div className="flex justify-between text-2xl">
                <h2>
                  <strong>{service.numbers[0]}</strong>
                </h2>
                <span>icon</span>
              </div>
              <hr />
              <div className="flex justify-between text-xl text-gray">
                <p>{service.numbers[1]}</p>
                <span>icon</span>
              </div>
            </div>
          </>
        ))}
      </div>
      {divider}
    </>
  );
};
