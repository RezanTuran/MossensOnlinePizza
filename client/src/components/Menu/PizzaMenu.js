import React, { useState, useEffect } from 'react'
import '../Menu/styles.css'
import Cart from '../Cart/Cart';
import Products from './Products';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

// Get item localStorage
const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

function PizzaMenu() {

  const [cart, setCart] = useState(cartFromLocalStorage);
  const [page, setPage] = useState(PAGE_PRODUCTS)

  // Set item localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add items to cart
  const addToCart = (product) => {
    setCart([...cart, { ...product }])
  }

  // Remove items from cart
  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((pizzaList) => pizzaList !== productToRemove)
    );
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  // Clear Cart
  const clearCart = () => {
    setCart([])
  }

  // Pizza price counter
  const getCartTotal = () => {
    return cart.reduce(
      (sum, { pizzaPrice }) => sum + pizzaPrice, 0);
  };
  console.log(getCartTotal());

  return (
    <div className="menu">
      <header>
        <button
          onClick={() => navigateTo(PAGE_CART)}>Kundkorg ({cart.length})
        </button>

        <button
          onClick={() => navigateTo(PAGE_PRODUCTS)}>Visa Produkter
          </button>
        <h4>({getCartTotal()}) :-</h4>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />}
    </div>
  );
}
export default PizzaMenu;
