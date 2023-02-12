const express = require('express')
// const mongoose = require('mongoose')
const morgan = require('morgan')
require('colors')
const dotenv = require('dotenv')
const connectDB=require('./config/config')



//config dotenv
dotenv.config()

//connection mongodb
connectDB()

const app = express()

// middleware
app.use(express.json())
app.use(morgan('dev'))

//route
app.use('/api/pizzas',require('./routes/pizzaRoute'))
app.use('/api/users' , require('./routes/userRoutes'))
app.use('/api/orders',require('./routes/orderRoute'))
app.get('/' , (req,res) => {
    // req is use for user data
    res.send('hello from node server')
})

app.listen(8080 , () => {
    console.log("server is running on  port 8080")

})