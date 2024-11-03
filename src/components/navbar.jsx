import {NavLink} from "react-router-dom";

export const Navbar = () => {

    const activeLinkStyle = "font-semibold underline"
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
                        <img
                            className={"size-8 p-1 bg-white rounded-full"}
                            src="/src/assets/cart-large-minimalistic-svgrepo-com.svg" alt="cart icon"
                        />
                    </button>
                    <button>
                        <img
                            className={"size-10"}
                            src="/src/assets/heart-svgrepo-com.svg" alt="heart icon"
                        />
                    </button>
                </div>
            </div>
        </>
    )
}