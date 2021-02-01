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
                        <h2 style={{textAlign:'center'}}>Kunduppgifter</h2>
                        <h4>Namn: <span style={{ color: 'yellow' }}>{val.firstName} {val.sureName}</span></h4>
                        <h4>Address: <span style={{ color: 'yellow' }}>{val.adress}</span></h4>
                        <h4>Postnummer: <span style={{ color: 'yellow' }}>{val.postNumber}</span></h4>
                        <h4>Telefonnummer: <span style={{ color: 'yellow' }}>{val.phone}</span></h4>
                        <h4>E-post: <span style={{ color: 'yellow' }}>{val.epost}</span></h4>
                        <h4>Datum: <span style={{ color: 'yellow' }}>{val.date}</span></h4>
                        <h2 style={{textAlign:'center'}}>Beställning</h2>
                        <hr></hr>
                        <p>Pizzanamn: <span style={{ color: 'yellow' }}>{val.pizzaName}</span></p>
                        <hr></hr>
                        <p>Antal pizza: <span style={{ color: 'yellow' }}>{val.quantity}</span></p>
                        <hr></hr>
                        <p>Ingredienser: <span style={{ color: 'yellow' }}>{val.ingredients}</span></p>
                        <hr></hr>
                        <p>Totalpris: <span style={{ color: 'yellow' }}>{val.pizzaPrice} :-</span></p>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}

export default Order
