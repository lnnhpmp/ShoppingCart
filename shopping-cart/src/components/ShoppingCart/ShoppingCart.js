import React, {useEffect, useState} from "react";
import './ShoppingCart.css';
import ProductsInCart from './ProductsInCart/ProductsInCart';

function ShoppingCart({productsInCart, total, addProducts, removeProducts}) {
    const [discount, setDiscount] = useState('');
    const [totalDisplay, setTotalDisplay] = useState(total);
    
    function getDiscountChange(e) {
        setDiscount(e.target.value);
    }

    useEffect(() => {
        function handleDiscountChange(total) {
            if (discount.slice(-1) === '%') {
                const discountNum = Number(discount.slice(0, discount.length - 1));
                if (isNaN(discountNum)) {
                    alert('Illegal discount!');
                    return total;
                }
                return total * (1 - discountNum / 100);
            }
            const discountNum = Number(discount);
            if (isNaN(discountNum)) {
                alert('Illegal discount!');
                return total;
            }
            if (discountNum < 0) {
                return total;
            }
            return Math.max(0, total - discountNum);
        }
        setTotalDisplay(handleDiscountChange(total));
    }, [discount, total]);

    return (
        <main>
            <ProductsInCart productsInCart={productsInCart} addProducts={addProducts} removeProducts={removeProducts}/>
            <div>
                <h1>
                    Discount: 
                    <input onChange={getDiscountChange}></input>
                </h1>
            </div>
            <div className='shopping-cart'>
                <img src={process.env.PUBLIC_URL + '/products_img/cart.png'} alt='shopping cart'/>
                <h1>Total: {parseFloat(totalDisplay.toFixed(2))} €</h1>
            </div>
        </main>
    );
}

export default ShoppingCart;