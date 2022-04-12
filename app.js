const express = require('express')
const app = express();
const orderRoute = require('./api/route/order');
const productRoute = require('./api/route/product');

const mongoose = require('mongoose')
const bodyparse = require('body-parser')

mongoose.connect('mongodb+srv://aniket:ANIKET@aniket.zfrpl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.on("error", error=>{
    console.log("database connection Failed!");
})
mongoose.connection.on("connected", connected=>{
    console.log("database connection successfully!");
})


app.use(bodyparse.urlencoded({extended:false}))
app.use(bodyparse.json())

app.use('/order', orderRoute)
app.use('/product', productRoute)

app.use((req,res,next)=>{
    res.status(200).json({
        msg:"this is app file!"
    })
})


module.exports = app;