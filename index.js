const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

const db = mysql.createPool({
    host: "us-cdbr-east-03.cleardb.com",
    user: "b2c51d49d060ca",
    password: "6f567673",
    database: "heroku_4a9f54220fd7a1d",
});


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

// Register Admin
app.post('/api/register', (req, res) => {
    const userName = req.body.userName
    const password = req.body.password

    if (err) {
        console.log(err);
    }

    bcrypt.hash(password, saltRounds, (err, hash) => {
        const sqlInsertAdmin = "INSERT INTO loginAdmin (userName,password) VALUES (?,?)";
        db.query(sqlInsertAdmin, [userName, hash],
            (err, result) => {
                console.log(err);
            })
    })

    // Login Admin
    app.post('/api/login', (req, res) => {

        const userName = req.body.userName
        const password = req.body.password

        const sqlSelectAdmin = "SELECT * FROM loginAdmin WHERE userName = ?";
        db.query(sqlSelectAdmin, userName,
            (err, result) => {
                if (err) {
                    res.send({ err: err })
                }
                if (result.length > 0) {
                    bcrypt.compare(password, result[0].password, (error, response) => {
                        if (response) {
                            res.send(result)
                        } else {
                            res.send({ message: "Fel användarnamn eller lösenord!" })
                        }
                    })
                } else {
                    res.send({ message: "User doesnt exist" })
                }
            }
        )
    });
})

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

