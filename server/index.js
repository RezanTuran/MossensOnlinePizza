
const express = require("express");
const app = express();
let port = process.env.PORT || 3001;

app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.send("Hello World")
})


app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
})  