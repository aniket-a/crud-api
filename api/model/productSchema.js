const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    product_id:Number,
    name:String,
    description:String,
    quantity:String,
    order_id:String,
    amt:Number
    
})
module.exports = mongoose.model('product', productSchema)
