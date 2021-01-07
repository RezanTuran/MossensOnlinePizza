import React, { useState, useEffect } from 'react';
import "./layout.css"
import Axios from 'axios';
import axios from 'axios';

const Layout = () => {
  const [pizzaName, setPizzaName] = useState('')
  const [pizzaPrice, setPizzaPrice] = useState('')
  const [pizzaList, setPizzaList] = useState([])

  const [newPrice, setNewPrice] = useState('')

  useEffect(() => {
    axios.get('https://mossenspizzeria.herokuapp.com/api/get').then((Response) => {
      setPizzaList(Response.data)
    })
  }, [])

  // Post pizza
  const insertPizza = () => {
    Axios.post('https://mossenspizzeria.herokuapp.com/api/insert', {
      pizzaName: pizzaName,
      pizzaPrice: pizzaPrice,
    });

    setPizzaList([
      ...pizzaList,
      { pizzaName: pizzaName, pizzaPrice: pizzaPrice }
    ]);
  };

  // Delete pizza
  const deletePizza = (pizza) =>{
    Axios.delete(`https://mossenspizzeria.herokuapp.com/api/delete/${pizza}`)

    window.location.reload()
  }

  // Update pizza
  const updatePizza = (pizza) =>{
    Axios.put('https://mossenspizzeria.herokuapp.com/api/update/', {
      pizzaName: pizza,
      pizzaPrice: newPrice,
    });
    setNewPrice('')
    window.location.reload()
  }

  return (
    <div className="App">
      <h1>Rezan</h1>

      <div className="form">
        <label>Pizzanamn</label>
        <input type="text" name="pizzaName" onChange={(e) => {
          setPizzaName(e.target.value)
        }} />
        <label>Pizzapris</label>
        <input type="text" name="pizzaPrice" onChange={(e) => {
          setPizzaPrice(e.target.value)
        }} />

        <button onClick={insertPizza}>Spara</button>

        {pizzaList.map((val) => {
          return (
            <div className="card">
              <h1>{val.pizzaName}</h1>
              <p>{val.pizzaPrice}</p>

              <button onClick={() => {deletePizza(val.pizzaName)}}>Delete</button>
              <input type="text" id="updateInput" 
              onChange={(e) =>{
                setNewPrice(e.target.value)
              }}
              />
              <button
               onClick={()=>{updatePizza(val.pizzaName)}}>Update
               </button>
            </div>
          )
        })}

      </div>
    </div>
  );
    }
export default Layout
