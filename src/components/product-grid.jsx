import {ProductCard} from "./product-card.jsx";
/* eslint-disable react/prop-types */


export const ProductGrid = ({ products }) => {
    return (
        <div className="col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.product_id} product={product} />
                ))}
            </div>
        </div>
    );
}