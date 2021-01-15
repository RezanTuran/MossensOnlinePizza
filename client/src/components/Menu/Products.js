import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import pizzaImg from './images/pic-1.jpeg';

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
                                <h5 className="price">{product.pizzaPrice} :- &nbsp; &nbsp; <span>{product.pizzaPriceF} :-</span></h5>
                            </div>
                            <p>{product.ingredients}</p>
                            <button onClick={() => addToCart(product)}>Beställa</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Products
