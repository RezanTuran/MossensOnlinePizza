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
                console.log(val.pizzaPrice);
                return (
                    <div className="card">
                        <h2> {val.firstName}</h2>
                        <hr></hr>
                        <p>{val.pizzaName}</p>
                        <hr></hr>
                        <p>{val.pizzaPrice}</p>
                        <hr></hr>
                        <p>{val.quantity}</p>
                        <hr></hr>
                        <p>{val.ingredients}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Order
