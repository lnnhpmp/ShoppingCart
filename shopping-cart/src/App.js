import React, {useState} from 'react';
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import ProductList from './components/ProductList/ProductList';
import {productData} from './components/ProductList/ProductData';
import './App.css';

function App() {
  const products = productData;
  const [productsInCart, setProductsInCart] = useState([]);
  const [total, setTotal] = useState(0);

  function addProducts(product) {
    setTotal(total + product.price);
    const existingProductIndex = productsInCart.findIndex(element => element.product.id === product.id);
    if (existingProductIndex < 0) {
        setProductsInCart([...productsInCart, {product: product, number: 1}]);
        return;
    }
    const productToAdd = productsInCart[existingProductIndex];
    let productsInCartCopy = [...productsInCart];
    productsInCartCopy[existingProductIndex] = {...productToAdd, number: productToAdd.number + 1};
    setProductsInCart(productsInCartCopy);
  }

  function removeProducts(product) {
    const existingProductIndex = productsInCart.findIndex(element => element.product.id === product.id);
    // no such product in the cart;
    if (existingProductIndex < 0) {
        return;
    }
    setTotal(total - product.price);
    const productToRemove = productsInCart[existingProductIndex];

    let productsInCartCopy = [...productsInCart];
    // only one product in the cart, delete it after removing
    if (productsInCartCopy[existingProductIndex].number === 1) {
        productsInCartCopy.splice(existingProductIndex, 1);
    }
    // more than one product in the cart
    else {
        productsInCartCopy[existingProductIndex] = {...productToRemove, number: productToRemove.number - 1};
    }
    setProductsInCart(productsInCartCopy);
  }

  return (
    <div className='App'>
      <ProductList products={products} addProducts={addProducts}/>
      <ShoppingCart 
        productsInCart={productsInCart} 
        total={total} 
        addProducts={addProducts} 
        removeProducts={removeProducts}
      />
    </div>
  );
}

export default App;
