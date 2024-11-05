import {NavLink, useLocation} from "react-router-dom";
import {Heart, ShoppingCart} from "lucide-react";

export const Navbar = () => {

    const isIndex = useLocation().pathname === "/";


    const activeLinkStyle = `font-semibold underline ${isIndex ? "text-white" : null} text-purple-600`
    const navLinks = [
        {
            path: "/",
            label: "Home",
        },
        {
            path: "/statistics",
            label: "Statistics",
        },
        {
            path: "/dashboard",
            label: "Dashboard",
        },
    ]


    return (
        <>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4">

                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink to={link.path}
                                         className={({isActive}) => `${isActive ? activeLinkStyle : null}`}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <button>
                        <ShoppingCart className="w-5 h-5"/>
                    </button>
                    <button>
                        <Heart className="w-5 h-5"/>
                    </button>
                </div>
            </div>
        </>
    )
}