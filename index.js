const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const path = require('path');
let port = process.env.PORT || 3001;

const db = mysql.createPool({
    host: "us-cdbr-east-02.cleardb.com",
    user: "b73aa7e6839332",
    password: "2640713d",
    database: "heroku_6047f4a63e58bb6",
});

app.use(express.static(path.join(__dirname, 'build')));
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
    const pizzaPriceN = req.body.pizzaPriceN
    const pizzaPriceF = req.body.pizzaPriceF
    const desc = req.body.desc

    const sqlInsert = "INSERT INTO pizza (pizzaName, pizzaPriceN, pizzaPriceF, desc) VALUES (?,?,?,?)";
    db.query(sqlInsert, [pizzaName, pizzaPriceN, pizzaPriceF, desc], (err, result) => {
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
    const price = req.body.pizzaPriceN;
    const sqlUpdate = "UPDATE pizza SET pizzaPriceN = ? WHERE pizzaName = ?";
    db.query(sqlUpdate, [price,name], (err, result) =>{
       if(err) console.log(err);
    })
})

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
})

