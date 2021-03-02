import React from 'react';
import Divider from '@material-ui/core/Divider';
import './Style.css';
import Button from '@material-ui/core/Button';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Helmet } from 'react-helmet';

function OrderConfirmation() {
  const ordertFromLocalStorage = JSON.parse(localStorage.getItem('order'));
  const handleButtonClick = () => {
    window.location.assign('.#/menu');
  };

  return (
    <>
      <Helmet>
        <title>Mossens Pizzeria | Orderbekräftelse</title>
      </Helmet>
      <div className="orderConfHeader">
        <h1>Orderbekräftelse</h1>
      </div>
      <div className="card">
        <h2 className="orderTitle">Kunduppgifter</h2>
        <h4>
          Namn:
          <span className="customerInfo">
            {ordertFromLocalStorage.firstName} {ordertFromLocalStorage.sureName}
          </span>
        </h4>
        <Divider />
        <h4>
          Address:
          <span className="customerInfo">{ordertFromLocalStorage.adress}</span>
        </h4>
        <Divider />
        <h4>
          Postnummer:
          <span className="customerInfo">
            {ordertFromLocalStorage.postNumber}
          </span>
        </h4>
        <Divider />
        <h4>
          Telefonnummer:
          <span className="customerInfo">{ordertFromLocalStorage.phone}</span>
        </h4>
        <Divider />
        <h4>
          E-post:
          <span className="customerInfo">{ordertFromLocalStorage.epost}</span>
        </h4>
        <Divider />
        <h4>
          Datum:
          <span className="customerInfo">{ordertFromLocalStorage.date}</span>
        </h4>
        <Divider />
        <h2 className="orderTitle">Beställning</h2>
        <Divider />
        <p>
          Pizzanamn:
          <span className="customerInfo">
            {ordertFromLocalStorage.pizzaName}
          </span>
        </p>
        <Divider />
        <p>
          Antal pizza:{' '}
          <span className="customerInfo">
            {ordertFromLocalStorage.quantity}
          </span>
        </p>
        <Divider />
        <p>
          Ingredienser:{' '}
          <span className="customerInfo">
            {ordertFromLocalStorage.ingredients}
          </span>
        </p>
        <Divider />
        <p>
          Totalpris:{' '}
          <span className="customerInfo">
            {ordertFromLocalStorage.pizzaPrice} :-
          </span>
        </p>
        <Divider />
        <Button
          onClick={handleButtonClick}
          variant="contained"
          color="secondary"
          style={{ backgroundColor: '#9D0606' }}
          endIcon={<MenuBookIcon />}
        >
          Klick här för att komma till menyn
        </Button>
      </div>
    </>
  );
}
export default OrderConfirmation;
