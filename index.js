const express = require("express");
const app = express();
const importData = require("./data.json")
let port = process.env.PORT || 3000;

app.get("/", (req,res) =>{
    res.send("Hello Rezan")
})

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
}) 