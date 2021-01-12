import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import '../Menu/styles.css'
import pizzaImg from '../Menu/images/pic-1.jpg';
import Cart from '../Cart';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function Menu() {

  const [pizzaList, setPizzaList] = useState([])
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS)

  useEffect(() => {
    Axios.get('http://localhost:8080/api/get').then((Response) => {
      setPizzaList(Response.data)
      console.log(Response.data);
    })
  }, [])

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

  const renderProducts = () => (
    <>
      {pizzaList.map((product, idx) => {
        return (
          <div className="food-items" key={idx}>
            <img src={pizzaImg} alt="BigCo Inc. logo" />
            <div className="details">
              <div className="details-sub">
                <h5>{product.pizzaName}</h5>
                <h5 className="price">{product.pizzaPrice} :- &nbsp; &nbsp; <span>{product.pizzaPriceF} :-</span></h5>
              </div>
              <p>{product.ingredients}</p>
              <button onClick={() => addToCart(product)}>Beställa</button>
            </div>
          </div>
        )
      })}
    </>
  );

  return (
    <div className="menu">
      <header>
        <button
          onClick={() => navigateTo(PAGE_CART)}>Go to cart ({cart.length})
        </button>

        <button
          onClick={() => navigateTo(PAGE_PRODUCTS)}>Visa Produkter</button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}
export default Menu
