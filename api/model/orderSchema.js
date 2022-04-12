const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer:String,
    product:String,
    purchased:String,
    delivery:String
    
})
module.exports = mongoose.model('order', orderSchema)
