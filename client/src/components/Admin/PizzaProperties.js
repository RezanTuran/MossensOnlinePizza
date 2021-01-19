import React, { useState, useEffect } from 'react';
import '../Admin/style.css';
import Axios from 'axios';

function PizzaProperties() {

    const [pizzaList, setPizzaList] = useState([])

    const [newPrice, setNewPrice] = useState('')
    const [newPizzaName, setNewPizzaName] = useState('')
  
    useEffect(() => {
      Axios.get('https://mossenspizzeria.herokuapp.com/api/get').then((Response) => {
        setPizzaList(Response.data)
      })
    }, [])
  
  
    // Delete pizza
    const deletePizza = (pizza) => {
      Axios.delete(`https://mossenspizzeria.herokuapp.com/api/delete/${pizza}`)
      window.location.reload()
    }
  
    // Update pizza
    const updatePizzaPrice = (pizza) => {
      Axios.put('https://mossenspizzeria.herokuapp.com/api/updatePrice/', {
        pizzaId: pizza,
        pizzaPrice: newPrice,
      });
      setNewPrice('')
      window.location.reload()
    }
    const updatePizzaName = (pizza) => {
      Axios.put('https://mossenspizzeria.herokuapp.com/api/updateName/', {
        pizzaId: pizza,
        pizzaName: newPizzaName,
      });
      setNewPizzaName('')
      window.location.reload()
    }
    return (
        <div className="App">
        {pizzaList.map((val) => {
          return (
            <div className="card">
              <p>Pizza ID: {val.pizzaId}</p>
              <p>Pizzanamn: {val.pizzaName}</p>
              <p>Pizza pris: {val.pizzaPrice}</p>
              <p>Pizza pris familj: {val.pizzaPriceF}</p>
              <p>ingredienser: {val.ingredients}</p>
  
              <button className="adminButton" onClick={() => { deletePizza(val.pizzaId) }}>Delete</button>
              <input type="text" id="updateInput" placeholder="pris"
                onChange={(e) => {
                  setNewPrice(e.target.value)
                }}
              />
              <input type="text" id="updateInput" placeholder="name"
                onChange={(e) => {
                  setNewPizzaName(e.target.value)
                }}
              />
              <button
                className="adminButton"
                onClick={() => { updatePizzaPrice(val.pizzaId) }}>Update Pizzaprice
                 </button>
  
              <button
                className="adminButton"
                onClick={() => { updatePizzaName(val.pizzaId) }}>Update Pizzaname
                 </button>
  
            </div>
          )
        })}
  
      </div>
    )
}

export default PizzaProperties
