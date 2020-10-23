import React from "react";
import Product from './Product/Product';
import './ProductList.css';

function ProductList({products = [], addProducts}) {
    function handleAddProduct(product) {
        addProducts(product);
    }
    return (
        <div className='product-list'>
           {products.map(product => (
               <div key={product.id}>
                    <Product product={product}/>
                    <button onClick={() => handleAddProduct(product)}>Add To Cart</button>
               </div>
           ))}
        </div>
    );
}

export default ProductList;