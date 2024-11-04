import {Outlet, useLocation} from "react-router-dom";
import {Footer, Navbar} from "../components/index.js";
import {ProductProvider} from "../context/ProductContext.jsx";

export default function RootLayout() {
    const location = useLocation();
    const isIndex = location.pathname === "/";

    return (

        <ProductProvider>
            {!isIndex && <Navbar/>}
            <Outlet/>
            <Footer/>
        </ProductProvider>

    )
}