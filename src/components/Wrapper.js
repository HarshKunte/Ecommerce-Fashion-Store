import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar.component";

const Wrapper = () => {
    return (
        <>
            <Navbar/>

            <Outlet/>
        </>
    );
}

export default Wrapper;
