import CartSection from "../components/cart-section.jsx";

export const Dashboard = () => {
    return (
        <>
            <div className={"bg-base-200"}>
                <section className={"bg-purple-600 flex-col flex justify-center items-center gap-8 py-8"}>
                    <div className={"container mx-auto flex flex-col gap-4 justify-center items-center text-center"}>
                        <h1 className={"text-2xl text-white font-bold"}>Dashboard</h1>
                        <p className={"text-white text-lg max-w-screen-md"}>Explore the latest gadgets that will take
                            your experience to the next level. From smart devices
                            to the coolest accessories, we have it all!</p>
                    </div>
                    <div className={"flex gap-4"}>
                        <button className={"btn px-10 rounded-full"}>Cart</button>
                        <button className={"btn px-10 rounded-full"}>Wishlist</button>
                    </div>
                </section>
                <CartSection/>
            </div>
        </>
    )
}