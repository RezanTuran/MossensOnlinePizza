import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Order() {

    const [orderList, setOrderlist] = useState([])

    useEffect(() => {
        Axios.get('https://mossenspizzeria.herokuapp.com/api/getOrder').then((Response) => {
            setOrderlist(Response.data)
        })
    }, [])

    return (
        <div>
            {orderList.map((val) => {
                return (
                    <div className="card">
                        <p>Pizza ID: {val.pizzaId}</p>
                        <p>Pizzanamn: {val.pizzaName}</p>
                        <p>Pizza pris: {val.pizzaPrice}</p>
                        <p>Pizza pris familj: {val.pizzaPriceF}</p>
                        <p>ingredienser: {val.ingredients}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Order
