export const Footer = () => {
    return (
        <>

            <div className={"bg-base-100 mt-96 py-20"}>
                <div className={"flex flex-col text-center py-8 gap-4"}>
                    <h1 className={"text-3xl font-bold"}>Gadget Haven</h1>
                    <p className={"text-zinc-950/50"}>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className={"divider container mx-auto"}/>
                <footer className="footer justify-between text-base-content max-w-screen-xl mx-auto text-zinc-950/50">
                    <nav className={"flex flex-col justify-center items-center"}>
                        <h6 className="footer-title text-black">Services</h6>
                        <a className="link link-hover">Product Support</a>
                        <a className="link link-hover">Order Tracking</a>
                        <a className="link link-hover">Shipping and Delivery</a>
                        <a className="link link-hover">Returns</a>
                    </nav>
                    <nav className={"flex flex-col justify-center items-center"}>
                        <h6 className="footer-title text-black">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Contact</a>

                    </nav>
                    <nav className={"flex flex-col justify-center items-center"}>
                        <h6 className="footer-title text-black">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </>
    )
}