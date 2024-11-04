import {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('./product-data.json');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};