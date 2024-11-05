import {useContext, useMemo, useState} from "react";
import {ProductContext} from "../context/ProductContext.jsx";
import {ProductGrid,CategoryFilter } from "./index.js"

export const ProductSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const products = useContext(ProductContext);

    const categories = useMemo(() => {
        return [...new Set(products.map(product => product.category))];
    }, [products]);

    const filteredProducts = selectedCategory
        ? products.filter(p => p.category === selectedCategory)
        : products;



    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="font-bold text-4xl text-center mb-12">
                Explore Cutting-Edge Products
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />

                <ProductGrid products={filteredProducts} />
            </div>
        </div>
    );
}