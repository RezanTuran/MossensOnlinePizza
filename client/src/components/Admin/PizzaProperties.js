import React, { useState, useEffect } from 'react';
import '../Admin/style.css';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CachedIcon from '@material-ui/icons/Cached';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2em',
  },
  input: {
    margin: '1em',
  },
  Button: {
    backgroundColor: '#9D0606',
    color: 'white',
    margin: '1em',
  },
}));

function PizzaProperties() {
  const classes = useStyles();

  const [pizzaList, setPizzaList] = useState([]);

  const [newPrice, setNewPrice] = useState('');
  const [newPizzaName, setNewPizzaName] = useState('');
  const [newPizzaIngredients, setNewIngredients] = useState('');
  const [newPriceF, setNewPriceF] = useState('');

  useEffect(() => {
    Axios.get('https://mossenspizzeria.herokuapp.com/api/get').then(
      (Response) => {
        setPizzaList(Response.data);
      }
    );
  }, []);

  // Delete pizza
  const deletePizza = (pizza) => {
    Axios.delete(`https://mossenspizzeria.herokuapp.com/api/delete/${pizza}`);
    window.location.reload();
  };

  // Update pizzaPrice
  const updatePizzaPrice = (pizza) => {
    Axios.put('https://mossenspizzeria.herokuapp.com/api/updatePrice/', {
      pizzaId: pizza,
      pizzaPrice: newPrice,
    });
    setNewPrice('');
    window.location.reload();
  };
  // Update PizzaName
  const updatePizzaName = (pizza) => {
    Axios.put('https://mossenspizzeria.herokuapp.com/api/updateName/', {
      pizzaId: pizza,
      pizzaName: newPizzaName,
    });
    setNewPizzaName('');
    window.location.reload();
  };
  // Update PizzaIngredients
  const updatePizzaIngrediens = (pizza) => {
    Axios.put('https://mossenspizzeria.herokuapp.com/api/updateIngrediens', {
      pizzaId: pizza,
      ingredients: newPizzaIngredients,
    });
    setNewIngredients('');
    window.location.reload();
  };
  // Update PizzaPriceF
  const updatePizzaPriceF = (pizza) => {
    Axios.put('https://mossenspizzeria.herokuapp.com/api/updatePriceF/', {
      pizzaId: pizza,
      pizzaPriceF: newPriceF,
    });
    setNewPriceF('');
    window.location.reload();
  };

  return (
    <div className="App">
      {pizzaList.map((val) => {
        return (
          <div className="card">
            <p>
              Pizza ID: <spam className="customerInfo">{val.pizzaId}</spam>
            </p>
            <Divider />
            <p>
              Pizzanamn: <span className="customerInfo">{val.pizzaName}</span>
            </p>
            <Divider />
            <p>
              Pizza pris: <span className="customerInfo">{val.pizzaPrice}</span>
            </p>
            <Divider />
            <p>
              Pizza pris familj:{' '}
              <span className="customerInfo">{val.pizzaPriceF}</span>
            </p>
            <Divider />
            <p>
              Ingredienser:{' '}
              <span className="customerInfo">{val.ingredients}</span>
            </p>
            <TextField
              className={classes.input}
              name="pizzaName"
              type="text"
              id="outlined-basic"
              label="Pizza namn"
              variant="outlined"
              onChange={(e) => {
                setNewPizzaName(e.target.value);
              }}
            />
            <TextField
              className={classes.input}
              name="pizzaPrice"
              type="number"
              id="outlined-basic"
              label="Pris"
              variant="outlined"
              onChange={(e) => {
                setNewPrice(e.target.value);
              }}
            />
            <TextField
              className={classes.input}
              name="pizzaPriceF"
              type="number"
              id="outlined-basic"
              label="Pris Familj"
              variant="outlined"
              onChange={(e) => {
                setNewPriceF(e.target.value);
              }}
            />
            <TextField
              className={classes.input}
              name="Ingredients"
              type="text"
              id="outlined-basic"
              label="Ingredienser"
              variant="outlined"
              onChange={(e) => {
                setNewIngredients(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                deletePizza(val.pizzaId);
              }}
              variant="contained"
              startIcon={<DeleteIcon />}
              className={classes.Button}
              color="secondary"
            >
              Ta Bort
            </Button>
            <Button
              onClick={() => {
                updatePizzaName(val.pizzaId);
              }}
              variant="contained"
              color="primary"
              startIcon={<CachedIcon />}
              className={classes.input}
            >
              Uppdatera Pizza namn
            </Button>
            <Button
              onClick={() => {
                updatePizzaPrice(val.pizzaId);
              }}
              variant="contained"
              color="primary"
              startIcon={<CachedIcon />}
              className={classes.input}
            >
              Uppdatera Pris
            </Button>
            <Button
              onClick={() => {
                updatePizzaPriceF(val.pizzaId);
              }}
              variant="contained"
              color="primary"
              startIcon={<CachedIcon />}
              className={classes.input}
            >
              Uppdatera Pris F
            </Button>
            <Button
              onClick={() => {
                updatePizzaIngrediens(val.pizzaId);
              }}
              variant="contained"
              color="primary"
              startIcon={<CachedIcon />}
              className={classes.input}
            >
              Uppdatera Ingredienser
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export default PizzaProperties;
