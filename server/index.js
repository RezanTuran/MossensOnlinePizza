const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

app.get("/", (req,res) =>{
    res.send("Hello Rezan")
})

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
}) 

console.log("Rezan");