import React, { useState, useEffect } from 'react';
import './css/App.css';
import Axios from 'axios';
import axios from 'axios';

function App() {

  const [pizzaName, setPizzaName] = useState('')
  const [pizzaPriceN, setPizzaPriceN] = useState('')
  const [pizzaPriceF, setPizzaPriceF] = useState('')
  const [desc, setDesc] = useState('')

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
      pizzaPriceN: pizzaPriceN,
      pizzaPriceF: pizzaPriceF,
      desc: desc
    });

    setPizzaList([
      ...pizzaList,
      { pizzaName: pizzaName, pizzaPriceN: pizzaPriceN }
    ]);
  };

  // Delete pizza
  const deletePizza = (pizza) => {
    Axios.delete(`https://mossenspizzeria.herokuapp.com/api/delete/${pizza}`)

    window.location.reload()
  }

  // Update pizza
  const updatePizza = (pizza) => {
    Axios.put('https://mossenspizzeria.herokuapp.com/api/update/', {
      pizzaName: pizza,
      pizzaPriceN: newPrice,
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
        <label>Pizzapris Naturel</label>
        <input type="text" name="pizzaPriceN" onChange={(e) => {
          setPizzaPriceN(e.target.value)
        }} />
        <label>Pizzapris Familj</label>
        <input type="text" name="pizzaPriceF" onChange={(e) => {
          setPizzaPriceF(e.target.value)
        }} />
          <label>Pizzapris Ingredienser</label>
        <input type="text" name="desc" onChange={(e) => {
          setDesc(e.target.value)
        }} />

        <button onClick={insertPizza}>Spara</button>

        {pizzaList.map((val) => {
          return (
            <div className="card">
              <h1>{val.pizzaName}</h1>
              <p>{val.pizzaPriceN}</p>
              <p>{val.pizzaPriceF}</p>
              <p>{val.desc}</p>

              <button onClick={() => { deletePizza(val.pizzaName) }}>Delete</button>
              <input type="text" id="updateInput"
                onChange={(e) => {
                  setNewPrice(e.target.value)
                }}
              />
              <button
                onClick={() => { updatePizza(val.pizzaName) }}>Update
               </button>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
