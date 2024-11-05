import {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {ProductContext} from '../context/ProductContext';
import {Heart, ShoppingCart, Star} from "lucide-react"

export const ProductDetails = () => {
    const {productName} = useParams();
    const products = useContext(ProductContext);
    const product = products.find(p => p.product_title.replace(/\s+/g, '-').toLowerCase() === productName);

    const filedStar = parseInt(product.rating);
    const unfilledStar = 5 - filedStar;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className={"pb-72"}>
            <section className={"bg-purple-600 flex-col flex justify-center items-center gap-8 py-8 pb-64 relative"}>
                <div className={"container mx-auto flex flex-col gap-4 justify-center items-center text-center"}>
                    <h1 className={"text-2xl text-white font-bold"}>Product Details</h1>
                    <p className={"text-white text-lg max-w-screen-md"}>Explore the latest gadgets that will take
                        your experience to the next level. From smart devices
                        to the coolest accessories, we have it all!</p>
                </div>
            </section>
            <div
                className="card lg:card-side bg-base-100 shadow-lg max-w-4xl  absolute bottom-0 -translate-y-1/3 translate-x-1/2 ml-20">
                <figure className="lg:w-1/2">
                    <img
                        src={product.product_image}
                        alt="Samsung Galaxy S23 Ultra"
                        className="object-cover w-full h-full"
                    />
                </figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title text-2xl font-bold">{product.product_title}</h2>
                    <div className="flex flex-col  gap-2 justify-start items-start">
                        <p className="text-xl font-semibold">Price: {product.price} TK</p>
                        <p className="badge bg-green-100 border border-green-500 text-green-800 gap-2">In Stock</p>
                    </div>

                    <p className="text-gray-600">
                        {product.description}
                    </p>

                    <div className="space-y-2">
                        <h3 className="font-semibold">Specification:</h3>
                        <ul className="list-decimal list-inside text-black/60 space-y-1">
                            <li>Intel i7 11th Gen</li>
                            <li>16GB RAM</li>
                            <li>512GB SSD</li>
                            <li>Touchscreen</li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="font-semibold">Rating</span>
                        <div className="flex items-center gap-1">
                            {[...Array(filedStar)].map((_, index) => (
                                <Star key={index} className="w-5 h-5 fill-warning text-warning"/>
                            ))}
                            {[...Array(unfilledStar)].map((_, index) => (
                                <Star key={index} className="w-5 h-5 text-warning"/>
                            ))}
                            <span className="ml-2 badge bg-gray-200 px-4 py-1">{product.rating}</span>
                        </div>
                    </div>

                    <div className="card-actions justify-start items-center gap-4 mt-4">
                        <button className="btn bg-purple-500  text-white font-semibold gap-2 rounded-full">
                            Add To Cart
                            <ShoppingCart className="w-5 h-5"/>
                        </button>
                        <button className="btn btn-circle btn-outline">
                            <Heart className="w-5 h-5"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
