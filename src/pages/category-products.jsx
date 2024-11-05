import {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {ProductContext} from '../context/ProductContext';
import {Link} from 'react-router-dom';

export const CategoryProducts = () => {
    const {category} = useParams();
    const products = useContext(ProductContext);
    const categoryProducts = products.filter(p => p.category.replace(/\s+/g, '-').toLowerCase() === category);

    if (categoryProducts.length === 0) {
        return <div>No products found in this category</div>;
    }

    return (
        <div>
            <h1>Products in {category.replace(/-/g, ' ')}</h1>
            <div>
                {categoryProducts.map(product => (
                    <div key={product.product_id}>
                        <h2>{product.product_title}</h2>
                        <Link to={`/product/${product.product_title.replace(/\s+/g, '-').toLowerCase()}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

