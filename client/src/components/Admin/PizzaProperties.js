import React, { useState, useEffect } from 'react';
import '../Admin/style.css';
import Axios from 'axios';

function PizzaProperties() {

  const [pizzaList, setPizzaList] = useState([])

  const [newPrice, setNewPrice] = useState('')
  const [newPizzaName, setNewPizzaName] = useState('')
  const [newPizzaIngredients, setNewIngredients] = useState('')

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

  // Update pizzaPrice
  const updatePizzaPrice = (pizza) => {
    Axios.put('https://mossenspizzeria.herokuapp.com/api/updatePrice/', {
      pizzaId: pizza,
      pizzaPrice: newPrice,
    });
    setNewPrice('')
    window.location.reload()
  }
  // Update PizzaName
  const updatePizzaName = (pizza) => {
    Axios.put('https://mossenspizzeria.herokuapp.com/api/updateName/', {
      pizzaId: pizza,
      pizzaName: newPizzaName,
    });
    setNewPizzaName('')
    window.location.reload()
  }
  // Update PizzaIngredients
  const updatePizzaIngrediens = (pizza) => {
    Axios.put('https://mossenspizzeria.herokuapp.com/api/updateIngrediens', {
      pizzaId: pizza,
      ingredients: newPizzaIngredients,
    });
    setNewIngredients('')
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
            <input type="text" id="updateInput" placeholder="Ingredients"
              onChange={(e) => {
                setNewIngredients(e.target.value)
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
            <button
              className="adminButton"
              onClick={() => { updatePizzaIngrediens(val.pizzaId) }}>Update ingredients
                 </button>

          </div>
        )
      })}

    </div>
  )
}

export default PizzaProperties
