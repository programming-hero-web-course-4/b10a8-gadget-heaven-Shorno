import {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('./product-data.json');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);



    return (
        <ProductContext.Provider
            value={{
                products,
                cart,
                addToCart
        }}
        >
            {children}
        </ProductContext.Provider>
    );
};