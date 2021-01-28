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
                        <p>Pizza {val.food}</p>
            
                    </div>
                )
            })}
        </div>
    )
}

export default Order
