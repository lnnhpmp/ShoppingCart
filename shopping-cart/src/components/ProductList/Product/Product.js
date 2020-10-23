import React from "react";
import './Product.css';

function Product(props) {
    const product = props.product;
    const img = product.img;
    const name = product.name;
    const price = product.price;

    return (
        <div className='product'>
            <img src={process.env.PUBLIC_URL + img} alt={name}/>
            <div>{name}</div>
            <div>{price} €</div>
        </div>
    );
}

export default Product;