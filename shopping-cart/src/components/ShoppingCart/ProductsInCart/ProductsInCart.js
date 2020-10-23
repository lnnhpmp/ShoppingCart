import React from "react";

function ProductsInCart({productsInCart = [], addProducts, removeProducts}) {
    function handleAddProduct(product) {
        addProducts(product);
    }

    function handleRemoveProduct(product) {
        removeProducts(product);
    }

    return (
        <div>
            {productsInCart.map(product => (
                <div key={product.product.id}>
                    <h3>{product.product.name} : {product.number}</h3>
                    <button onClick={() => handleAddProduct(product.product)}>+</button>
                    <button onClick={() => handleRemoveProduct(product.product)}>-</button>
                </div>
            ))}
        </div>
    );
}

export default ProductsInCart;