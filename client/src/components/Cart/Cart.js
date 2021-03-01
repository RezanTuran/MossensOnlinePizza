import React from 'react';
import pizzaImg from '../Menu/images/pizzapng2.png';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import './style.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Helmet } from 'react-helmet';

function Cart({ cart, clearCart, removeFromCart, setQuantity }) {
  // Pizza price Counter
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { pizzaPrice, quantity }) => sum + pizzaPrice * quantity,
      0
    );
  };

  const handleButtonClick = () => {
    window.location.assign('.#/checkout');
  };

  return (
    <>
      <Helmet>
        <title>Mossens Pizzeria | Kundkorg</title>
      </Helmet>
      {cart.map((product, idx) => {
        return (
          <>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Pizza namn</th>
                  <th>Pizza pris</th>
                  <th>Ingredienser</th>
                  <th>Antal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      style={{ width: '100px' }}
                      src={pizzaImg}
                      alt="BigCo Inc. logo"
                    />
                  </td>
                  <td>{product.pizzaName}</td>
                  <td>{product.pizzaPrice}</td>
                  <td>{product.ingredients}</td>
                  <td>
                    <TextField
                      id="outlined-basic"
                      label="Antal"
                      type="number"
                      variant="outlined"
                      value={product.quantity}
                      onChange={(e) =>
                        setQuantity(product, parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td>
                    <Button
                      onClick={() => removeFromCart(product)}
                      style={{ backgroundColor: '#9D0606' }}
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                    >
                      Ta Bort
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        );
      })}

      {cart.length > 0 && (
        <div style={{ marginTop: '2em', marginLeft: '1em' }}>
          <Button
            onClick={handleButtonClick}
            variant="contained"
            color="primary"
            style={{ margin: '5px' }}
            endIcon={<NavigateNextIcon />}
          >
            Nästa
          </Button>
          <Button
            onClick={clearCart}
            variant="contained"
            color="primary"
            startIcon={<RemoveShoppingCartIcon />}
          >
            Rensa Kundkorgen
          </Button>
          <h2>Total pris: {getTotalSum()} :-</h2>
        </div>
      )}
    </>
  );
}

export default Cart;
