import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2em',
  },
  input: {
    margin: '1em',
  },
}));

function AdressForm() {
  const classes = useStyles();

  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const renderPizzaNameFromLocalSt = cartFromLocalStorage.map((pizza) => {
    return `
            ${pizza.pizzaName}
        `;
  });
  const renderPizzaPriceFromLocalSt = cartFromLocalStorage.reduce(
    (sum, { pizzaPrice, quantity }) => sum + pizzaPrice * quantity,
    0
  );

  const renderPizzaQuantityFromLocalSt = cartFromLocalStorage.map((pizza) => {
    return `
            ${pizza.quantity}
        `;
  });
  const renderPizzaIngredientsFromLocalSt = cartFromLocalStorage.map(
    (pizza) => {
      return `
            ${pizza.ingredients}
        `;
    }
  );

  const handleButtonClick = () => {
    window.location.assign('.#/menu');
  };
  const handleButtonClickToOrderConfirmation = () => {
    setTimeout(function () {
      localStorage.removeItem('order');
    }, 9000);
    window.location.assign('.#/orderconfirmation');
  };

  const [firstName, setFirstName] = useState('');
  const [sureName, setSureName] = useState('');
  const [phone, setPhone] = useState('');
  const [epost, setEpost] = useState('');
  const [postNumber, setPostnumber] = useState('');
  const [adress, setAdress] = useState('');
  let date = new Date();
  const [orderList, setOrderlist] = useState([]);

  // Post order
  const insertOrder = () => {
    Axios.post('https://mossenspizzeria.herokuapp.com/api/insertOrder', {
      firstName: firstName,
      sureName: sureName,
      phone: phone,
      epost: epost,
      postNumber: postNumber,
      adress: adress,
      date: date,
      pizzaName: renderPizzaNameFromLocalSt.toString(),
      pizzaPrice: renderPizzaPriceFromLocalSt.toString(),
      quantity: renderPizzaQuantityFromLocalSt.toString(),
      ingredients: renderPizzaIngredientsFromLocalSt.toString(),
    });

    setOrderlist([
      ...orderList,
      {
        firstName: firstName,
        sureName: sureName,
        phone: phone,
        epost: epost,
        postNumber: postNumber,
        adress: adress,
        date: date,
        pizzaName: renderPizzaNameFromLocalSt.toString(),
        pizzaPrice: renderPizzaPriceFromLocalSt.toString(),
        quantity: renderPizzaQuantityFromLocalSt.toString(),
        ingredients: renderPizzaIngredientsFromLocalSt.toString(),
      },
    ]);
    //Set order i localStorage
    localStorage.setItem(
      'order',
      JSON.stringify(...orderList, {
        firstName: firstName,
        sureName: sureName,
        phone: phone,
        epost: epost,
        postNumber: postNumber,
        adress: adress,
        date: date,
        pizzaName: renderPizzaNameFromLocalSt.toString(),
        pizzaPrice: renderPizzaPriceFromLocalSt.toString(),
        quantity: renderPizzaQuantityFromLocalSt.toString(),
        ingredients: renderPizzaIngredientsFromLocalSt.toString(),
      })
    );
    handleButtonClickToOrderConfirmation();
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_42nfw6z',
        'template_76uaqek',
        e.target,
        'user_4rpsxYDJhwxIZ7zYReNVt'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  const fullDate =
    date.getFullYear() +
    '/' +
    date.getMonth() +
    '/' +
    date.getDay() +
    ' ' +
    date.getHours() +
    ':' +
    date.getSeconds();
  return (
    <div>
      <form onSubmit={sendEmail}>
        <div className={classes.root}>
          <TextField
            className={classes.input}
            name="firstName"
            type="text"
            id="outlined-basic"
            label="Förnamn"
            variant="outlined"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            className={classes.input}
            name="sureName"
            type="text"
            id="outlined-basic"
            label="Efternamn"
            variant="outlined"
            onChange={(e) => {
              setSureName(e.target.value);
            }}
          />
          <TextField
            className={classes.input}
            name="phone"
            type="number"
            id="outlined-basic"
            label="Telefonnummer"
            variant="outlined"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <TextField
            className={classes.input}
            name="email"
            type="email"
            id="outlined-basic"
            label="E-post"
            variant="outlined"
            onChange={(e) => {
              setEpost(e.target.value);
            }}
          />
          <TextField
            className={classes.input}
            name="postNumber"
            type="number"
            id="outlined-basic"
            label="Postnummer"
            variant="outlined"
            onChange={(e) => {
              setPostnumber(e.target.value);
            }}
          />
          <TextField
            className={classes.input}
            name="adress"
            type="text"
            id="outlined-basic"
            label="Address"
            variant="outlined"
            multiline
            rows={4}
            onChange={(e) => {
              setAdress(e.target.value);
            }}
          />

          <Button
            onClick={insertOrder}
            variant="contained"
            color="secondary"
            style={{ backgroundColor: '#9D0606' }}
            type="submit"
          >
            Slutför Beställningen
          </Button>
          <br></br>
          <Button
            onClick={handleButtonClick}
            variant="contained"
            color="secondary"
            style={{ backgroundColor: '#9D0606' }}
          >
            Tillbaka
          </Button>
        </div>
        <div style={{ display: 'none' }}>
          {cartFromLocalStorage.map((pizza) => {
            return (
              <>
                <TextField name="pizzaName" value={pizza.pizzaName} />
                <TextField name="pizzaPrice" value={pizza.pizzaPrice} />
                <TextField name="quantity" value={pizza.quantity} />
                <TextField name="ingredients" value={pizza.ingredients} />
              </>
            );
          })}
          <TextField name="totalPrice" value={renderPizzaPriceFromLocalSt} />
          <TextField name="date" value={fullDate} />
        </div>
      </form>
    </div>
  );
}

export default AdressForm;
