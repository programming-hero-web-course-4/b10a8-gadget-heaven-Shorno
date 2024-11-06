import CartCard from "./cart-card.jsx";
import {useContext} from "react";
import {ProductContext} from "../context/ProductContext.jsx";

export default function CartSection() {

    const {cart} = useContext(ProductContext)

    return (
        <>
            <div className={"mx-auto w-1/2 flex flex-col gap-4 py-20"}>
                <div className={"flex justify-between mb-10"}>
                    <div className={"card-title"}>Cart</div>
                    <div className={"flex gap-4"}>
                        <p className={"card-title"}>Total Cost :</p>
                        <button className={"btn btn-ghost btn-sm rounded-full border border-purple-500"}>Sort by Price</button>
                        <button className={"btn btn-ghost btn-sm rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 text-white"}>Purchase</button>
                    </div>
                </div>
                {
                    cart.map((product) => {
                        return (
                            <CartCard key={product.product_id} product={product}/>
                        )
                    })
                }
            </div>
        </>
    )
}