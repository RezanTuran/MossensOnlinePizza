import React from 'react'
import pizzaImg from '../Menu/images/pic-1.jpeg';

function Cart({
    cart,
    clearCart,
    removeFromCart,
    setQuantity
}) {
    // Pizza price Counter
    const getTotalSum = () => {
        return cart.reduce((sum, { pizzaPrice, quantity }) => sum + pizzaPrice * quantity, 0);
    }
    return (
        <>
            <h1>Kundkorg</h1>
            {cart.length > 0 && (
                <>
                    <button onClick={clearCart}>Rensa Kundkorg</button>
                    <div>Total pris: {getTotalSum()} :-</div>
                </>
            )}
            {cart.map((product, idx) => {
                return (
                    <>
                        <div className="food-items" key={idx}>
                            <img src={pizzaImg} alt="BigCo Inc. logo" />
                            <div className="details">
                                <div className="details-sub">
                                    <h5>{product.pizzaName}</h5>
                                    <h5 className="price">{product.pizzaPrice} :- &nbsp; &nbsp; <span>{product.pizzaPriceF} :-</span></h5>
                                </div>
                                <p>{product.ingredients}</p>
                                <input
                                    type="number"
                                    value={product.quantity}
                                    onChange={(e) =>
                                        setQuantity(product,
                                            parseInt(e.target.value)
                                        )}
                                />
                                <button onClick={() => removeFromCart(product)}>Ta Bort
                                </button>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Cart
