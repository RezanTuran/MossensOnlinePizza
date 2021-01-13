import React, { useState } from 'react'
import '../Menu/styles.css'
import Cart from '../Cart';
import Products from './Products';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function PizzaMenu() {

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS)

  const addToCart = (product) => {
    setCart([...cart, { ...product }])
  }

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((pizzaList) => pizzaList !== productToRemove)
    );
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  return (
    <div className="menu">
      <header>
        <button
          onClick={() => navigateTo(PAGE_CART)}>Kundkorg ({cart.length})
        </button>

        <button
          onClick={() => navigateTo(PAGE_PRODUCTS)}>Visa Produkter</button>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}
export default PizzaMenu;
