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
                        <h2>Kund: {val.firstName} {val.sureName}</h2>
                        <hr></hr>
                        <p>Pizzanamn: <span style={{color: 'yellow'}}>{val.pizzaName}</span></p>
                        <hr></hr>
                        <p>Pizzapris: <span style={{color: 'yellow'}}>{val.pizzaPrice}</span></p>
                        <hr></hr>
                        <p>Antal pizza: <span style={{color: 'yellow'}}>{val.quantity}</span></p>
                        <hr></hr>
                        <p>Ingredienser: <span style={{color: 'yellow'}}>{val.ingredients}</span></p>
                    </div>
                )
            })}
        </div>
    )
}

export default Order
