import React, { useState } from 'react';
import '../Admin/style.css';
import Axios from 'axios';
import PizzaProperties from './PizzaProperties';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';

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

function InserPizza() {
  const classes = useStyles();

  const [pizzaName, setPizzaName] = useState('');
  const [pizzaPrice, setPizzaPrice] = useState('');
  const [pizzaPriceF, setPizzaPriceF] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [pizzaList, setPizzaList] = useState([]);

  // Post pizza
  const insertPizza = () => {
    Axios.post('https://mossenspizzeria.herokuapp.com/api/insert', {
      pizzaName: pizzaName,
      pizzaPrice: pizzaPrice,
      pizzaPriceF: pizzaPriceF,
      ingredients: ingredients,
    });

    setPizzaList([
      ...pizzaList,
      {
        pizzaName: pizzaName,
        pizzaPrice: pizzaPrice,
        pizzaPriceF: pizzaPriceF,
        ingredients: ingredients,
      },
    ]);
    window.location.reload();
  };

  return (
    <>
      <Helmet>
        <title>Mossens Pizzeria | Pizza</title>
      </Helmet>
      <div className={classes.root}>
        <TextField
          className={classes.input}
          name="pizzaName"
          type="text"
          id="outlined-basic"
          label="Pizza namn"
          variant="outlined"
          onChange={(e) => {
            setPizzaName(e.target.value);
          }}
        />
        <TextField
          className={classes.input}
          name="price"
          type="number"
          id="outlined-basic"
          label="Pris"
          variant="outlined"
          onChange={(e) => {
            setPizzaPrice(e.target.value);
          }}
        />
        <TextField
          className={classes.input}
          name="prisF"
          type="number"
          id="outlined-basic"
          label="Pris Familj"
          variant="outlined"
          onChange={(e) => {
            setPizzaPriceF(e.target.value);
          }}
        />
        <TextField
          className={classes.input}
          name="Ingredients"
          type="text"
          id="outlined-basic"
          label="Ingredients"
          variant="outlined"
          onChange={(e) => {
            setIngredients(e.target.value);
          }}
        />
        <Button
          onClick={insertPizza}
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
        >
          Spara
        </Button>
      </div>
      <PizzaProperties />
    </>
  );
}

export default InserPizza;
