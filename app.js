const express = require ('express')
const app = express()





app.get('/', (req,res) => {
    res.send("Welcome to my Project.")
})




module.exports = app;