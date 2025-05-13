/*const router = require('express').Router;
const JWT = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');*/
const express = require('express');
const router = express.Router();

//middleware 

const auth = function (req, res, next) {
    console.log("auth wala middleware run hua");
    req.user = { UserId: 390867356, role: "admin" };
    if (req.user){
        next();
    }else{
        console.log(":(")
        res.json({
            sucess:false,
            message:"Not a valid user"
        })
    }
}

const isStudent = function (req , res , next ){
    console.log("Abhi isstudent wla middleware chala");
    if(req.user.role === "student"){
        console.log("ha ye student hai")
        next();
    }else{
        res.json({
            sucess:false,
            message:"not a student"
        })
    }
}

const isAdmin = function (req , res , next ){
    console.log("Abhi isAdmin wla middleware chala");
    if(req.user.role === "admin"){
        console.log("ha ye admin hai")
        next();
    }else{
        res.json({
            sucess:false,
            message:"not a admin"
        })
    }
}

//routes


router.get('/student' , auth , isStudent , (req , res )=>{
    console.log("I am inside student page")
    res.send("student specific page")
})

router.get('/admin' , auth , isAdmin , (req ,res)=>{
    console.log("I am in admin page");
    res.send("Admin specific page");
})

module.exports = router;
