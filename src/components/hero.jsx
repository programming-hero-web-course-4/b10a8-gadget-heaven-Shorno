import {Navbar} from "../components/index";
import Banner from "/src/assets/banner.jpg"

export function Hero() {
    return (
        <>
            <div className={"bg-purple-600 w-11/12 mx-auto my-8 text-white rounded-2xl pb-96 relative"}>
                <Navbar/>
                <div className={"flex flex-col justify-center items-center text-center"}>
                    <div className={"max-w-screen-lg flex flex-col justify-center items-center gap-8"}>
                        <h1 className={"text-6xl font-bold leading-normal"}>Upgrade Your Tech Accessorize
                            with
                            Gadget Heaven Accessories</h1>
                        <p className={"leading-relaxed inline-block max-w-screen-md text-lg"}>Explore the latest gadgets
                            that will take your experience to the next level. From smart
                            devices
                            to the coolest accessories, we have it all!</p>
                        <div>
                            <button className={"btn btn-md rounded-full text-purple-600 font-bold text-lg"}>Shop Now
                            </button>
                        </div>
                    </div>
                    <div className={"p-4 border border-white rounded-3xl bg-white/20 w-9/12 absolute bottom-0 translate-y-1/2"}>
                        <div className={""}>
                            <img className={"rounded-3xl w-full h-[35rem] object-center"} src={Banner} alt="banner"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}