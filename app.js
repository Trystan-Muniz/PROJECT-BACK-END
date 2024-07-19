const express = require ('express')
const app = express()
const cors = require ('cors')
const gamesController = require ('./Controllers/gamescontroller')


// MIDDLEWARE
app.use(express.json())
app.use(cors())
app.use("/games", gamesController)


// localhost:4444/
app.get('/', (req,res) => {
    res.send("<h1>Welcome to GameFO</h1>")
})



app.get('*', (req,res) => {
    res.status(404).send("Page Not Found.")
})



module.exports = app;