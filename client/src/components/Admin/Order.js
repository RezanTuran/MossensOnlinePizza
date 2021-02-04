import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import { Helmet } from "react-helmet";

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
        <>
            <Helmet>
                <title>Mossens Pizzeria | Beställningar</title>
            </Helmet>
            <div>
                {orderList.map((val) => {
                    return (
                        <div className="card">
                            <h2 className="orderTitle">Kunduppgifter</h2>
                            <h4>Namn: <span className="customerInfo">{val.firstName} {val.sureName}</span></h4>
                            <Divider />
                            <h4>Address: <span className="customerInfo">{val.adress}</span></h4>
                            <Divider />
                            <h4>Postnummer: <span className="customerInfo">{val.postNumber}</span></h4>
                            <Divider />
                            <h4>Telefonnummer: <span className="customerInfo">{val.phone}</span></h4>
                            <Divider />
                            <h4>E-post: <span className="customerInfo">{val.epost}</span></h4>
                            <Divider />
                            <h4>Datum: <span className="customerInfo">{val.date}</span></h4>
                            <Divider />
                            <h2 className="orderTitle">Beställning</h2>
                            <Divider />
                            <p>Pizzanamn: <span className="customerInfo">{val.pizzaName}</span></p>
                            <Divider />
                            <p>Antal pizza: <span className="customerInfo">{val.quantity}</span></p>
                            <Divider />
                            <p>Ingredienser: <span className="customerInfo">{val.ingredients}</span></p>
                            <Divider />
                            <p>Totalpris: <span className="customerInfo">{val.pizzaPrice} :-</span></p>
                            <Divider />
                            <Button
                                variant="contained"
                                style={{ backgroundColor: '#9D0606', color: 'white' }}
                                endIcon={<DeleteIcon />}
                                onClick={() => { deleteOrder(val.id) }}
                            >
                                Ta Bort
                        </Button>
                        </div>
                    )
                })}
            </div>
            </>
    )
}

export default Order
