const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
let port = process.env.PORT || 3001;

const db = mysql.createPool({
    host: "us-cdbr-east-02.cleardb.com",
    user: "bd8b92013b46df",
    password: "d66ea7f9",
    database: "heroku_d56fb079c2635f9",
});

app.use(express.static("public"));
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

    const sqlInsert = "INSERT INTO pizza (pizzaName, pizzaPrice) VALUES (?,?)";
    db.query(sqlInsert, [pizzaName, pizzaPrice], (err, result) => {
        console.log(result);
    });
});

// Delete Pizza
app.delete('/api/delete/:pizzaName', (req, res) =>{
    const name = req.params.pizzaName;
    const sqlDelete = "DELETE FROM pizza WHERE pizzaName = ?";
    db.query(sqlDelete, name, (err, result) =>{
       if(err) console.log(err);
    })
})

// Update Pizza
app.put('/api/update', (req, res) =>{
    const name = req.body.pizzaName;
    const price = req.body.pizzaPrice;
    const sqlUpdate = "UPDATE pizza SET pizzaPrice = ? WHERE pizzaName = ?";
    db.query(sqlUpdate, [price,name], (err, result) =>{
       if(err) console.log(err);
    })
})

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
})

