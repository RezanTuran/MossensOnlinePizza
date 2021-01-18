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
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.pizzaName === item.pizzaName
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

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
      (sum, { quantity }) => sum + quantity, 0) + '';
  };

  //Pizza amount
  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(item => item.pizzaName === product.pizzaName).quantity = amount;
    setCart(newCart)
  }

  return (
    <div className="menu">
      <header>
        <button
          onClick={() => navigateTo(PAGE_CART)}>Kundkorg ({getCartTotal()})
        </button>

        <button
          onClick={() => navigateTo(PAGE_PRODUCTS)}>Visa Produkter
          </button>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page === PAGE_CART && <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        setQuantity={setQuantity}
      />}
    </div>
  );
}
export default PizzaMenu;
