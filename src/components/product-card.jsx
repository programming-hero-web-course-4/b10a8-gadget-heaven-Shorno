/*eslint-disable*/
import {Link} from "react-router-dom";

export const  ProductCard = ({product}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-md overflow-hidden">
            <figure className="px-4 pt-4">
                <img
                    className="rounded-xl object-cover w-full h-56"
                    src={product.product_image}
                    alt={product.name}

                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.product_title}</h2>
                <p>Price: {product.price} TK</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-outline btn-sm border border-purple-600 text-purple-600">View Details</button>
                    <Link to={`/product/${product.product_title.replace(/\s+/g, '-').toLowerCase()}`}>View Details</Link>

                </div>
            </div>
        </div>
    )
}