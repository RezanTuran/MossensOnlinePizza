import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import pizzaImg from './images/pic-1.jpeg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

function Products({ addToCart }) {
    const [pizzaList, setPizzaList] = useState([])

    useEffect(() => {
        Axios.get('https://mossenspizzeria.herokuapp.com/api/get').then((Response) => {
            setPizzaList(Response.data)
            console.log(Response.data);
        })
    }, [])


    return (
        <>
            {pizzaList.map((product, idx) => {
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