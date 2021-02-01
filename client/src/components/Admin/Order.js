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
                        <h2> {val.firstName}</h2>
                        <hr></hr>
                        <p>{val.pizzaName}</p>
                        <p>{val.pizzaPrice}</p>
                        <p>{val.quantity}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Order
