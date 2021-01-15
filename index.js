const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const path = require('path');
let port = process.env.PORT || 5000;

const db = mysql.createPool({
    host: "us-cdbr-east-03.cleardb.com",
    user: "b2c51d49d060ca",
    password: "6f567673",
    database: "heroku_4a9f54220fd7a1d",
});

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Get Pizza
app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM pizza";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
})

// Post Pizza
app.post('/api/insert', (req, res) => {
    const pizzaName = req.body.pizzaName
    const pizzaPrice = req.body.pizzaPrice
    const pizzaPriceF = req.body.pizzaPriceF
    const ingredients = req.body.ingredients

    const sqlInsert = "INSERT INTO pizza (pizzaName, pizzaPrice, pizzaPriceF, ingredients) VALUES (?,?,?,?)";
    db.query(sqlInsert, [pizzaName, pizzaPrice, pizzaPriceF, ingredients], (err, result) => {
        console.log(result);
    });
});

// Delete Pizza
app.delete('/api/delete/:pizzaId', (req, res) => {
    const name = req.params.pizzaId;
    const sqlDelete = "DELETE FROM pizza WHERE pizzaId = ?";
    db.query(sqlDelete, name, (err, result) => {
        if (err) console.log(err);
    })
})

// Update PizzaPrice
app.put('/api/updatePrice', (req, res) => {
    const pizzaId = req.body.pizzaId;
    const price = req.body.pizzaPrice;
    const sqlUpdate = "UPDATE pizza SET pizzaPrice = ? WHERE pizzaId = ?";
    db.query(sqlUpdate, [price, pizzaId], (err, result) => {
        if (err) console.log(err);
    })
})
// Update PizzaName
app.put('/api/updateName', (req, res) => {
    const pizzaId = req.body.pizzaId;
    const name = req.body.pizzaName;
    const sqlUpdate = "UPDATE pizza SET pizzaName = ? WHERE pizzaId = ?";
    db.query(sqlUpdate, [name, pizzaId], (err, result) => {
        if (err) console.log(err);
    })
})

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
})

