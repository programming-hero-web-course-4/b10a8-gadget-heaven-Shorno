import {useContext} from "react";
import {ProductContext} from "../context/ProductContext.jsx";
import {ProductCard} from "./product-card.jsx";
import {Link} from "react-router-dom";

export const ProductSection = () => {

    const products = useContext(ProductContext);

    const categories = [...new Set(products.map(product => product.category))];


    return (
        <>
            <div className={"container mx-auto flex flex-col justify-center items-center gap-8"}>
                <h1 className={"font-bold text-4xl"}>
                    Explore Cutting-Edge Products
                </h1>
                <div className={"grid grid-cols-6 w-fit gap-8"}>
                    <div className={"col-span-1"}>
                        <h2>Product Category</h2>
                        <button className={"btn rounded-full btn-sm my-4"}>All Category</button>
                        <div className={"flex flex-col gap-4"}>
                            {

                                categories.map((category, index) => (
                                    <div key={index}>
                                        <button className={"btn rounded-full btn-sm"}>{category}</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={"col-span-5"}>
                        <div className={"grid grid-cols-3 gap-4"}>
                            {products.map((product) => (
                                <ProductCard key={product.product_id} product={product}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}