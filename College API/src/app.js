const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require('./db/conn');

app.get('/' , async (req , res)=>{
    res.send('hello from simple server :)')
})

app.listen(port, () => {
    console.log(`connection sucess at ${port}`);
})