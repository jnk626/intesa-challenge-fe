import { Outlet } from "react-router-dom";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";

export default function Root() {
    return (
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}