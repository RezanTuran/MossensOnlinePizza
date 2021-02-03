import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import pizzaImg from './images/pic-1.jpeg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

function Products({ addToCart }) {
    const classes = useStyles();

    const [pizzaList, setPizzaList] = useState([])
    const [searchPizza, setSearchPizza] = useState('')

    useEffect(() => {
        Axios.get('https://mossenspizzeria.herokuapp.com/api/get').then((Response) => {
            setPizzaList(Response.data)
            console.log(Response.data);
        })
    }, [])

    // Search Pizza
    const filtrePizza = pizzaList.filter(pizza => {
        return pizza.pizzaName.toLowerCase().includes(searchPizza.toLowerCase())
    })

    return (
        <>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Sök Pizza</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    onChange={event => setSearchPizza(event.target.value)}
                    startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                />
            </FormControl>
            &nbsp;
            <div></div>
            <div></div>
            <div></div>
            &nbsp;
            <br></br>
            {filtrePizza.map((product, idx) => {
                return (
                    <div className="food-items" key={idx}>
                        <img src={pizzaImg} alt="BigCo Inc. logo" />
                        <div className="details">
                            <div className="details-sub">
                                <h5>{product.pizzaName}</h5>
                                <h5 className="price">{product.pizzaPrice} :- <Checkbox
                                    checked="checked"
                                    value="checkedA"
                                    inputProps={{ 'aria-label': 'Checkbox A' }}
                                />&nbsp; &nbsp; <span>{product.pizzaPriceF} :-<Checkbox
                                    value="checkedA"
                                    inputProps={{ 'aria-label': 'Checkbox A' }}
                                /></span></h5>
                            </div>
                            <p>{product.ingredients}</p>
                            <Button
                                onClick={() => addToCart(product)}
                                variant="contained"
                                color="primary"
                                startIcon={<ShoppingCartIcon />}
                            >
                                Beställ
                                </Button>
                        </div>
                    </div>
                )
            })}
        </>

    )
}

export default Products
