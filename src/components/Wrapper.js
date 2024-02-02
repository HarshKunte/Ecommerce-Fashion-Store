import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar.component";

const Wrapper = () => {
    return (
        <>
            <Navbar/>
            <div style={{padding:'0 8rem'}}>
            <Outlet/>
            </div>
        </>
    );
}

export default Wrapper;
