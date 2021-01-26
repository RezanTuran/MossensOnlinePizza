import React from 'react'
import pizzaImg from '../Menu/images/pic-1.jpeg';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

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
                                <TextField
                                    id="outlined-basic"
                                    label="Antal"
                                    variant="outlined"
                                    value={product.quantity}
                                    onChange={(e) =>
                                        setQuantity(product,
                                            parseInt(e.target.value)
                                        )}
                                />
                                <Button
                                    onClick={() => removeFromCart(product)}
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<DeleteIcon />}
                                >
                                    Ta Bort
                                </Button>
                            </div>
                        </div>
                    </>
                )
            })}
            {cart.length > 0 && (
                <div>
                    <Button
                        onClick={clearCart}
                        variant="contained"
                        color="secondary"
                        startIcon={<RemoveShoppingCartIcon />}
                    >
                        Rensa Kundkorgen
                    </Button>
                    <h2>Total pris: {getTotalSum()} :-</h2>
                </div>
            )}
        </>
    )
}

export default Cart