const express = require('express')
const router = express.Router()
const ordermodel = require('../model/orderSchema')

router.get('/', (req,res,next)=>{
        ordermodel.find()
        .then(result=>{
            res.status(200).json({
                orderdata:result
            })
        })
        .catch(err=>{
            res.status(500).json({
                orderdata:err
            })
        })
})

router.delete('/', (req,res,next)=>{
    ordermodel.remove({_id:req.params.id})
})

router.post('/',(req,res,next)=>{
    const{customer,product,purchased,delivery}= req.body;
    const orderdata = new ordermodel({
        customer,product,purchased,delivery
    })
    orderdata.save()
})


    


module.exports = router;
