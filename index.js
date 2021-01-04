
const express = require("express");
const mysql = require('mysql');
const app = express();
let port = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
})

// Database Connection
const con = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b5e60401ad3bc3',
    password: '2c0d91a5',
    database: 'heroku_6365494920956f5'
})

// Get FoodMenu from database
con.connect(function (err) {
    if (err) throw err;
    console.log("Successfully connected!");

    // Get all pizza from database
    con.query(`SELECT * FROM pizza`, (err, results) => {
        if (err) throw err;
        console.log(results);
        app.get('/pizza', (req, res) => res.json(results))
    })

    // // Get all pizza from database
    // con.query(`SELECT * FROM kebabPizza`, (err, results) => {
    //     if (err) throw err;
    //     console.log(results);
    //     app.get('/kebabPizza', (req, res) => res.json(results))
    // })

    // // Get all salads from database
    // con.query(`SELECT * FROM salad`, (err, results) => {
    //     if (err) throw err;
    //     console.log(results);
    //     app.get('/salad', (req, res) => res.json(results))
    // })

    // // Get all kebabdishes form database
    // con.query(`SELECT * FROM kebabDish`, (err, results) => {
    //     if (err) throw err;
    //     console.log(results);
    //     app.get('/kebabDish', (req, res) => res.json(results))
    // })

    // // Get all hamburger form database
    // con.query(`SELECT * FROM hamburger`, (err, results) => {
    //     if (err) throw err;
    //     console.log(results);
    //     app.get('/hamburger', (req, res) => res.json(results))
    // })

    // // Get all alacarte form database
    // con.query(`SELECT * FROM alaCarte`, (err, results) => {
    //     if (err) throw err;
    //     console.log(results);
    //     app.get('/alaCarte', (req, res) => res.json(results))
    // })

    // // Get all accessories form database
    // con.query(`SELECT * FROM accessories`, (err, results) => {
    //     if (err) throw err;
    //     console.log(results);
    //     app.get('/accessories', (req, res) => res.json(results))
    // })
})


