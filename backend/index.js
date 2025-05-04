const express = require('express')
const app = express();


app.get("/", (req , res)=>{
    const value = res.sendDate;
    res.send('hi this is server',value)
})

app.get('/signup' , (req , res)=>{
    res.send("this is it")
})

app.get("/login" , (req,res)=>{
    res.send("this is login page")
})

app.listen(3000)