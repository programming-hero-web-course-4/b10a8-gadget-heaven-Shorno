import {Outlet, useLocation} from "react-router-dom";
import {Navbar} from "../components/index.js";

export default function RootLayout() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (

        <div>
            {!isHome && <Navbar/>}
            <div className={"container mx-auto"}>
                <Outlet/>
            </div>
            <h1>Footer</h1>
        </div>

    )
}