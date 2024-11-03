import {Outlet, useLocation} from "react-router-dom";
import {Footer, Navbar} from "../components/index.js";

export default function RootLayout() {
    const location = useLocation();
    const isIndex = location.pathname === "/";

    return (

        <div>
            {!isIndex && <Navbar/>}
            <Outlet/>
            <Footer/>
        </div>

    )
}