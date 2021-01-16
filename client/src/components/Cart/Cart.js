import React from 'react'
import pizzaImg from '../Menu/images/pic-1.jpeg';

function Cart({ cart, removeFromCart }) {
    
    // if(cart.length === 0){
    //     alert("Kund korgen är tom !!!")
    // };
    return (
        <>
            {cart.map((product, idx) => {
                return (
                    <div className="food-items" key={idx}>
                        <img src={pizzaImg} alt="BigCo Inc. logo" />
                        <div className="details">
                            <div className="details-sub">
                                <h5>{product.pizzaName}</h5>
                                <h5 className="price">{product.pizzaPrice} :- &nbsp; &nbsp; <span>{product.pizzaPriceF} :-</span></h5>
                            </div>
                            <p>{product.ingredients}</p>
                            <button onClick={() => removeFromCart(product)}>Ta Bort</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Cart
