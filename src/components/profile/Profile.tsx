import { Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <h2 className="text-4xl pl-5 bg-green text-white">
        <strong>Conti</strong>
      </h2>
      <div className="bg-green pt-10">
        <Outlet />
      </div>
    </>
  );
}
