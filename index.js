
const express = require("express");
const app = express();
let port = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
})  

// Database Connection
const mysql = require('mysql');
const con = mysql.createConnection({
   host: 'us-cdbr-east-02.cleardb.com',
   user: 'b5e60401ad3bc3',
   password: '2c0d91a5',
   database: 'heroku_6365494920956f5'
})

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected");
    con.query(`SELECT * FROM pizza`, (err , results) =>{
    if(err) throw err;
    console.log(results);
    app.get('/pizza', (req,res) => res.json(results))
    })
})


