import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

export default function Root() {
    return (
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    )
}