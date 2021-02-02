import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function Order() {

    const [orderList, setOrderlist] = useState([])

    useEffect(() => {
        Axios.get('https://mossenspizzeria.herokuapp.com/api/getOrder').then((Response) => {
            setOrderlist(Response.data)
        })
    }, [])

    const deleteOrder = (pizza) => {
        Axios.delete(`https://mossenspizzeria.herokuapp.com/api/deleteOrder/${pizza}`)
        window.location.reload()
    }

    return (
        <div>
            {orderList.map((val) => {
                return (
                    <div className="card">
                        <h2 className="orderTitle">Kunduppgifter</h2>
                        <h4>Namn: <span className="customerInfo">{val.firstName} {val.sureName}</span></h4>
                        <h4>Address: <span className="customerInfo">{val.adress}</span></h4>
                        <h4>Postnummer: <span className="customerInfo">{val.postNumber}</span></h4>
                        <h4>Telefonnummer: <span className="customerInfo">{val.phone}</span></h4>
                        <h4>E-post: <span className="customerInfo">{val.epost}</span></h4>
                        <h4>Datum: <span className="customerInfo">{val.date}</span></h4>
                        <h2 className="orderTitle">Beställning</h2>
                        <hr></hr>
                        <p>Pizzanamn: <span className="customerInfo">{val.pizzaName}</span></p>
                        <hr></hr>
                        <p>Antal pizza: <span className="customerInfo">{val.quantity}</span></p>
                        <hr></hr>
                        <p>Ingredienser: <span className="customerInfo">{val.ingredients}</span></p>
                        <hr></hr>
                        <p>Totalpris: <span className="customerInfo">{val.pizzaPrice} :-</span></p>
                        <hr></hr>
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<DeleteIcon />}
                            onClick={() => { deleteOrder(val.id) }}
                        >
                            Ta Bort
                        </Button>
                    </div>
                )
            })}
        </div>
    )
}

export default Order
