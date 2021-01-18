import React, { useState } from 'react'
import '../Admin/style.css';
import Axios from 'axios';

function InserPizza() {

    const [pizzaName, setPizzaName] = useState('')
    const [pizzaPrice, setPizzaPrice] = useState('')
    const [pizzaPriceF, setPizzaPriceF] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [pizzaList, setPizzaList] = useState([])

    // Post pizza
    const insertPizza = () => {
        Axios.post('https://mossenspizzeria.herokuapp.com/api/insert', {
            pizzaName: pizzaName,
            pizzaPrice: pizzaPrice,
            pizzaPriceF: pizzaPriceF,
            ingredients: ingredients
        });

        setPizzaList([
            ...pizzaList,
            { pizzaName: pizzaName, pizzaPrice: pizzaPrice, pizzaPriceF: pizzaPriceF, ingredients: ingredients }
        ]);
        window.location.reload()
    };

    return (
        <div className="app">
            <div className="form">
                <label>Pizzanamn</label>
                <input type="text" name="pizzaName" onChange={(e) => {
                    setPizzaName(e.target.value)
                }} />
                <label>Pizzapris</label>
                <input type="text" name="pizzaPrice" onChange={(e) => {
                    setPizzaPrice(e.target.value)
                }} />
                <label>Pizzapris Familj</label>
                <input type="text" name="pizzaPriceF" onChange={(e) => {
                    setPizzaPriceF(e.target.value)
                }} />
                <label>Pizza ingredients</label>
                <input type="text" name="ingredients" onChange={(e) => {
                    setIngredients(e.target.value)
                }} />

                <button onClick={insertPizza}>Spara</button>
                </div>
            </div>
    )
}

export default InserPizza
